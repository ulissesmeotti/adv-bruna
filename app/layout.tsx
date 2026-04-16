import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  title: "Bruna Machado Advocacia | Advogada no Paraná - Família, Trabalho e Penal",
  description:
    "Advogada Bruna Machado - 3+ anos de experiência em Direito de Família, Trabalho e Penal no Paraná. Atendimento humanizado e soluções jurídicas eficazes. Entre em contato via WhatsApp.",
  keywords: [
    "advogada Paraná",
    "Bruna Machado",
    "direito de família",
    "direito do trabalho",
    "direito penal",
    "advogada Bruna Machado",
    "OAB PR",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Bruna Machado Advocacia | Advogada no Paraná",
    description:
      "Advogada especializada em Direito de Família, Trabalho e Penal. Atendimento humanizado e soluções jurídicas eficazes.",
    siteName: "Bruna Machado Advocacia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bruna Machado Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruna Machado Advocacia | Advogada no Paraná",
    description:
      "Advogada especializada em Direito de Família, Trabalho e Penal. Atendimento humanizado e soluções jurídicas eficazes.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}