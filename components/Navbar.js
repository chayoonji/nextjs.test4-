import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/profile">
          <a>profile</a>
        </Link>

        <Link href="/coins">
          <a>coins</a>
        </Link>

        <Link href="/contect">
          <a>주인장</a>
        </Link>
      </div>
    </div>
  );
}
