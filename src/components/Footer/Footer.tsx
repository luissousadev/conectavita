import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoConecta}>conecta</span>
              <span className={styles.logoVita}>VITA</span>
            </div>
            <p className={styles.brandSub}>
              Isabelle Brandão
              <br />
              <span>Enfermeira e Terapeuta Integrativa</span>
            </p>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.contactTitle}>Contato &amp; Redes</h4>
            <ul className={styles.contactList}>
              <li>
                <a
                  href="https://instagram.com/conectavita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 @conectavita
                </a>
              </li>
              <li>
                <span>📍Conjunto Guilherme Marback s/n St 1 Bl 60</span>
                <span> Av. Paulista, 202, Salvador - BA, 41720-005</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Conecta Vita. Todos os direitos reservados.
          </p>
          <p className={styles.tagline}>Cuidando do corpo, equilibrando a vida.</p>
        </div>
      </div>
    </footer>
  );
}
