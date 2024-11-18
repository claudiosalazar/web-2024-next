import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.scss";
import './globalicons.scss';

// Components
import Header from "./components/Header";
import Contactame from "./contactame/page";


export const metadata: Metadata = {
  title: "Claudio Salazar | UI Developer | UI Designer | Frontend Designer",
  description: "Portfolio de Claudio Salazar",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="contenido">
          <Header />
          <div className="container-fluid">
            {children}
          </div>
          <Contactame />
        </div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}

export default RootLayout;