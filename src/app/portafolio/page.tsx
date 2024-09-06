'use client';

import React, { useState, useCallback } from 'react';
import Link from "next/link";
import Image from 'next/image';
import miBanco1 from '../assets/portafolio/mi-banco-1.jpg';
import miBanco2 from '../assets/portafolio/mi-banco-2.jpg';
import miBanco3 from '../assets/portafolio/mi-banco-3.jpg';
import miBanco4 from '../assets/portafolio/mi-banco-4.jpg';

import icoAngular from '../assets/iconos/ico-angular.png';
import icoMysql from '../assets/iconos/ico-mysql.png';
import icoHtml from '../assets/iconos/ico-html.png';
import icoSass from '../assets/iconos/ico-sass.png';
import icoBootstrap from '../assets/iconos/ico-bootstrap.png';
import icoNode from '../assets/iconos/ico-nodejs.png';
import icoFigma from '../assets/iconos/ico-figma.png';
import icoPhotoshop from '../assets/iconos/ico-photoshop.png';
import icoIllustrator from '../assets/iconos/ico-illustrator.png';

function Portafolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="info-portafolio portafolio row d-flex align-items-center">
      <div className='row'>
        <div className='col-8 mx-auto'>
          <div className='row'>
          <div className='col-1 d-flex flex-column justify-content-center'>
            <ul className="carousel-portafolio-controls">
              {['•', '•', '•', '•'].map((index, i) => (
                <li key={index}>
                  <a href="#" className={`d-block ${activeIndex === i ? 'active' : ''}`} onClick={() => handleSelect(i)}>{index}</a>
                </li>
              ))}
            </ul>
          </div>
            <div className="col-11 mx-auto">
              <div className="carousel-portafolio-viewport">
                <ul className="carousel-portafolio-list" style={{ transform: `translateY(-${activeIndex * 500}px)` }}>
                  <li key={0} className="carousel-portafolio-item">
                    <div className='row'>
                      <div className='col-4'>
                        <h2>Mi Banco</h2>
                        <p>
                          Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                        </p>
                        <p>
                          <span>Usuario: <strong>12.840.432-5</strong></span>
                          <br />
                          <span>Clave: <strong>Usuario-123</strong></span>
                        </p>
                        <p>
                          <span>Usuario: <strong>9.328.275-2</strong></span>
                          <br />
                          <span>Clave: <strong>Usuario-123</strong></span>
                        </p>
                        <p className='mb-2'><span>Tecnologías y software utilizados:</span></p>
                        <ul className='tecnologias d-flex'>
                          <li>
                            <Image src={icoAngular} alt="Angular" title="Angular" />
                          </li>
                          <li>
                            <Image src={icoNode} alt="Node.js" title="Node.js" />
                          </li>
                          <li>
                            <Image src={icoMysql} alt="MySql" title="MySql" />
                          </li>
                          <li>
                            <Image src={icoHtml} alt="HTML 5" title="HTML 5" />
                          </li>
                          <li>
                            <Image src={icoBootstrap} alt="Bootstrap 5" title="Bootstrap 5" />
                          </li>
                          <li>
                            <Image src={icoSass} alt="Sass" title="Sass" />
                          </li>
                          <li>
                            <Image src={icoFigma} alt="Figma" title="Figma" />
                          </li>
                          <li>
                            <Image src={icoPhotoshop} alt="Photoshop" title="Photoshop" />
                          </li>
                          <li>
                            <Image src={icoIllustrator} alt="Illustrator" title="Illustrator" />
                          </li>
                        </ul>
                        <hr />
                        <p>
                          <Link href="https://mi-banco.claudiosalazar.cl" target='new' className="link-portafolio-proyectos">
                            <span className='ico-mas-proyecto'></span>
                            <span className='texto-link-portafolio'>Ver proyecto</span>
                          </Link>
                        </p>
                      </div>
                      <div className='col-8 muestra-proyecto'>
                        <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="Mi Banco" title="Mi Banco" />
                      </div>
                    </div>
                  </li>
                  <li key={1} className="carousel-portafolio-item">
                    <div className='row'>
                      <div className='col-4'>
                        <h2>Mi Banco</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                        <p>
                          <Link href="/trayectoria" className="link-portafolio-proyectos">
                            <span className='ico-mas-proyecto'></span>
                            <span className='texto-link-portafolio'>Ver proyecto</span>
                          </Link>
                        </p>
                      </div>
                      <div className='col-8 muestra-proyecto'>
                        <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                      </div>
                    </div>
                  </li>
                  <li key={2} className="carousel-portafolio-item">
                    <div className='row'>
                      <div className='col-4'>
                        <h2>Mi Banco</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                        <p>
                          <Link href="/trayectoria" className="link-portafolio-proyectos">
                            <span className='ico-mas-proyecto'></span>
                            <span className='texto-link-portafolio'>Ver proyecto</span>
                          </Link>
                        </p>
                      </div>
                      <div className='col-8 muestra-proyecto'>
                        <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                      </div>
                    </div>
                  </li>
                  <li key={3} className="carousel-portafolio-item">
                    <div className='row'>
                      <div className='col-4'>
                        <h2>Mi Banco</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                        <p>
                          <Link href="/trayectoria" className="link-portafolio-proyectos">
                            <span className='ico-mas-proyecto'></span>
                            <span className='texto-link-portafolio'>Ver proyecto</span>
                          </Link>
                        </p>
                      </div>
                      <div className='col-8 muestra-proyecto'>
                        <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;