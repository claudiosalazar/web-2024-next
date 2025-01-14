'use client'

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import images from '../ui/Images';
import ImageModal from '../ui/ImageModal';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function Portafolio() {
  const imageList = [
    { src: images.dev1, category: 'dev', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Mi Banco</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Proyecto personal de banco ficticio desarrollado en Angular, SCSS y Bootstrap 5, con un Backend en NodeJS que consume datos desde base de datos MySql.</p>
        <a href="https://mi-banco.claudiosalazar.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev2, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>BCI | 360 Connect</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Desarrollo de interface UI para variados modulos de APP Web responsive realizada con Angular, SCSS y Material Design.</p>
        <a href="https://www.bci.cl/empresas/360-connect" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev3, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>C&M Consultores</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Desarrollo sitio web y diseño UI responsive en Angular para pyme dedicada a la contabilidad.</p>
        <a href="https://cymconsultores.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev4, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Itaú</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Desarrollo de variados modulos para sitio de clientes Itaú.</p>
        <a href="https://www.itau.cl/" target="_blank" rel="noopener noreferrer">Ver sitio web</a>
      </>
    )},
    { src: images.dev5, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>EBACH</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y desarrollo para sitio corporativo para escuela de flores de Bach.</p>
      </>
    )},
    { src: images.dev6, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>Codelco Tech</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y desarrollo para mini sitio de Codelco.</p>
      </>
    )},
    { src: images.dev7, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Mujeres que dejan huella</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Frontend desarrollado en PHP para mini sitio de Alto las Condes dedicado a la mujer con encuesta para elegir ganadoras del año 2017.</p>
      </>
    )},
    { src: images.dev8, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Mujeres que dejan huella</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Frontend desarrollado en PHP para mini sitio de Alto las Condes con información de premiación de mujeres ganadoras de encuesta de Mujeres que dejan huella.</p>
      </>
    )},
    { src: images.dev9, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Subaru STI</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Frontend desarrollado en ASP.NET para mini sitio para model de auto Subaru Imoreza STI 2009.</p>
      </>
    )},
    { src: images.dev10, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Frontend DEV</span>
            <span className='nombre'>Subaru</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Frontend desarrollado en ASP.NET para sitio corporativo Subaru 2009.</p>
      </>
    )},
    { src: images.dev11, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>Banco Estado Corporativo</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y Frontend desarrollado en ASP.NET para sitio corporativo de Banco Estado 2009.</p>
      </>
    )},
    { src: images.dev12, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>Kal</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y Frontend desarrollado en PHP para sitio corporativo de venta de articulos artesanales.</p>
      </>
    )},
    { src: images.dev13, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>Mi Falabella</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y desarrollo para sitio dedicado a clientes de Falabella.</p>
      </>
    )},
    { src: images.dev14, category: 'dev',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño UI y Frontend DEV</span>
            <span className='nombre'>CMR</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño UX/UI y desarrollo para sitio corporativo CMR de Falabella.</p>
      </>
    )},
    { src: images.d1, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño gráfico</span>
            <span className='nombre'>Adidas</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Propuesta personal de aviso para Adidas usando arquitectura de estación de metro Pedro de Valdivia en Santiago.</p>
      </>
    )},
    { src: images.d2, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Imagen corporativa</span>
            <span className='nombre'>Aflorar</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Logo para pyme dedicada a la elaboración de flores de Bach.</p>
      </>
    )},
    { src: images.d3, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Logotipo</span>
            <span className='nombre'>Alacranes</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Logo para club privado.</p>
      </>
    )},
    { src: images.d4, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Imagen corporativa</span>
            <span className='nombre'>Bigmark</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Logo para pyme dedicada a la venta de variados productos importados.</p>
      </>
    )},
    { src: images.d5, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Imagen Corporativa</span>
            <span className='nombre'>C&M Consultores</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Imagen corporativa para pyme de contabilidad.</p>
      </>
    )},
    { src: images.d6, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Imagen corporativa</span>
            <span className='nombre'>Katarsis</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Logo para productora audiovisual.</p>
      </>
    )},
    { src: images.d7, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Diseño para imprenta</span>
            <span className='nombre'>Megasalud</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Rediseño para flayer informativo.</p>
      </>
    )},
    { src: images.d8, category: 'd',
      titulo: (
        <>
          <p>
            <span className='tipo'>Imagen corporativa</span>
            <span className='nombre'>Daleychip</span>
          </p>
        </>
      ),
      text: (
      <>
        <hr />
        <p>Diseño de imagen corporativa para productora digital.</p>
      </>
    )},
    { src: images.i1, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Tigre</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i2, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Aguila</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i3, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Lonko</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i4, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Audax Italiano</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i5, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Love, Rock & Beer</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i6, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Machester United</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i7, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Scar (Rey León)</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i8, category: 'i',
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Skeletor</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i9, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Witch King</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i10, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Wonder Woman</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i11, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Darth Maul</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.i12, category: 'i', 
      titulo: (
        <>
          <p>
            <span className='tipo'>Ilustración</span>
            <span className='nombre'>Skull Batman</span>
          </p>
        </>
      ),
      text: '' 
    },
    { src: images.f1, category: 'f',
      titulo: '', 
      text: '' 
    },
    { src: images.f2, category: 'f', 
      titulo: '', 
      text: '' 
    },
    { src: images.f3, category: 'f', 
      titulo: '', 
      text: '' 
    },
    { src: images.f4, category: 'f', 
      titulo: '', 
      text: '' 
    },
    { src: images.f5, category: 'f', 
      titulo: '', 
      ext: '' 
    },
    { src: images.f6, category: 'f', 
      titulo: '', 
      ext: '' 
    },
    { src: images.f7, category: 'f', 
      titulo: '', 
      text: '' 
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(imageList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitulo, setSelectedTitulo] = useState<React.ReactNode>(null);
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

  const handleImageClick = (src: string, titulo: React.ReactNode, text: React.ReactNode) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Image',
        event_label: typeof titulo === 'string' ? titulo : 'Image Click',
      });
    }
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
              <a href="#dev" className={`link-portafolio ${activeCategory === 'dev' ? 'active' : ''}`} onClick={() => handleCategoryClick('dev')}>Frontend DEV</a>
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
                  onClick={() => handleImageClick(image.src, image.titulo, image.text)}
                >
                  <div className='nombre-proyecto'>
                    <div className='mas-info'></div>
                    <span>{image.titulo}</span>
                  </div>
                  <div className='mascara'></div>
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