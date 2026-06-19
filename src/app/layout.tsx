import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Conecta Vita | Isabelle Brandão — Terapeuta Integrativa",
  description:
    "Integro ciência, escuta e terapias complementares para cuidar da sua saúde de forma integral e personalizada. Auriculoterapia, Massagem, Bambuterapia e mais. Salvador/BA.",
  keywords: [
    "terapeuta integrativa",
    "auriculoterapia",
    "massagem terapêutica",
    "bambuterapia",
    "ventosaterapia",
    "reflexoterapia",
    "Salvador",
    "Imbuí",
    "Isabelle Brandão",
    "Conecta Vita",
  ],
  openGraph: {
    title: "Conecta Vita | Isabelle Brandão — Terapeuta Integrativa",
    description:
      "Cuidado que acolhe, equilíbrio que transforma. Agende sua consulta.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
