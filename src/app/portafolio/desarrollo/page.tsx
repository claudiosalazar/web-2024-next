'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from 'next/image';

// Imagenes
import miBanco1 from '../../assets/portafolio/desarrollo/mi-banco-1.jpg';
import miBanco2 from '../../assets/portafolio/desarrollo/mi-banco-2.jpg';
import miBanco3 from '../../assets/portafolio/desarrollo/mi-banco-3.jpg';

// Iconos
import icoAngular from '../../assets/iconos/ico-angular.png';
import icoMysql from '../../assets/iconos/ico-mysql.png';
import icoHtml from '../../assets/iconos/ico-html.png';
import icoSass from '../../assets/iconos/ico-sass.png';
import icoBootstrap from '../../assets/iconos/ico-bootstrap.png';
import icoNode from '../../assets/iconos/ico-nodejs.png';
import icoFigma from '../../assets/iconos/ico-figma.png';
import icoPhotoshop from '../../assets/iconos/ico-photoshop.png';
import icoIllustrator from '../../assets/iconos/ico-illustrator.png';
import Link from "next/link";

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
    <section className="portafolio row d-flex align-items-center">
      <motion.div variants={titulo} initial='hidden' animate={controlTitulo} className='titulo col-11 ol-xl-10 mx-auto text-center pt-4 d-flex flex-column flex-md-row align-items-md-center'>
        <h1 className='text-center text-md-end mb-4'>
          <span className="titulo-seccion">Portafolio</span>
          <span className="subtitulo-seccion">Desarrollo</span>
        </h1>
        <p className="parrafo-seccion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper erat eu ipsum bibendum cursus. Sed mauris arcu, tincidunt ut egestas sit amet, finibus a lacus. Morbi venenatis, tellus ac pharetra tempor, neque quam lacinia dolor, et luctus tellus dui ac urna.
        </p>
      </motion.div>

      <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio col-11 mx-auto mt-5'>
        <div className="row">
          <div className="col-12 detalle-proyecto">
            <div className="row">
              <div className="col-12 col-md-4">
                <Image src={miBanco1} alt="Mi Banco" className="img-fluid" />
              </div>
              <div className="col-12 col-md-8">
                <h2>Mi Banco</h2>
                <p>
                  Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                </p>
                <p>
                  <span>Usuario: <strong>12.840.432-5</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>
                  <span>Usuario: <strong>9.328.275-2</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>Tecnologías y software utilizados:</p>
                <ul className="tecnologias">
                  <li>
                    <Image src={icoAngular} alt="Angular" />
                  </li>
                  <li>
                    <Image src={icoNode} alt="Nodejs" />
                  </li>
                  <li>
                    <Image src={icoMysql} alt="MySQL" />
                  </li>
                  <li>
                    <Image src={icoHtml} alt="HTML" />
                  </li>
                  <li>
                    <Image src={icoSass} alt="Sass" />
                  </li>
                  <li>
                    <Image src={icoBootstrap} alt="Bootstrap 5" />
                  </li>
                  <li>
                    <Image src={icoFigma} alt="Figma" />
                  </li>
                  <li>
                    <Image src={icoPhotoshop} alt="Photoshop" />
                  </li>
                  <li>
                    <Image src={icoIllustrator} alt="Illustrator" />
                  </li>
                </ul>
                <hr/>
                <Link href="https://mi-banco.claudiosalazar.cl" target='new' className="link-portafolio-proyectos">
                  <span className='ico-mas-proyecto'></span>
                  <span className='texto-link-portafolio'>Ver proyecto</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 detalle-proyecto">
            <div className="row">
              <div className="col-12 col-md-4">
                <Image src={miBanco2} alt="Mi Banco" className="img-fluid" />
              </div>
              <div className="col-12 col-md-8">
                <h2>Mi Banco</h2>
                <p>
                  Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                </p>
                <p>
                  <span>Usuario: <strong>12.840.432-5</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>
                  <span>Usuario: <strong>9.328.275-2</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>Tecnologías y software utilizados:</p>
                <ul className="tecnologias">
                  <li>
                    <Image src={icoAngular} alt="Angular" />
                  </li>
                  <li>
                    <Image src={icoNode} alt="Nodejs" />
                  </li>
                  <li>
                    <Image src={icoMysql} alt="MySQL" />
                  </li>
                  <li>
                    <Image src={icoHtml} alt="HTML" />
                  </li>
                  <li>
                    <Image src={icoSass} alt="Sass" />
                  </li>
                  <li>
                    <Image src={icoBootstrap} alt="Bootstrap 5" />
                  </li>
                  <li>
                    <Image src={icoFigma} alt="Figma" />
                  </li>
                  <li>
                    <Image src={icoPhotoshop} alt="Photoshop" />
                  </li>
                  <li>
                    <Image src={icoIllustrator} alt="Illustrator" />
                  </li>
                </ul>
                <hr/>
                <Link href="https://mi-banco.claudiosalazar.cl" target='new' className="link-portafolio-proyectos">
                  <span className='ico-mas-proyecto'></span>
                  <span className='texto-link-portafolio'>Ver proyecto</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 detalle-proyecto">
            <div className="row">
              <div className="col-12 col-md-4">
                <Image src={miBanco3} alt="Mi Banco" className="img-fluid" />
              </div>
              <div className="col-12 col-md-8">
                <h2>Mi Banco</h2>
                <p>
                  Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                </p>
                <p>
                  <span>Usuario: <strong>12.840.432-5</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>
                  <span>Usuario: <strong>9.328.275-2</strong></span>
                  <br/>
                  <span>Clave: <strong>Usuario-123</strong></span>
                </p>
                <p>Tecnologías y software utilizados:</p>
                <ul className="tecnologias">
                  <li>
                    <Image src={icoAngular} alt="Angular" />
                  </li>
                  <li>
                    <Image src={icoNode} alt="Nodejs" />
                  </li>
                  <li>
                    <Image src={icoMysql} alt="MySQL" />
                  </li>
                  <li>
                    <Image src={icoHtml} alt="HTML" />
                  </li>
                  <li>
                    <Image src={icoSass} alt="Sass" />
                  </li>
                  <li>
                    <Image src={icoBootstrap} alt="Bootstrap 5" />
                  </li>
                  <li>
                    <Image src={icoFigma} alt="Figma" />
                  </li>
                  <li>
                    <Image src={icoPhotoshop} alt="Photoshop" />
                  </li>
                  <li>
                    <Image src={icoIllustrator} alt="Illustrator" />
                  </li>
                </ul>
                <hr/>
                <Link href="https://mi-banco.claudiosalazar.cl" target='new' className="link-portafolio-proyectos">
                  <span className='ico-mas-proyecto'></span>
                  <span className='texto-link-portafolio'>Ver proyecto</span>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
      
    </section>
  );
 }

 export default Desarrollo;