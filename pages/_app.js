import "./_app.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";
import { useSession } from "../lib/hooks/session";
import Footer from "../components/footer";
import { NotificationProvider } from "../components/NotificationContainer";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  const handleclicklogout = () => {
    if (confirm("Möchtest du dich wirklich ausloggen?")) {
      signOut();
      setIsOpen(false);
      router.push("/");
    }
  };
  const router = useRouter();
  const { session, isSignedIn, signOut } = useSession();
  const user = session.user;
  return (
    <NotificationProvider>
      <div className={"main site"}>
      <Header>
        <h1>
          <Link href="/">ToDoodle!</Link>
        </h1>

        {isSignedIn && (
          <div className="user-icon">
            <img src="loginicon.png" alt="User" />
          </div>
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
    </NotificationProvider>
  );
}
