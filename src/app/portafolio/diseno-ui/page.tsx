'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

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
    <section className="portafolio row d-flex align-items-center">
      <motion.div variants={titulo} initial='hidden' animate={controlTitulo} className='titulo col-11 ol-xl-10 mx-auto text-center pt-4 d-flex flex-column flex-md-row align-items-md-center'>
        <h1 className='text-center text-md-end mb-4'>
          <Link href='/portafolio' className="titulo-seccion d-flex align-items-center justify-content-center justify-content-md-end mb-3 mb-md-0">
            <span className="ico-atras d-block"></span>
            <span className=" d-block">Portafolio</span>
          </Link>
          <span className="subtitulo-seccion">Diseño UI</span>
        </h1>
        <div className="detalle-seccion">
          <p className="parrafo-seccion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper erat eu ipsum bibendum cursus. Sed mauris arcu, tincidunt ut egestas sit amet, finibus a lacus. Morbi venenatis, tellus ac pharetra tempor, neque quam lacinia dolor, et luctus tellus dui ac urna.
          </p>
        </div>
      </motion.div>
    </section>
  );
 }

 export default Ui;