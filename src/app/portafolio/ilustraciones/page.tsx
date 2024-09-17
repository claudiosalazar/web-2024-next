'use client';

import { easeIn, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from 'next/image';

// Sofware
import icoPhotoshop from '../../assets/iconos/ico-photoshop.png';
import icoIllustrator from '../../assets/iconos/ico-illustrator.png';
import icoStudioPain from '../../assets/iconos/ico-clip-studio-paint.png';

// Ilustraciones
import manchester from '../../assets/portafolio/ilustraciones/manchester-logo.jpg';
import aguilaAudax from '../../assets/portafolio/ilustraciones/aguila-audax.jpg';
import skeletor from '../../assets/portafolio/ilustraciones/skeletor.jpg';
import wonderWoman from '../../assets/portafolio/ilustraciones/wonder-woman.jpg';
import darkMaul from '../../assets/portafolio/ilustraciones/darth-maul.jpg';
import scar from '../../assets/portafolio/ilustraciones/scar.jpg';
import witchKing from '../../assets/portafolio/ilustraciones/witch-king.jpg';
import skullBatman from '../../assets/portafolio/ilustraciones/skull-batman.jpg';

 function Ilustraciones () {
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
          <span className="subtitulo-seccion">Ilustraciones</span>
        </h1>
        <div className="detalle-seccion">
          <p className="parrafo-seccion">
            Uno de mis hobbies favoritos es dibujar desde mi infancia. Las ilustraciones en la galería esta hechas en su mayoria con los softwares:
          </p>
          <ul className="software-resumen ">
            <li>
              <Image className="img-fluid" src={icoStudioPain} alt="Studio Paing logo" />
            </li>
            <li>
              <Image className="img-fluid" src={icoPhotoshop} alt="Adobe Photoshop" />
            </li>
            <li>
              <Image className="img-fluid" src={icoIllustrator} alt="Adobe Illustrator" />
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={contenidoPortafolio} initial='hidden' animate={controlContenido} className='contenidoPortafolio col-11 mx-auto mt-5'>
        <ul className="row">
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={manchester} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={aguilaAudax} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={skeletor} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={wonderWoman} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={darkMaul} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={scar} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={witchKing} alt="Foto 1" />
          </li>
          <li className="col-6 col-md-4 p-0">
            <Image className="img-fluid" src={skullBatman} alt="Foto 1" />
          </li>
        </ul>
      </motion.div>
    </section>
  );
 }

 export default Ilustraciones;