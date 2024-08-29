'use client'

import React from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header () {

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/portafolio/", label: "Portafolio" },
    { href: "/conocimientos/", label: "Conocimientos" },
    { href: "/trayectoria/", label: "Trayectoria" },
  ];

  const pathname = usePathname();

  const normalizePath = (path: string) => {
    // Asegura que la URL no termine con una barra, excepto si es solo "/"
    const trimmedPath = path === "/" ? path : path.replace(/\/$/, "");
    // Retorna la URL en minúsculas
    return trimmedPath.toLowerCase();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Claudio Salazar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link className={`nav-link ${normalizePath(pathname) === normalizePath(link.href) ? "active" : ""}`} href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;