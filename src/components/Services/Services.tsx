"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Services.module.css";

const services = [
  {
    icon: "👂",
    name: "Auriculoterapia",
    description:
      "Estimulação de pontos específicos da orelha para promover equilíbrio físico e emocional.",
  },
  {
    icon: "🫧",
    name: "Auriculoacupuntura",
    description:
      "Técnica terapêutica que auxilia no tratamento de dores, ansiedade e desequilíbrios do organismo.",
  },
  {
    icon: "🤲",
    name: "Massagem Relaxante",
    description:
      "Promove relaxamento muscular, redução do estresse e sensação de bem-estar.",
  },
  {
    icon: "💆",
    name: "Massagem Terapêutica",
    description:
      "Atua no alívio de dores musculares, tensões e desconfortos físicos.",
  },
  {
    icon: "🎋",
    name: "Bambuterapia",
    description:
      "Técnica realizada com bambus que auxilia na circulação, modelagem corporal e relaxamento.",
  },
  {
    icon: "🌀",
    name: "Ventosaterapia",
    description:
      "Método tradicional utilizado para aliviar dores, tensões e melhorar a circulação sanguínea.",
  },
  {
    icon: "🦶",
    name: "Reflexoterapia Podal",
    description:
      "Estimulação de pontos reflexos dos pés para promover equilíbrio e saúde integral.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{service.icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{service.name}</h3>
      <p className={styles.cardDesc}>{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={headRef}
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.sectionLabel}>O que ofereço</span>
          <h2 className={styles.title}>Meus Serviços</h2>
          <p className={styles.subtitle}>
            Cada serviço é oferecido com escuta ativa, técnica precisa e
            cuidado genuíno com o seu bem-estar.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
