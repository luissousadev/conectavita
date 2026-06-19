"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const ease = [0.25, 0.1, 0.25, 1] as const;

function anim(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  };
}

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.span className={styles.badge} {...anim(0.1)}>
            🌿 Terapia Integrativa
          </motion.span>

          <motion.h1 className={styles.headline} {...anim(0.22)}>
            Cuidado que acolhe,{" "}
            <span className={styles.highlight}>equilíbrio que transforma.</span>
          </motion.h1>

          <motion.p className={styles.subheadline} {...anim(0.34)}>
            Integro ciência, escuta e terapias complementares para cuidar da
            sua saúde de forma integral e personalizada.
          </motion.p>

          <motion.p className={styles.bio} {...anim(0.44)}>
            Sou Isabelle Brandão, Enfermeira e Terapeuta Integrativa. Meu
            propósito é ajudar você a encontrar mais saúde, bem-estar e
            qualidade de vida através de um atendimento humanizado e acolhedor.
          </motion.p>

          <motion.div className={styles.ctas} {...anim(0.54)}>
            <a
              href="https://wa.me/5571996508951"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Agendar Atendimento
            </a>
            <a href="#servicos" className={styles.btnSecondary}>
              Conhecer Serviços
            </a>
          </motion.div>

          <motion.div className={styles.trust} {...anim(0.64)}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🤍</span>
              <span>Atendimento Humanizado</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🌿</span>
              <span>Escuta Qualificada</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⚖️</span>
              <span>Saúde &amp; Equilíbrio</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <div className={styles.imageBg} />
          <div className={styles.imageInner}>
            <Image
              src="/isabelle.jpg"
              alt="Isabelle Brandão — Enfermeira e Terapeuta Integrativa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.photo}
            />
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingIcon}>✦</span>
            <div>
              <p className={styles.floatingName}>Isabelle Brandão</p>
              <p className={styles.floatingRole}>Enfermeira · Terapeuta Integrativa</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.leafLeft} aria-hidden="true" />
      <div className={styles.leafRight} aria-hidden="true" />
    </section>
  );
}
