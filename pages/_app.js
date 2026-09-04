import "./_app.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSession } from "../lib/hooks/session";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { isSignedIn, signOut } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className={"main site"}>
      <Header>
        <h1>
          <Link href="/">ToDoodle!</Link>
        </h1>

        {isSignedIn && (
          <h2>
            {" "}
            <img src="loginicon.png" alt="" />
          </h2>
        )}
        <div className="sidebar-toggle" id="Burger" onClick={toggleSidebar}>
          <img src={isOpen ? "/x-menu.png" : "/menu.jpg"} alt="menu-button" />
        </div>
      </Header>

      <main>
        <Component {...pageProps} />
      </main>

      <aside className={isOpen ? "isOpen" : ""}>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/todos" onClick={toggleSidebar}>
              Todos
            </Link>
          </li>
        </ul>
        <ul>
          <li className="Login">
            <Link href="/login" onClick={toggleSidebar}>
              Login
            </Link>
            <Link href="/" onClick={handleLogoutClick}>
              Logout
            </Link>
          </li>
        </ul>
      </aside>

      <Footer />
    </div>
  );
}
