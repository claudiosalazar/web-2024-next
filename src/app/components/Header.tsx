'use client'

import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { animated, useSpring } from '@react-spring/web';

function Header() {
  const [menuPosicion, setPosicion] = useState<string>('top-menu');
  const [menuColor, setColor] = useState<string>('link-inicio');

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/conocimientos", label: "Conocimientos" },
    { href: "/trayectoria", label: "Trayectoria" },
  ];

  const pathname = usePathname();

  const handleClick = (name: string) => {
    let nextPosicion = '';
    let nextColor = '';

    if (name === 'Portafolio') {
      nextPosicion = 'center-menu';
      nextColor = 'link-portafolio';
    } else if (name === 'Trayectoria') {
      nextPosicion = 'bottom-menu';
      nextColor = 'link-trayectoria';
    } else if (name === 'Conocimientos') {
      nextPosicion = 'mid-bottom-menu';
      nextColor = 'link-conocimientos';
    } else if (name === 'Inicio') {
      nextPosicion = 'top-menu';
      nextColor = 'link-inicio';
    }

    setPosicion(nextPosicion);
    setColor(nextColor);
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
    from: { transform: 'translateY(0%)' },
    config: { duration: 500 },
  });

  return (
    <header>
      <nav>
        <animated.ul style={animation} className={`menu ${menuPosicion}`}>
          {links.map((link) => (
            <li className="nav-item" key={link.label}>
              <Link
                className={`nav-link ${pathname === link.href ? "active" : ""} ${menuColor}`}
                href={link.href}
                onClick={() => handleClick(link.label)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </animated.ul>
      </nav>
    </header>
  );
}

export default Header;