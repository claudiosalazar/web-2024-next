import type { Metadata } from "next";
import Script from 'next/script';
import { Montserrat } from "next/font/google";
import "./globals.scss";
import './globalicons.scss';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contactame from "./contactame/page";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Claudio Salazar | Diseñador | Frontend Developer",
  description: "Portfolio de Claudio Salazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <div className="contenido">
          <Header />
            {children}
          <Footer />
          <Contactame />
        </div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
