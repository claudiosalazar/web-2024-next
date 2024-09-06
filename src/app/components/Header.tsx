'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [menuColor, setColor] = useState<string>('link-inicio');
  const [fondoHeader, setFondoHeader] = useState<string>('');

  useEffect(() => {
    const savedMenuColor = localStorage.getItem('menuColor');
    if (savedMenuColor) setColor(savedMenuColor);
  }, []);

  const updateMenuState = (path: string) => {
    let nextColor = '';

    if (path === '/') {
      nextColor = 'link-inicio';
    } else if (path === '/portafolio') {
      nextColor = 'link-portafolio';
    } else if (path === '/conocimientos') {
      nextColor = 'link-conocimientos';
    } else if (path === '/trayectoria') {
      nextColor = 'link-trayectoria';
    }

    setColor(nextColor);
    if (typeof window !== 'undefined') {
      localStorage.setItem('menuColor', nextColor);
    }
  };

  useEffect(() => {
    updateMenuState(pathname);

    const handleScroll = () => {
      if (window.scrollY >= 79) {
        if (pathname === '/') {
          setFondoHeader('fondo-inicio');
        } else if (pathname === '/trayectoria') {
          setFondoHeader('fondo-trayectoria');
        } else if (pathname === '/conocimientos') {
          setFondoHeader('fondo-conocimientos');
        } else if (pathname === '/portafolio') {
          setFondoHeader('fondo-portafolio');
        }
      } else {
        setFondoHeader('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header className={`${fondoHeader} ${menuColor}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-none" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className='separador-lista'></li>
              <li className='boton'>
                <Link href="/" className={`nav-link ${pathname === '/' ? "active" : ""} ${menuColor}`}>
                  Bienvenida
                </Link>
              </li>
              <li className='separador-menu'>
                <div className='separador-menu'></div>
              </li>
              <li className='boton'>
                <Link href="/trayectoria" className={`nav-link ${pathname === '/trayectoria' ? "active" : ""} ${menuColor}`}>
                  Trayectoria
                </Link>
              </li>
              <li className='separador-menu'>
                <div className='separador-menu'></div>
              </li>
              <li className="nav-item logo">
                <Link href="/" className={`nav-link logo-link ${pathname === '/' ? "active" : ""} ${menuColor}`}>
                  <div className='logo-header'></div>
                </Link>
              </li>
              <li className='separador-menu'>
                <div className='separador-menu'></div>
              </li>
              <li className='boton'>
                <Link href="/conocimientos" className={`nav-link ${pathname === '/conocimientos' ? "active" : ""} ${menuColor}`}>
                  Conocimientos
                </Link>
              </li>
              <li className='separador-menu'>
                <div className='separador-menu'></div>
              </li>
              <li className='boton'>
                <Link href="/portafolio" className={`nav-link ${pathname === '/portafolio' ? "active" : ""} ${menuColor}`}>
                  Portafolio
                </Link>
              </li>
              <li className='separador-lista'></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;