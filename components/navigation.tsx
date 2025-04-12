"use client"

import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav >
  );
}