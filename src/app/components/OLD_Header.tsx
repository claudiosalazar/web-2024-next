'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { animated, useSpring } from '@react-spring/web';
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const [menuPosicion, setPosicion] = useState<string>('top-menu');
  const [menuColor, setColor] = useState<string>('link-inicio');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMenuPosicion = localStorage.getItem('menuPosicion');
      const savedMenuColor = localStorage.getItem('menuColor');
      if (savedMenuPosicion) setPosicion(savedMenuPosicion);
      if (savedMenuColor) setColor(savedMenuColor);
    }
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

    setPosicion(nextPosicion);
    setColor(nextColor);
    if (typeof window !== 'undefined') {
      localStorage.setItem('menuPosicion', nextPosicion);
      localStorage.setItem('menuColor', nextColor);
    }
  };

  useEffect(() => {
    updateMenuState(pathname);
  }, [pathname]);

  const initialAnimationState = () => {
    if (menuPosicion === 'top-menu') {
      return { top: '0%', bottom: '100%', transform: 'translateY(0%)' };
    } else if (menuPosicion === 'center-menu') {
      return { top: '33%', bottom: '67%', transform: 'translateY(-33%)' };
    } else if (menuPosicion === 'mid-bottom-menu') {
      return { top: '67%', bottom: '33%', transform: 'translateY(-67%)' };
    } else if (menuPosicion === 'bottom-menu') {
      return { top: '100%', bottom: '0%', transform: 'translateY(-100%)' };
    }
    return { top: '0%', bottom: '100%', transform: 'translateY(0%)' };
  };

  const animation = useSpring({
    to: async (next: (arg0: { top: string; bottom: string; transform: string; }) => any) => {
      if (menuPosicion === 'top-menu') {
        await next({ top: '0%', bottom: '100%', transform: 'translateY(0%)' });
      } else if (menuPosicion === 'center-menu') {
        await next({ top: '33%', bottom: '67%', transform: 'translateY(-33%)' });
      } else if (menuPosicion === 'mid-bottom-menu') {
        await next({ top: '67%', bottom: '33%', transform: 'translateY(-67%)' });
      } else if (menuPosicion === 'bottom-menu') {
        await next({ top: '100%', bottom: '0%', transform: 'translateY(-100%)' });
      }
    },
    from: initialAnimationState(),
    config: { duration: 500 },
  });

  return (
    <header>
      <nav>
        <animated.ul style={animation} className={`menu ${menuPosicion}`}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${pathname === '/' ? "active" : ""} ${menuColor}`}>
            <span className="indicador-boton"></span>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/portafolio" className={`nav-link ${pathname === '/portafolio' ? "active" : ""} ${menuColor}`}>
              <span className="indicador-boton"></span>
              Portafolio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/conocimientos" className={`nav-link ${pathname === '/conocimientos' ? "active" : ""} ${menuColor}`}>
              <span className="indicador-boton"></span>
              Conocimientos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/trayectoria" className={`nav-link ${pathname === '/trayectoria' ? "active" : ""} ${menuColor}`}>
              <span className="indicador-boton"></span>
              Trayectoria
            </Link>
          </li>
        </animated.ul>
      </nav>
    </header>
  );
}

export default Header;