'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contactame() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="contactame">
        <a href="#" className="material-symbols-outlined" onClick={handleClick}></a>
      </div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isActive ? 1 : 0 }} transition={{ duration: 0.35 }} className={isActive ? "contactamen-activo" : "contactamen-oculto"}>
        <div className='contenido-contactame'>
        <button onClick={handleClick} className='cerrar'>
          <div className='icono-cerrar'></div>
        </button>
          <span className='titulo'>
            Contáctame
          </span>
          <span className='subtitulo my-2 my-md-3'>
            !Hablemos!
          </span>
          <p className='parrafo'>
            Envíame un mensaje a WhatsApp, contáctame en LinkedIn o si prefieres envíame un email a mi correo personal.
          </p>
          <ul className='links d-flex justify-content-center mt-4'>
            <li>
              <a href="https://wa.me/56981742311" target="new" className="whatsapp"></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/claudiosv/" target="new" className="linkedin"></a>
            </li>
            <li>
              <a href="mailto:contacto@claudiosalazar.cl" target="new" className="email"></a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default Contactame;