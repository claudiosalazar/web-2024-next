import React, { useEffect } from 'react';
import { easeOut, motion, useAnimation } from "framer-motion";

function Footer() {
  const controlNombre = useAnimation();
  const controlNota = useAnimation();
  const controlSeparador = useAnimation();
  const controlLista1 = useAnimation();
  const controlLista2 = useAnimation();
  const controlLista3 = useAnimation();
  const controlLista4 = useAnimation();

  const nombre = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  const nota = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  const separador = {
    hidden: {
      opacity: 0,
      scaleX: 0
    },
    visible: {
      opacity: 0.35,
      scaleX: 0.45,
      transition: {
        easeOut,
        duration: 0.25
      }
    },
  };

  const lista1 = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  const lista2 = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  const lista3 = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  const lista4 = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeOut,
        duration: 0.1
      }
    },
  };

  useEffect(() => {
    const sequence = async () => {
      await controlNombre.start("visible");
      await controlNota.start("visible");
      await controlLista1.start("visible");
      await controlLista2.start("visible");
      await controlLista3.start("visible");
      await controlLista4.start("visible");
      await controlSeparador.start("visible");
    };

    sequence();
  }, [controlNombre, controlNota, controlLista1, controlLista2, controlLista3, controlLista4, controlSeparador]);

  return (
    <footer>
      <motion.p variants={nombre} animate={controlNombre} initial="hidden" className='nombre'>
        Claudio Salazar © 2004 - 2024 | V.2
      </motion.p>
      <motion.p variants={nota} animate={controlNota} initial="hidden">
        <small>Sitio desarrollado con Next.js, React y Bootstrap</small>
      </motion.p>
      <motion.hr variants={separador} animate={controlSeparador} initial="hidden" className='separador' />
      <ul>
        <motion.li variants={lista1} animate={controlLista1} initial="hidden">
          <a href="https://www.linkedin.com/in/claudiosv/" target="new" className="btn-footer linkedin" title="Mi perfil en LinkedIn"></a>
        </motion.li>
        <motion.li variants={lista2} animate={controlLista2} initial="hidden">
          <a href="https://github.com/claudiosalazar" target="new" className="btn-footer github" title="Mi repositorio en GitHub"></a>
        </motion.li>
        <motion.li variants={lista3} animate={controlLista3} initial="hidden">
          <a href="https://www.instagram.com/claudiosvcl/" target="new" className="btn-footer instagram" title="Mi perfil en Intagram"></a>
        </motion.li>
        <motion.li variants={lista4} animate={controlLista4} initial="hidden">
          <a href="https://www.behance.net/claudiosalazarcl" target="new" className="btn-footer behance" title="Mi portafolop en Behance"></a>
        </motion.li>
      </ul>
    </footer>
  );
}

export default Footer;