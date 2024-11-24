'use client'

import React, { useState, useEffect, use } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import images from '../ui/Images';
import ImageModal from '../ui/ImageModal';

function Portafolio() {
  const imageList = [
    { src: images.dev1, category: 'dev', titulo: 'Mi Banco', text: (
      <>
        <hr />
        <p>Proyecto personal de banco ficticio desarrollado en Angular, SCSS y Bootstrap 5, con un Backend en NodeJS que consume datos desde base de datos MySql.</p>
        <a href="https://mi-banco.claudiosalazar.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev2, category: 'dev', titulo: 'BCI | 360 Connect', text: (
      <>
        <hr />
        <p>Desarrollo de interface UI para variados modulos de APP Web responsive realizada con Angular, SCSS y Material Design.</p>
        <a href="https://www.bci.cl/empresas/360-connect" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev3, category: 'dev', titulo: 'C&M Consultores', text: (
      <>
        <hr />
        <p>Desarrollo sitio web y diseño UI responsive en Angular para pyme dedicada a la contabilidad.</p>
        <a href="https://cymconsultores.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev4, category: 'dev', titulo: 'Itaú', text: (
      <>
        <hr />
        <p>Desarrollo de variados modulos para sitio de clientes Itaú.</p>
        <a href="https://www.itau.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    // { src: images.ui1, category: 'ui', titulo: 'Diseño UI C&M Consultores', text: 'Diseño UI CYM' },
    // { src: images.ui2, category: 'ui', titulo: 'Diseño UI Mi Banco', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet quam ut commodo finibus. Cras eu urna viverra, porta ante ut, mollis magna. Etiam vitae massa rutrum, hendrerit mi id, cursus nibh.' },
    { src: images.d1, category: 'd', titulo: 'Adidas', text: (
      <>
        <hr />
        <p>Propuesta personal de aviso para Adidas usando arquitectura de estación de metro Pedro de Valdivia en Santiago.</p>
      </>
    )},
    { src: images.d2, category: 'd', titulo: 'Aflorar', text: (
      <>
        <hr />
        <p>Logo para pyme dedicada a la elaboración de flores de Bach.</p>
      </>
    )},
    { src: images.d3, category: 'd', titulo: 'Alacranes', text: (
      <>
        <hr />
        <p>Logo para club privado.</p>
      </>
    )},
    { src: images.d4, category: 'd', titulo: 'Bigmark', text: (
      <>
        <hr />
        <p>Logo para pyme dedicada a la venta de variados productos importados.</p>
      </>
    )},
    { src: images.d5, category: 'd', titulo: 'C&M Consultores', text: (
      <>
        <hr />
        <p>Imagen corporativa para pyme de contabilidad.</p>
      </>
    )},
    { src: images.d6, category: 'd', titulo: 'Katarsis', text: (
      <>
        <hr />
        <p>Logo para productora audiovisual.</p>
      </>
    )},
    { src: images.d7, category: 'd', titulo: 'Megasalud', text: (
      <>
        <hr />
        <p>Rediseño para flayer informativo.</p>
      </>
    )},
    { src: images.i1, category: 'i', titulo: '', text: '' },
    { src: images.i2, category: 'i', titulo: '', text: '' },
    { src: images.i3, category: 'i', titulo: '', text: '' },
    { src: images.i4, category: 'i', titulo: '', text: '' },
    { src: images.i5, category: 'i', titulo: '', text: '' },
    { src: images.i6, category: 'i', titulo: '', text: '' },
    { src: images.i7, category: 'i', titulo: '', text: '' },
    { src: images.i8, category: 'i', titulo: '', text: '' },
    { src: images.i9, category: 'i', titulo: '', text: '' },
    { src: images.f1, category: 'f', titulo: '', text: '' },
    { src: images.f2, category: 'f', titulo: '', text: '' },
    { src: images.f3, category: 'f', titulo: '', text: '' },
    { src: images.f4, category: 'f', titulo: '', text: '' },
    { src: images.f5, category: 'f', titulo: '', text: '' },
    { src: images.f6, category: 'f', titulo: '', text: '' },
    { src: images.f7, category: 'f', titulo: '', text: '' },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(imageList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitulo, setSelectedTitulo] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<React.ReactNode>(null);
  const controlTitulo = useAnimation();
  const controlMenu = useAnimation();
  const controlImagenes = useAnimation();

  const handleCategoryClick = async (category: string | null) => {
    await controlImagenes.start({ opacity: 0, transition: { duration: 0.5 } });
    setActiveCategory(category);
    setFilteredImages(category ? imageList.filter(image => image.category === category) : imageList);
    controlImagenes.start(i => ({
      opacity: 1,
      transition: {
        easeIn: 0.5,
        delay: i * 0.05,
        duration: 0.5
      }
    }));
  };

  const handleImageClick = (src: string, titulo: string, text: React.ReactNode) => {
    setSelectedImage(src);
    setSelectedTitulo(titulo);
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedTitulo(null);
    setSelectedText(null);
  };

  useEffect(() => {
    const sequence = async () => {
      await controlTitulo.start({ 
        opacity: 1, 
        transition: {
          easeIn: 0.5,
          duration: 0.5 
        } 
      });
      await controlMenu.start({ 
        opacity: 1, 
        transition: {
          easeIn: 0.5,  
          duration: 0.5 
        } 
      });
      await controlImagenes.start(i => ({
        opacity: 1,
        transition: {
          easeIn: 0.5, 
          delay: i * 0.05, 
          duration: 0.5
        }
      }));
    };

    sequence();
  }, [controlTitulo, controlMenu, controlImagenes]);


  return (
    <>
      <section className="portafolio row d-flex align-items-center">

        <motion.div initial={{ opacity: 0 }} animate={controlTitulo} className='titulo col-12 mx-auto text-center pt-4 d-flex flex-column align-items-md-center'>
          <h1 className='text-center mb-4'>Portafolio</h1>
          <motion.ul initial={{ opacity: 0 }} animate={controlMenu} className='row menu-portafolio'>
            <li className='col-6 col-md'>
              <a href="#dev" className={`link-portafolio ${activeCategory === 'dev' ? 'active' : ''}`} onClick={() => handleCategoryClick('dev')}>Desarrollo</a>
            </li>
            {/* <li className='col-6 col-md'>
              <a href="#ui" className={`link-portafolio ${activeCategory === 'ui' ? 'active' : ''}`} onClick={() => handleCategoryClick('ui')}>Diseño UI</a>
            </li> */}
            <li className='col-6 col-md'>
              <a href="#d" className={`link-portafolio ${activeCategory === 'd' ? 'active' : ''}`} onClick={() => handleCategoryClick('d')}>Diseño Gráfico</a>
            </li>
            <li className='col-6 col-md'>
              <a href="#i" className={`link-portafolio ${activeCategory === 'i' ? 'active' : ''}`} onClick={() => handleCategoryClick('i')}>Ilustraciones</a>
            </li>
            <li className='col-6 col-md'>
              <a href="#f" className={`link-portafolio ${activeCategory === 'f' ? 'active' : ''}`} onClick={() => handleCategoryClick('f')}>Fotografía</a>
            </li>
            <li className={`col-6 col-md ${activeCategory === null ? 'oculto' : 'visible'}`}>
              <a href="#todo" className={`link-portafolio ${activeCategory === null ? 'active' : ''}`} onClick={() => handleCategoryClick(null)}>Ver todo</a>
            </li>
          </motion.ul>
        </motion.div>

        <div className='contenido-portafolio col-12 col-md-11 mx-auto pb-md-4'>
          <ul className='row'>
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.li
                  key={index}
                  className={`col-6 col-md-4 col-xxl-3`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  custom={index}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  onClick={() => handleImageClick(image.src, image.titulo, image.text)}
                >
                  <div className='mascara'></div>
                  <div className='mas-info'></div>
                  <img src={image.src} alt={`Portafolio ${index + 1}`} className="img-fluid" />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>

      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage || ''} imageTitulo={selectedTitulo || ''} imageDescripcion={selectedText || ''} onClose={handleCloseModal} />
      
    </>
  );
}

export default Portafolio;