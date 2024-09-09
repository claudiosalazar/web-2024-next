'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contactame() {
  const [isActive, setIsActive] = useState(false);
  const [zIndex, setZIndex] = useState(-1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setZIndex(1000);
    }
    setIsActive(!isActive);
    setIsButtonDisabled(true);
  };

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
      setZIndex(-1);
      setIsButtonDisabled(false);
    }, 350); // Retraso de 0.35 segundos
  };

  return (
    <>
      <div className={`contactame ${isActive ? 'active' : ''}`}>
        <button 
          className={`${isActive ? 'active' : ''}`} 
          onClick={handleClick} 
          disabled={isButtonDisabled}
        ></button>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={isActive ? "contactame-activo" : "contactame-oculto"}
        style={{ zIndex: zIndex }}
      >
        <div className='contenido-contactame'>
          <button onClick={handleClose} className='cerrar'>
            <div className='icono-cerrar'></div>
          </button>
          <span className='titulo'>
            Contáctame
          </span>
          <span className='subtitulo my-2 my-md-3'>
            ¡Hablemos!
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