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

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const video = e.currentTarget.querySelector('.fnd-video-link') as HTMLVideoElement;
    if (video) {
      video.style.transition = 'opacity 0.3s ease-in-out';
      video.style.opacity = '1';
      video.play();
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const video = e.currentTarget.querySelector('.fnd-video-link') as HTMLVideoElement;
    if (video) {
      video.style.transition = 'opacity 0.3s ease-in-out';
      video.style.opacity = '0';
  
      // Espera a que la transición termine antes de reiniciar el video
      video.addEventListener('transitionend', function handleTransitionEnd() {
        if (video.style.opacity === '0') {
          video.currentTime = 0; // Reinicia el video al principio
        }
        video.removeEventListener('transitionend', handleTransitionEnd);
      });
    }
  };
  
  return (
    <>
      <section className="portafolio row d-flex align-items-center">

        <motion.div variants={titulo} initial='hidden' animate={controlTitulo} className='titulo col-11 ol-xl-9 mx-auto text-center pt-4 d-flex flex-column flex-md-row align-items-md-center'>
          <h1 className='text-center mb-4'>Portafolio</h1>
          <div className="detalle-seccion">
            <p className="parrafo-seccion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper erat eu ipsum bibendum cursus. Sed mauris arcu, tincidunt ut egestas sit amet, finibus a lacus. Morbi venenatis, tellus ac pharetra tempor, neque quam lacinia dolor, et luctus tellus dui ac urna.
            </p>
          </div>
        </motion.div>

        <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio contenido-portafolio col-12 col-md-11 mx-auto mt-5'>
          <div className='row'>
            <div className='col-11 col-lg-6 tipo-proyecto dev mx-auto p-0' >
              <Link className='link-portada-portafolio' href='/portafolio/desarrollo' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='info-link'>
                  <div className='texto-link-porfafolio'>
                    <span>Desarrollo</span>
                    <span className='ico-tipo-proyecto ico-dev'></span>
                  </div>
                </div>
                <video className='fnd-video-link fnd-dev' src='/video/link-dev.mp4' muted loop></video>
              </Link>
            </div>

            <div className='col-11 col-lg-6 mx-auto'>
              <div className='row'>
                <div className='col-6 tipo-proyecto ui p-0' >
                  <Link className='link-portada-portafolio' href='/portafolio/diseno-ui' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='info-link ui'>
                      <span>
                        <span>Diseño UI</span>
                        <span className='ico-tipo-proyecto ico-ui'></span>
                      </span>
                    </div>
                    <video className='fnd-video-link' src='/video/link-dev.mp4' muted loop></video>
                  </Link>
                </div>

                <div className='diseno col-6 tipo-proyecto p-0' >
                  <Link className='link-portada-portafolio' href='/portafolio/diseno-grafico' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='info-link'>
                      <span>Diseño Gráfico</span>
                      <span className='ico-tipo-proyecto ico-diseno'></span>
                    </div>
                    <video className='fnd-video-link' src='/video/link-dev.mp4' muted loop></video>
                  </Link>
                </div>

                <div className='ilustracion col-6 tipo-proyecto p-0' >
                  <Link className='link-portada-portafolio' href='/portafolio/ilustraciones' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='info-link'>
                      <span>Ilustraciones</span>
                      <span className='ico-tipo-proyecto ico-ilustracion'></span>
                    </div>
                    <video className='fnd-video-link' src='/video/link-ilustracion.mp4' muted loop></video>
                  </Link>
                </div>

                <div className='foto col-6 tipo-proyecto p-0' >
                  <Link className='link-portada-portafolio' href='/portafolio/fotografia' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='info-link'>
                      <span>Fotografía</span>
                      <span className='ico-tipo-proyecto ico-foto'></span>
                    </div>
                    <video className='fnd-video-link' src='/video/link-dev.mp4' muted loop></video>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </>
  );
}

export default Portafolio;