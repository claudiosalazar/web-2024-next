'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

// Fotos
import foto1 from '../../assets/portafolio/foto/constanera.jpg';
import foto2 from '../../assets/portafolio/foto/constanera.jpg';
import foto3 from '../../assets/portafolio/foto/carretera.jpg';
import foto4 from '../../assets/portafolio/foto/macbook.jpg';
import foto5 from '../../assets/portafolio/foto/reflejo.jpg';
import foto6 from '../../assets/portafolio/foto/foco.jpg';
import foto7 from '../../assets/portafolio/foto/moto.jpg';
import foto8 from '../../assets/portafolio/foto/pelota.jpg';

function Fotografia () {
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
          <span className="subtitulo-seccion">Fotografía</span>
        </h1>
        <p className="parrafo-seccion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper erat eu ipsum bibendum cursus. Sed mauris arcu, tincidunt ut egestas sit amet, finibus a lacus. Morbi venenatis, tellus ac pharetra tempor, neque quam lacinia dolor, et luctus tellus dui ac urna.
        </p>
      </motion.div>

      <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio col-11 mx-auto mt-5'>
        <ul className="row">
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto1} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto2} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto3} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto4} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto5} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto6} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto7} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={foto8} alt="Foto 1" />
          </li>
        </ul>
      </motion.div>
    </section>
  );
 }

 export default Fotografia;