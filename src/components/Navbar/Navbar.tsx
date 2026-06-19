"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoConecta}>conecta</span>
          <span className={styles.logoVita}>VITA</span>
        </a>
        <ul className={styles.links}>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
          <li>
            <a
              href="https://wa.me/5571996508951"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Agendar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
