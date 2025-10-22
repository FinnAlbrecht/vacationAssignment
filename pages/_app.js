import "./_app.css";
import Link from "next/link";

import { useMode } from "../lib/hooks/modes";
import { useState } from "react";

import Header from "../components/header";
import { useSession } from "../lib/hooks/session";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  const handleclicklogout = () => {
    signOut();
    router.push("/");
  };

  const { session, isSignedIn, signOut } = useSession([]);
  const user = session.user;
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
          <li>
            <Link href="/reminder" onClick={toggleSidebar}>
              Reminder
            </Link>
          </li>

          <li>
            <Link href="/settings" onClick={toggleSidebar}>
              Settings
            </Link>
          </li>
        </ul>
        <lu>
          <li className="Login">
            <Link href="/login" onClick={toggleSidebar}>
              Login
            </Link>
            <Link href="/" onClick={handleclicklogout}>
              Logout
            </Link>
          </li>
        </lu>
      </aside>

      <Footer />
    </div>
  );
}
