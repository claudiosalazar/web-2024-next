'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { easeIn, motion, useAnimation } from 'framer-motion';
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
import icoStudioPain from '../assets/iconos/ico-clip-studio-paint.png';

// Diseño
import loveRockBeer from '../assets/portafolio/disenho/love-rock-beer.jpg';

// Ilustraciones
import manchester from '../assets/portafolio/ilustraciones/manchester-logo.jpg';
import aguilaAudax from '../assets/portafolio/ilustraciones/aguila-audax.jpg';
import skeletor from '../assets/portafolio/ilustraciones/skeletor.jpg';
import wonderWoman from '../assets/portafolio/ilustraciones/wonder-woman.jpg';
import darkMaul from '../assets/portafolio/ilustraciones/darth-maul.jpg';
import scar from '../assets/portafolio/ilustraciones/scar.jpg';
import witchKing from '../assets/portafolio/ilustraciones/witch-king.jpg';
import skullBatman from '../assets/portafolio/ilustraciones/skull-batman.jpg';

// Fotos
import foto1 from '../assets/portafolio/foto/adidas.jpg';
import foto2 from '../assets/portafolio/foto/constanera.jpg';
import foto3 from '../assets/portafolio/foto/carretera.jpg';
import foto4 from '../assets/portafolio/foto/macbook.jpg';
import foto5 from '../assets/portafolio/foto/reflejo.jpg';
import foto6 from '../assets/portafolio/foto/foco.jpg';
import foto7 from '../assets/portafolio/foto/moto.jpg';
import foto8 from '../assets/portafolio/foto/pelota.jpg';

function Portafolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0); // Estado para controlar la sección activa
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const controlDetalle = useAnimation();
  const controlItems = useAnimation();

  const titulo = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeIn,
        duration: 0.1
      }
    },
  };

  const handleImageClick = useCallback((imageSrc: string) => {
    setActiveImage(imageSrc);
  }, []);

  const handleClick = useCallback((index: number) => {
    setActiveSection(index);
  }, []);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);


  return (
    <>
      <section className="info-portafolio portafolio row d-flex align-items-center pt-5">
        <div className='col-12 col-md-12 col-xl-10 mx-auto text-center pt-4 '>
          <h1 className='text-center mb-4 pt-5'>Portafolio</h1>
          <ul className='tipo-proyecto'>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleClick(0); }} className={`link-portafolio ${activeSection === 0 ? 'active' : ''}`}>
                Proyectos personales
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleClick(1); }} className={`link-portafolio ${activeSection === 1 ? 'active' : ''}`}>
                Proyectos profesionales
              </a>
            </li>
          </ul>
        </div>
        {activeSection === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={
              { 
                opacity: 1,
                transition: {
                  duration: .8,
                }
              }
            }
            exit={{ opacity: 0 }}
            className='col-12 col-md-12 col-xl-10 mx-auto pb-5 personal'>
            <div className='row'>
              <div className='col-md-1 d-flex flex-column justify-content-center pe-md-0'>
                <ul className="carousel-portafolio-controls">
                  {['•', '•', '•', '•', '•'].map((dot, i) => (
                    <li key={`dot-${i}`}>
                      <a href="#" className={`d-block ${activeIndex === i ? 'active' : ''}`} onClick={() => handleSelect(i)}>{dot}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-11 mx-auto col-md-11">
                <div className="carousel-portafolio-viewport">
                  <ul className="carousel-portafolio-list" style={{ transform: `translateY(-${activeIndex * 500}px)` }}>
                    <li key={0} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 pe-md-0 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Mi Banco</h2>
                          <p className='mb-3 mb-xl-4'>
                            Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                          </p>
                          <p className='mb-3 mb-xl-4'>
                            <span>Usuario: <strong>12.840.432-5</strong></span>
                            <br />
                            <span>Clave: <strong>Usuario-123</strong></span>
                          </p>
                          <p className='mb-3 mb-xl-4'>
                            <span>Usuario: <strong>9.328.275-2</strong></span>
                            <br />
                            <span>Clave: <strong>Usuario-123</strong></span>
                          </p>
                          <p className='mb-2'><span>Tecnologías y software utilizados:</span></p>
                          <ul className='tecnologias'>
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
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="Mi Banco" title="Mi Banco" />
                        </div>
                      </div>
                    </li>
                    <li key={1} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Blog fotografo</h2>
                          <p className='mb-3 mb-xl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                          <p className='mb-3 mb-xl-4'>
                            <Link href="/trayectoria" className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver proyecto</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                        </div>
                      </div>
                    </li>
                    <li key={2} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Diseño Gráfico</h2>
                          <p className='mb-3 mb-xl-4'>
                            Ilustraciones de personajes de películas y animaciones de mis gustos personales.
                          </p>
                          <p className='mb-2'><span>Software utilizados:</span></p>
                          <ul className='tecnologias'>
                            <li>
                              <Image src={icoPhotoshop} alt="Photoshop" title="Photoshop" />
                            </li>
                            <li>
                              <Image src={icoIllustrator} alt="Illustrator" title="Illustrator" />
                            </li>
                          </ul>
                          <hr />
                          <p>
                            <Link href="https://www.artstation.com/claudiosvcl" target='new' className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver más</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <ul className='galeria-item-portafolio'>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(manchester.src); }}>
                                <Image src={manchester} className="ico-conocimientos img-fluid" alt="logo manchester united" title="Logo Manchester United" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(aguilaAudax.src); }}>
                                <Image src={aguilaAudax} className="ico-conocimientos img-fluid" alt="logo audax italiano" title="Ilustracion logo Audax Italiano" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(skeletor.src); }}>
                                <Image src={skeletor} className="ico-conocimientos img-fluid" alt="skeletor" title="Skeletor" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(wonderWoman.src); }}>
                                <Image src={wonderWoman} className="ico-conocimientos img-fluid" alt="retrato wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(darkMaul.src); }}>
                                <Image src={darkMaul} className="ico-conocimientos img-fluid" alt="retrato dark maul" title="Retrato Dark Maul Star Wars" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(scar.src); }}>
                                <Image src={scar} className="ico-conocimientos img-fluid" alt="postrait wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(witchKing.src); }}>
                                <Image src={witchKing} className="ico-conocimientos img-fluid" alt="logo manchester united" title="Logo Manchester United" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(loveRockBeer.src); }}>
                                <Image src={loveRockBeer} className="ico-conocimientos img-fluid" alt="postrait wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li key={3} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Ilustraciones</h2>
                          <p className='mb-3 mb-xl-4'>
                            Ilustraciones de personajes de películas y animaciones de mis gustos personales.
                          </p>
                          <p className='mb-2'><span>Software utilizados:</span></p>
                          <ul className='tecnologias'>
                            <li>
                              <Image src={icoStudioPain} alt="clip studio paint" title="Club Studio Paint" />
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
                            <Link href="https://www.artstation.com/claudiosvcl" target='new' className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver más</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <ul className='galeria-item-portafolio'>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(manchester.src); }}>
                                <Image src={manchester} className="ico-conocimientos img-fluid" alt="logo manchester united" title="Logo Manchester United" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(aguilaAudax.src); }}>
                                <Image src={aguilaAudax} className="ico-conocimientos img-fluid" alt="logo audax italiano" title="Ilustracion logo Audax Italiano" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(skeletor.src); }}>
                                <Image src={skeletor} className="ico-conocimientos img-fluid" alt="skeletor" title="Skeletor" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(wonderWoman.src); }}>
                                <Image src={wonderWoman} className="ico-conocimientos img-fluid" alt="retrato wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(darkMaul.src); }}>
                                <Image src={darkMaul} className="ico-conocimientos img-fluid" alt="retrato dark maul" title="Retrato Dark Maul Star Wars" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(scar.src); }}>
                                <Image src={scar} className="ico-conocimientos img-fluid" alt="postrait wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(witchKing.src); }}>
                                <Image src={witchKing} className="ico-conocimientos img-fluid" alt="logo manchester united" title="Logo Manchester United" />
                              </a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(skullBatman.src); }}>
                                <Image src={skullBatman} className="ico-conocimientos img-fluid" alt="postrait wonde woman" title="Retrato Wonde Woman" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li key={4} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2 className='mb-0'>Fotografía</h2>
                          <hr />
                          <p>
                            <Link href="https://www.instagram.com/claudiosvcl/l" target='new' className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver más</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <ul className='galeria-item-portafolio'>
                            <li>
                              <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto1.src); }}>
                                <Image src={foto1} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto2.src); }}>
                                <Image src={foto2} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto3.src); }}>
                                <Image src={foto3} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto4.src); }}>
                                <Image src={foto4} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto5.src); }}>
                                <Image src={foto5} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto6.src); }}>
                                <Image src={foto6} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto7.src); }}>
                                <Image src={foto7} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                            <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(foto8.src); }}>
                                <Image src={foto8} className="ico-conocimientos img-fluid" alt="fotografía" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activeSection === 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={
              { 
                opacity: 1,
                transition: {
                  duration: .8,
                }
              }
            }
            exit={{ opacity: 0 }}
            className='col-12 col-md-12 col-xl-10 mx-auto pb-5 profesional'>
            <div className='row'>
              <div className='col-md-1 d-flex flex-column justify-content-center pe-md-0'>
                <ul className="carousel-portafolio-controls">
                  {['•', '•', '•', '•'].map((dot, i) => (
                    <li key={`dot-${i}`}>
                      <a href="#" className={`d-block ${activeIndex === i ? 'active' : ''}`} onClick={() => handleSelect(i)}>{dot}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-11 mx-auto col-md-11">
                <div className="carousel-portafolio-viewport">
                  <ul className='carousel-portafolio-list' style={{ transform: `translateY(-${activeIndex * 500}px)` }}>
                    <li key={0} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 pe-md-0 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Proyecto 1</h2>
                          <p className='mb-3 mb-xl-4'>
                            Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                          </p>
                          <p className='mb-3 mb-xl-4'>
                            <span>Usuario: <strong>12.840.432-5</strong></span>
                            <br />
                            <span>Clave: <strong>Usuario-123</strong></span>
                          </p>
                          <p className='mb-3 mb-xl-4'>
                            <span>Usuario: <strong>9.328.275-2</strong></span>
                            <br />
                            <span>Clave: <strong>Usuario-123</strong></span>
                          </p>
                          <p className='mb-2'><span>Tecnologías y software utilizados:</span></p>
                          <ul className='tecnologias'>
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
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="Mi Banco" title="Mi Banco" />
                        </div>
                      </div>
                    </li>
                    <li key={1} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Proyecto 2</h2>
                          <p className='mb-3 mb-xl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                          <p className='mb-3 mb-xl-4'>
                            <Link href="/trayectoria" className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver proyecto</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                        </div>
                      </div>
                    </li>
                    <li key={2} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Proyecto 3</h2>
                          <p className='mb-3 mb-xl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                          <p className='mb-3 mb-xl-4'>
                            <Link href="/trayectoria" className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver proyecto</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                        </div>
                      </div>
                    </li>
                    <li key={3} className="carousel-portafolio-item">
                      <div className='row info-mobile'>
                        <div className='col-12 col-md-4 ps-md-5 d-md-flex align-items-md-start flex-md-column'>
                          <h2>Proyecto 4</h2>
                          <p className='mb-3 mb-xl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tellus libero. Nam pretium lobortis quam, eget lobortis erat sagittis non.</p>
                          <p className='mb-3 mb-xl-4'>
                            <Link href="/trayectoria" className="link-portafolio-proyectos">
                              <span className='ico-mas-proyecto'></span>
                              <span className='texto-link-portafolio'>Ver proyecto</span>
                            </Link>
                          </p>
                        </div>
                        <div className='col-12 col-md-8 muestra-proyecto'>
                          <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Modales */}
      {activeImage && (
        <div className={`modal-portafolio ${activeImage ? 'activo' : ''}`} onClick={() => setActiveImage(null)}>
          <div className='item-modal'>
            <div className='cerrar-modal' onClick={() => setActiveImage(null)}>
              <div className='icono-cerrar'></div>
            </div>
            <Image 
              src={activeImage} 
              className="ico-conocimientos img-fluid" 
              alt="fotografía" 
              width={800} // Ajusta el ancho según sea necesario
              height={600} // Ajusta la altura según sea necesario
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Portafolio;