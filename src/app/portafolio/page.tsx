'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, easeIn, motion, useAnimation } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image';

// Desarrollo
import miBanco1 from '../assets/portafolio/desarrollo/mi-banco-1.jpg';
import miBanco2 from '../assets/portafolio/desarrollo/mi-banco-2.jpg';
import miBanco3 from '../assets/portafolio/desarrollo/mi-banco-3.jpg';
import miBanco4 from '../assets/portafolio/desarrollo/mi-banco-4.jpg';

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
import cym from '../assets/portafolio/disenho/cym.jpg';
import loveRockBeer from '../assets/portafolio/disenho/love-rock-beer.jpg';
import adidas from '../assets/portafolio/disenho/adidas.jpg';
import katarsis from '../assets/portafolio/disenho/katarsis.jpg';
import alacranes from '../assets/portafolio/disenho/alacranes.jpg';
import bigMark from '../assets/portafolio/disenho/bigmark.jpg';
import megasalud from '../assets/portafolio/disenho/megasalud.jpg';
import aflorar from '../assets/portafolio/disenho/aflorar.jpg';

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
import foto1 from '../assets/portafolio/foto/constanera.jpg';
import foto2 from '../assets/portafolio/foto/constanera.jpg';
import foto3 from '../assets/portafolio/foto/carretera.jpg';
import foto4 from '../assets/portafolio/foto/macbook.jpg';
import foto5 from '../assets/portafolio/foto/reflejo.jpg';
import foto6 from '../assets/portafolio/foto/foco.jpg';
import foto7 from '../assets/portafolio/foto/moto.jpg';
import foto8 from '../assets/portafolio/foto/pelota.jpg';

function Portafolio() {

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
          <h1 className='text-center mb-4'>Portafolio</h1>
          <div className="detalle-seccion">
            <p className="parrafo-seccion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper erat eu ipsum bibendum cursus. Sed mauris arcu, tincidunt ut egestas sit amet, finibus a lacus. Morbi venenatis, tellus ac pharetra tempor, neque quam lacinia dolor, et luctus tellus dui ac urna.
            </p>
          </div>
        </motion.div>

        <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio col-11 mx-auto mt-5'>
          <div className='row'>
            <Link className='col-11 col-lg-6 tipo-proyecto mx-auto' href='/portafolio/desarrollo'>
              Desarrollo
            </Link>
            <div className='col-11 col-lg-6 mx-auto'>
              <div className='row'>
                <Link className='col-6 tipo-proyecto' href='/portafolio/diseno-ui'>
                  Diseño UI
                </Link>
                <Link className='col-6 tipo-proyecto' href='/portafolio/diseno-grafico'>
                  Diseño Gráfico
                </Link>
                <Link className='col-6 tipo-proyecto' href='/portafolio/ilustraciones'>
                  Ilustraciones
                </Link>
                <Link className='col-6 tipo-proyecto' href='/portafolio/fotografia'>
                  Fotos
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </>
  );
}

export default Portafolio;