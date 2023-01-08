import Link from "next/link";
import { useSession as justSession } from "@supabase/auth-helpers-react";

const Navigation = () => {
  const session = justSession();
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-link">
        <p>Home</p>
      </Link>
      {session && (
        <Link href="/skills" className="navbar-link">
          <p>Skills</p>
        </Link>
      )}
      <Link href="/account" className="navbar-link">
        <p>{session ? "Profile" : "Login"}</p>
      </Link>
    </nav>
  );
};

export default Navigation;
