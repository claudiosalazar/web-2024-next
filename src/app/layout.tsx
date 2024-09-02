'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type { Metadata } from "next";
import Script from 'next/script';
import { Montserrat } from "next/font/google";
import "./globals.scss";
import './globalicons.scss';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contactame from "./contactame/page";
import Loader from "./components/Loader";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

/*export const metadata: Metadata = {
  title: "Claudio Salazar | Diseñador | Frontend Developer",
  description: "Portfolio de Claudio Salazar",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    handleRouteChange(); // Set loading to true on initial render

    setLoading(false); // Set loading to false after initial render

    return () => {
      setLoading(false); // Cleanup on unmount
    };
  }, [pathname, searchParams]);

  return (
    <html lang="es">
      <body className={montserrat.className}>
        {loading && <Loader />}
        <div className="contenido" style={{ display: loading ? 'none' : 'block' }}>
          <Header onLinkClick={() => setLoading(true)} />
          <div className="container-fluid">
            {children}
            <Footer />
            <Contactame />
          </div>
        </div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}