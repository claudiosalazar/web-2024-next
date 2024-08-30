'use client'

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [menuColor, setColor] = useState<string>('link-inicio');

  useEffect(() => {
    const savedMenuColor = localStorage.getItem('menuColor');
      if (savedMenuColor) setColor(savedMenuColor);
  }, []);

  const updateMenuState = (path: string) => {
    let nextPosicion = '';
    let nextColor = '';

    if (path === '/') {
      nextPosicion = 'top-menu';
      nextColor = 'link-inicio';
    } else if (path === '/portafolio') {
      nextPosicion = 'center-menu';
      nextColor = 'link-portafolio';
    } else if (path === '/conocimientos') {
      nextPosicion = 'mid-bottom-menu';
      nextColor = 'link-conocimientos';
    } else if (path === '/trayectoria') {
      nextPosicion = 'bottom-menu';
      nextColor = 'link-trayectoria';
    }

    setColor(nextColor);
    if (typeof window !== 'undefined') {
      localStorage.setItem('menuColor', nextColor);
    }
  };

  useEffect(() => {
    updateMenuState(pathname);
  }, [pathname]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-none" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${pathname === '/' ? "active" : ""} ${menuColor}`}>
                  Bienvenida
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portafolio" className={`nav-link ${pathname === '/portafolio' ? "active" : ""} ${menuColor}`}>
                  Portafolio
                </Link>
              </li>
              <li className="nav-item logo">
                <Link href="/" className={`nav-link logo-link ${pathname === '/' ? "active" : ""} ${menuColor}`}>
                  <div className='logo-header'></div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/conocimientos" className={`nav-link ${pathname === '/conocimientos' ? "active" : ""} ${menuColor}`}>
                  Conocimientos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/trayectoria" className={`nav-link ${pathname === '/trayectoria' ? "active" : ""} ${menuColor}`}>
                  Trayectoria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;

