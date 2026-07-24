import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teikio - Pedidos claros, cocina organizada",
  description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  metadataBase: new URL("https://teikio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://teikio.com",
    siteName: "Teikio",
    title: "Teikio - Pedidos claros, cocina organizada",
    description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teikio - Pedidos claros, cocina organizada",
    description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  },
  icons: {
    icon: [
      { url: "/teikio-logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/teikio-logo.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
