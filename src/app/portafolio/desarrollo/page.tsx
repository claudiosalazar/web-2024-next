'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

// Imagenes
import miBanco1 from '../../assets/portafolio/desarrollo/mi-banco-1.jpg';
import itau from '../../assets/portafolio/desarrollo/itau.jpg';
import bci from '../../assets/portafolio/desarrollo/bci.jpg';
import cym from '../../assets/portafolio/desarrollo/cym.jpg';

// Iconos
import icoAngular from '../../assets/iconos/ico-angular.png';
import icoMysql from '../../assets/iconos/ico-mysql.png';
import icoHtml from '../../assets/iconos/ico-html.png';
import icoSass from '../../assets/iconos/ico-sass.png';
import icoCss from '../../assets/iconos/ico-css.png';
import icoBootstrap from '../../assets/iconos/ico-bootstrap.png';
import icoNode from '../../assets/iconos/ico-nodejs.png';
import icoNpm from '../../assets/iconos/ico-npm.png';
import icoSketch from '../../assets/iconos/ico-sketch.png';
import icoFigma from '../../assets/iconos/ico-figma.png';
import icoPhotoshop from '../../assets/iconos/ico-photoshop.png';
import icoIllustrator from '../../assets/iconos/ico-illustrator.png';
import icoScrum from '../../assets/iconos/ico-scrum.png';
import icoKanban from '../../assets/iconos/ico-kanban.png';
import icoGit from '../../assets/iconos/ico-git.png';
import icoGitHub from '../../assets/iconos/ico-github.png';
import icoJira from '../../assets/iconos/ico-jira.png';
import icoBitbucket from '../../assets/iconos/ico-bitbucket.png';

 function Desarrollo () {
  const controlTitulo = useAnimation();
  const controlContenido = useAnimation();

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
        duration: 0.05
      }
    },
  };

  const contenidoPortafolio = {
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

  useEffect(() => {
    const sequence = async () => {
      await controlTitulo.start({ opacity: 1, y: 0 });
      await controlContenido.start(i => ({
        opacity: 1,
        y: 0,
        transition: { 
          ease: 'easeInOut',
        }
      }));
    };

    sequence();
  }, [controlTitulo, controlContenido]);
  
  return (
    <>
      <section className="portafolio row d-flex align-items-center pb-md-5">
        <motion.div variants={titulo} initial='hidden' animate={controlTitulo} className='titulo col-11 ol-xl-10 mx-auto text-center pt-4 d-flex flex-column flex-md-row align-items-md-center'>
          <h1 className='text-center text-md-end mb-4'>
            <Link href='/portafolio' className="titulo-seccion d-flex align-items-center justify-content-center justify-content-md-end mb-3 mb-md-0">
              <span className="ico-atras d-block"></span>
              <span className=" d-block">Portafolio</span>
            </Link>
            <span className="subtitulo-seccion">Desarrollo</span>
          </h1>
          <div className="detalle-seccion">
            <p className="parrafo-seccion">
              Proyectos más recientes y relevantes en frontend bancario reflejan mi dominio en HTML, CSS y JavaScript, aplicando adaptabilidad y precisión, esenciales en finanzas. He trabajado con equipos multidisciplinarios bajo metodologías ágiles, logrando eficiencia y un trabajo altamente colaborativo.
            </p>
          </div>
        </motion.div>
      </section>
      
      <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio container-fluid proyectos-con-descripcion'>
        <div className="row">
          <div className="col-12">
            <div className="row">

              <div className="col-12 p-4 p-md-5 detalle-proyecto">
                <div className="row d-lg-flex justify-content-xxl-center">
                  <div className="col-12 col-md-6 col-xxl-4">
                    <Image src={miBanco1} alt="Mi Banco" title="Mi Banco" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-6 ps-md-0 ps-xxl-4 ms-md-0 ms-xxl-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0 ms-0 ms-md-4 ms-xxl-0">Mi Banco</h2>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                    </p>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      <span>Usuario: <strong>12.840.432-5</strong></span>
                      <br/>
                      <span>Clave: <strong>Usuario-123</strong></span>
                    </p>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      <span>Usuario: <strong>9.328.275-2</strong></span>
                      <br/>
                      <span>Clave: <strong>Usuario-123</strong></span>
                    </p>
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Tecnologías y software utilizados:</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoAngular} alt="Angular" title="Angular" /> 
                      </li>
                      <li>
                        <Image src={icoNode} alt="Nodejs" title="Nodejs" />
                      </li>
                      <li>
                        <Image src={icoNpm} alt="NPM" title="NPM" /> 
                      </li>
                      <li>
                        <Image src={icoMysql} alt="MySQL" title="MySQL" /> 
                      </li>
                      <li>
                        <Image src={icoHtml} alt="HTML 5" title="HTML 5" /> 
                      </li>
                      <li>
                        <Image src={icoSass} alt="Sass" title="Sass" /> 
                      </li>
                      <li>
                        <Image src={icoBootstrap} alt="Bootstrap 5" title="Bootstrap 5" />
                      </li>
                      <li>
                        <Image src={icoGit} alt="Git" title="Git" />
                      </li>
                      <li>
                        <Image src={icoGitHub} alt="GitHub" title="GitHub" />
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
                    <hr className="ms-0 ms-md-4 ms-xxl-0"/>
                    <Link href="https://mi-banco.claudiosalazar.cl" target='new' className="link-portafolio-proyectos ms-0 ms-md-4 ms-xxl-0">
                      <span className='ico-mas-proyecto'></span>
                      <span className='texto-link-portafolio'>Ver proyecto</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-12 p-4 p-md-5 detalle-proyecto">
                <div className="row d-lg-flex justify-content-xxl-center">
                  <div className="col-12 col-md-6 col-xxl-4">
                    <Image src={itau} alt="Itau" title="Itau Sitio Publico" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-6 ps-md-0 ps-xxl-4 ms-md-0 ms-xxl-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0 ms-0 ms-md-4 ms-xxl-0">ITAU - Sitio publico</h2>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      Desarrollo de componentes y actualización de secciones para sitio publico de <strong>Itau Chile</strong>. Los desarrollos se hicieron trabajando con equipo UX para desarrollar el diseño y luego entregar desarrollo HTML a equipo de DEV para su implementacion en CMS de IBM.
                    </p>
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Tecnologías y software utilizados</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoHtml} alt="HTML 5" title="HTML 5" /> 
                      </li>
                      <li>
                        <Image src={icoCss} alt="CSS 3" title="CSS 3" />
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
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Metodologías</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoScrum} alt="Scrum" title="Scrum" /> 
                      </li>
                    </ul>
                    <hr className="ms-0 ms-md-4 ms-xxl-0"/>
                    <Link href="https://www.itau.cl" target='new' className="link-portafolio-proyectos ms-0 ms-md-4 ms-xxl-0">
                      <span className='ico-mas-proyecto'></span>
                      <span className='texto-link-portafolio'>Ver proyecto</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 p-4 p-md-5 detalle-proyecto">
                <div className="row d-lg-flex justify-content-xxl-center">
                  <div className="col-12 col-md-6 col-xxl-4">
                    <Image src={bci} alt="BCI" className="img-fluid" title="Plataforma comercial 360 | Connect - BCI" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-6 ps-md-0 ps-xxl-4 ms-md-0 ms-xxl-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0 ms-0 ms-md-4 ms-xxl-0">BCI - 360 | Connect</h2>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      Desarrollo de modulos y componentes <strong>360 | Connect</strong>, que es la plataforma comercial para uso de ejecutivos del banco <strong>BCI</strong>. Los desarrollos se hicieron trabajando con equipo UX para desarrollar el diseño y luego entregar modulo a equipo DEV Frontend utilizando Bitbucket.
                    </p>
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Tecnologías y software utilizados</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoAngular} alt="Angular" title="Angular" /> 
                      </li>
                      <li>
                        <Image src={icoNpm} alt="NPM" title="NPM" /> 
                      </li>
                      <li>
                        <Image src={icoHtml} alt="HTML 5" title="HTML 5" /> 
                      </li>
                      <li>
                        <Image src={icoSass} alt="Sass" title="Sass" /> 
                      </li>
                      <li>
                        <Image src={icoGit} alt="Git" title="Git" />
                      </li>
                      <li>
                        <Image src={icoBitbucket} alt="Bitbucket" title="Bitbucket" />
                      </li>
                      <li>
                        <Image src={icoJira} alt="Jira" title="Jira" />
                      </li>
                      <li>
                        <Image src={icoSketch} alt="Sketch" title="Sketch" />
                      </li>
                      <li>
                        <Image src={icoPhotoshop} alt="Photoshop" title="Photoshop" /> 
                      </li>
                      <li>
                        <Image src={icoIllustrator} alt="Illustrator" title="Illustrator" /> 
                      </li>
                    </ul>
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Metodologías</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoScrum} alt="Scrum" title="Scrum" /> 
                      </li>
                      <li>
                        <Image src={icoKanban} alt="Kanban" title="Kanban" />
                      </li>
                    </ul>
                    <hr className="ms-0 ms-md-4 ms-xxl-0"/>
                    <Link href="https://www.bci.cl/empresas/360-connect" target='new' className="link-portafolio-proyectos ms-0 ms-md-4 ms-xxl-0">
                      <span className='ico-mas-proyecto'></span>
                      <span className='texto-link-portafolio'>Ver proyecto</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 p-4 p-md-5 detalle-proyecto mb-0">
                <div className="row d-lg-flex justify-content-xxl-center">
                  <div className="col-12 col-md-6 col-xxl-4">
                    <Image src={cym} alt="C&M Consultores" title="C&M Consultores" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-6 ps-md-0 ps-xxl-4 ms-md-0 ms-xxl-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0 ms-0 ms-md-4 ms-xxl-0">C&M Consultores</h2>
                    <p className="ms-0 ms-md-4 ms-xxl-0">
                      Proyecto Freelance sitio web corporarivo/informativo para pyme de contabilidad <strong>C&M Consultores</strong>.
                    </p>
                    <h3 className="ms-0 ms-md-4 ms-xxl-0">Tecnologías y software utilizados</h3>
                    <ul className="tecnologias ms-0 ms-md-4 ms-xxl-0">
                      <li>
                        <Image src={icoAngular} alt="Angular" title="Angular" /> 
                      </li>
                      <li>
                        <Image src={icoNpm} alt="NPM" title="NPM" /> 
                      </li>
                      <li>
                        <Image src={icoHtml} alt="HTML 5" title="HTML 5" /> 
                      </li>
                      <li>
                        <Image src={icoSass} alt="Sass" title="Sass" /> 
                      </li>
                      <li>
                        <Image src={icoSketch} alt="Sketch" title="Sketch" />
                      </li>
                      <li>
                        <Image src={icoPhotoshop} alt="Photoshop" title="Photoshop" /> 
                      </li>
                      <li>
                        <Image src={icoIllustrator} alt="Illustrator" title="Illustrator" /> 
                      </li>
                    </ul>
                    <hr className="ms-0 ms-md-4 ms-xxl-0"/>
                    <Link href="https://cymconsultores.cl/" target='new' className="link-portafolio-proyectos ms-0 ms-md-4 ms-xxl-0">
                      <span className='ico-mas-proyecto'></span>
                      <span className='texto-link-portafolio'>Ver proyecto</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
 }

 export default Desarrollo;