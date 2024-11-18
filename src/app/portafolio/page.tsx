'use client'

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import images from '../ui/Images';
import ImageModal from '../ui/ImageModal';

function Portafolio() {
  const imageList = [
    { src: images.dev1, category: 'dev', text: 'Desarrollo Mi Banco' },
    { src: images.dev2, category: 'dev', text: 'Desarrollo BCI' },
    { src: images.dev3, category: 'dev', text: 'Desarrollo CYM' },
    { src: images.dev4, category: 'dev', text: 'Desarrollo Itaú' },
    { src: images.ui1, category: 'ui', text: 'Diseño UI CYM' },
    { src: images.ui2, category: 'ui', text: 'Diseño UI Mi Banco' },
    { src: images.d1, category: 'd', text: 'Diseño Adidas' },
    { src: images.d2, category: 'd', text: 'Diseño Aflorar' },
    { src: images.d3, category: 'd', text: 'Diseño Alacranes' },
    { src: images.d4, category: 'd', text: 'Diseño Bigmark' },
    { src: images.d5, category: 'd', text: 'Diseño CYM' },
    { src: images.d6, category: 'd', text: 'Diseño Katarsis' },
    { src: images.d7, category: 'd', text: 'Diseño Megasalud' },
    { src: images.i1, category: 'i', text: 'Ilustración Águila Audax' },
    { src: images.i2, category: 'i', text: 'Ilustración Love Rock Beer' },
    { src: images.i3, category: 'i', text: 'Ilustración Manchester Logo' },
    { src: images.i4, category: 'i', text: 'Ilustración Scar' },
    { src: images.i5, category: 'i', text: 'Ilustración Skeletor' },
    { src: images.i6, category: 'i', text: 'Ilustración Witch King' },
    { src: images.i7, category: 'i', text: 'Ilustración Wonder Woman' },
    { src: images.i8, category: 'i', text: 'Ilustración Darth Maul' },
    { src: images.i9, category: 'i', text: 'Ilustración Skull Batman' },
    { src: images.f1, category: 'f', text: 'Fotografía Carretera' },
    { src: images.f2, category: 'f', text: 'Fotografía Constanera' },
    { src: images.f3, category: 'f', text: 'Fotografía Foco' },
    { src: images.f4, category: 'f', text: 'Fotografía Macbook' },
    { src: images.f5, category: 'f', text: 'Fotografía Moto' },
    { src: images.f6, category: 'f', text: 'Fotografía Pelota' },
    { src: images.f7, category: 'f', text: 'Fotografía Reflejo' },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(imageList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);
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

  const handleImageClick = (src: string, text: string) => {
    setSelectedImage(src);
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
            <li className='col-6 col-md'>
              <a href="#ui" className={`link-portafolio ${activeCategory === 'ui' ? 'active' : ''}`} onClick={() => handleCategoryClick('ui')}>Diseño UI</a>
            </li>
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
                  onClick={() => handleImageClick(image.src, image.text)}
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

      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage || ''} imageText={selectedText || ''} onClose={handleCloseModal} />
    </>
  );
}

export default Portafolio;