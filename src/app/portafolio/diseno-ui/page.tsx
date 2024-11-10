'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { useEffect } from "react";

import cym from '../../assets/portafolio/ui/cym.jpg';
import mibanco from '../../assets/portafolio/ui/mi-banco.jpg';

 function Ui () {
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
      <section className="portafolio row d-flex align-items-center">
        <motion.div variants={titulo} initial='hidden' animate={controlTitulo} className='titulo col-11 ol-xl-10 mx-auto text-center pt-4 d-flex flex-column flex-md-row align-items-md-center'>
          <h1 className='text-center text-md-end mb-4'>
            <Link href='/portafolio' className="titulo-seccion d-flex align-items-center justify-content-center justify-content-md-end mb-3 mb-md-0">
              <span className="ico-atras d-block"></span>
              <span className=" d-block">Portafolio</span>
            </Link>
            <span className="subtitulo-seccion d-block">Diseño UI</span>
          </h1>
          <div className="detalle-seccion">
            <p className="parrafo-seccion">
              Proyectos UI en donde se refleja mi enfoque en crear experiencias de usuario intuitivas y atractivas. Aplicando adaptabilidad y precisión, busco lograr interfaces eficientes y funcionales que optimicen la interacción y generen un impacto visual positivo.
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
                  <div className="col-12 col-md-8 col-xxl-7 pe-md-4">
                    <Image src={mibanco} alt="Mi Banco" className="img-fluid diseno-thumbnail" />
                  </div>
                  <div className="col-12 col-12 col-md-4 col-xxl-3 ps-md-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0">Mi Banco</h2>
                    <p><strong>Flayer informativo</strong></p>
                    <p>
                      Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 p-4 p-md-5 detalle-proyecto mb-0">
                <div className="row d-lg-flex justify-content-xxl-center">
                  <div className="col-12 col-md-8 col-xxl-7 pe-md-4">
                    <Image src={cym} alt="Mi Banco" className="img-fluid diseno-thumbnail" />
                  </div>
                  <div className="col-12 col-12 col-md-4 col-xxl-3 ps-md-4 descripcion-proyecto">
                    <h2 className="mt-4 mt-md-0">C&M</h2>
                    <p><strong>Ilustración conceptual</strong></p>
                    <p>
                      Proyecto personal de sitio bancario ficticio. Creación de diseño UI y desarrollo frontend y backend (Node.js). En el se pueden realizar transferencias, pagos de productos y modificación de datos del usuario con se ingresa al sitio. Los datos para poder ingresar y visualizar el proyecto son:
                    </p>
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

 export default Ui;