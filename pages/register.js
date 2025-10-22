import { checkoutPay, login, register } from "../lib/api/auth";
import { useSession } from "../lib/hooks/session";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";

const defaultModel = {
  email: "",
  password: "",
};

function validateModel(model) {
  const errors = {
    email: "",
    password: "",
  };
  let isValid = true;

  if (model.email.trim().length === 0 || !model.email.includes("@")) {
    errors.email = "Email can't be empty and must be valid email";
    isValid = false;
  }

  if (model.password.trim().length === 0 || model.password.length < 8) {
    errors.password =
      "Password can't be empty and must be at least 8 characters long";
    isValid = false;
  }

  return { errors, isValid };
}

export default function RegisterPage() {
  const { session, signIn } = useSession();
  const router = useRouter();

  const [errors, setErrors] = useState(defaultModel);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(defaultModel);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value?.trim();

    setModel({
      ...model,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(defaultModel);

    const result = validateModel(model);

    if (!result.isValid) {
      setErrors(result.errors);
      setIsLoading(false);
      return;
    }

    try {
      const resp = await register(model);
      login(resp);
      const url = router.query.url;
      if (url) {
        router.push(url);
      } else {
        router.push("/");
      }
    } catch (e) {
      setErrors({
        ...errors,
        register: "Login failed",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Register</h1>

      {errors.register && <h2 className={styles.error}>{errors.register}</h2>}

      <form onSubmit={handleSubmit} className={styles.loginform}>
        <fieldset>
          <label>Firstname:</label>
          <input
            type="Firstname"
            name="Firstname"
            onChange={handleChange}
            value={model.firstname}
            autoComplete="Firstname"
            required
          />
          {errors.firstname && (
            <div className={styles.error}>{errors.firstname}</div>
          )}
        </fieldset>

        <fieldset>
          <label>Lastname:</label>
          <input
            type="Lastname"
            name="lastname"
            onChange={handleChange}
            value={model.lastname ?? ""}
            autoComplete="lastname"
          />
          {errors.lastname && (
            <div className={styles.error}>{errors.lastname}</div>
          )}
        </fieldset>

        <fieldset>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={model.email ?? ""}
            autoComplete="email"
            required
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={model.password ?? ""}
            autoComplete="new-password"
            minLength={8}
            required
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </fieldset>
        <Link href="/login">
          <button>Login</button>
        </Link>

        <fieldset>
          <button disabled={isLoading} type="submit">
            {isLoading ? "Loading..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
