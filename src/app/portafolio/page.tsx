'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import dev1 from '../assets/portafolio/dev-mi-banco-1.jpg';
import dev2 from '../assets/portafolio/dev-bci.jpg';
import dev3 from '../assets/portafolio/dev-cym.jpg';
import dev4 from '../assets/portafolio/dev-itau.jpg';
import ui1 from '../assets/portafolio/ui-cym.jpg';
import ui2 from '../assets/portafolio/ui-mi-banco.jpg';
import d1 from '../assets/portafolio/d-adidas.jpg';
import d2 from '../assets/portafolio/d-aflorar.jpg';
import d3 from '../assets/portafolio/d-alacranes.jpg';
import d4 from '../assets/portafolio/d-bigmark.jpg';
import d5 from '../assets/portafolio/d-cym.jpg';
import d6 from '../assets/portafolio/d-katarsis.jpg';
import d7 from '../assets/portafolio/d-megasalud.jpg';
import i1 from '../assets/portafolio/i-aguila-audax.jpg';
import i2 from '../assets/portafolio/i-love-rock-beer.jpg';
import i3 from '../assets/portafolio/i-manchester-logo.jpg';
import i4 from '../assets/portafolio/i-scar.jpg';
import i5 from '../assets/portafolio/i-skeletor.jpg';
import i6 from '../assets/portafolio/i-witch-king.jpg';
import i7 from '../assets/portafolio/i-wonder-woman.jpg';
import i8 from '../assets/portafolio/i-darth-maul.jpg';
import i9 from '../assets/portafolio/i-skull-batman.jpg';
import f1 from '../assets/portafolio/f-carretera.jpg';
import f2 from '../assets/portafolio/f-constanera.jpg';
import f3 from '../assets/portafolio/f-foco.jpg';
import f4 from '../assets/portafolio/f-macbook.jpg';
import f5 from '../assets/portafolio/f-moto.jpg';
import f6 from '../assets/portafolio/f-pelota.jpg';
import f7 from '../assets/portafolio/f-reflejo.jpg';

function Portafolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const images = [
    { src: dev1, category: 'dev' },
    { src: dev2, category: 'dev' },
    { src: dev3, category: 'dev' },
    { src: dev4, category: 'dev' },
    { src: ui1, category: 'ui' },
    { src: ui2, category: 'ui' },
    { src: d1, category: 'd' },
    { src: d2, category: 'd' },
    { src: d3, category: 'd' },
    { src: d4, category: 'd' },
    { src: d5, category: 'd' },
    { src: d6, category: 'd' },
    { src: d7, category: 'd' },
    { src: i1, category: 'i' },
    { src: i2, category: 'i' },
    { src: i3, category: 'i' },
    { src: i4, category: 'i' },
    { src: i5, category: 'i' },
    { src: i6, category: 'i' },
    { src: i7, category: 'i' },
    { src: i8, category: 'i' },
    { src: i9, category: 'i' },
    { src: f1, category: 'f' },
    { src: f2, category: 'f' },
    { src: f3, category: 'f' },
    { src: f4, category: 'f' },
    { src: f5, category: 'f' },
    { src: f6, category: 'f' },
    { src: f7, category: 'f' },
  ];

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
  };

  return (
    <>
      <section className="portafolio row d-flex align-items-center">

        <div className='titulo col-11 ol-xl-9 mx-auto text-center pt-4 d-flex flex-column align-items-md-center'>
          <h1 className='text-center mb-4'>Portafolio</h1>
          <hr />
          <ul className='d-flex menu-portafolio'>
            <li className={`${activeCategory === null ? 'oculto' : 'visible'}`}>
              <a href="#todo" className={`link-portafolio ${activeCategory === null ? 'active' : ''}`} onClick={() => handleCategoryClick(null)}>Ver todo</a>
            </li>
            <li className={`${activeCategory === null ? 'oculto' : 'visible'}`}>
              |
            </li>
            <li>
              <a href="#dev" className={`link-portafolio ${activeCategory === 'dev' ? 'active' : ''}`} onClick={() => handleCategoryClick('dev')}>Desarrollo</a>
            </li>
            <li>
              |
            </li>
            <li>
              <a href="#ui" className={`link-portafolio ${activeCategory === 'ui' ? 'active' : ''}`} onClick={() => handleCategoryClick('ui')}>Diseño UI</a>
            </li>
            <li>
              |
            </li>
            <li>
              <a href="#d" className={`link-portafolio ${activeCategory === 'd' ? 'active' : ''}`} onClick={() => handleCategoryClick('d')}>Diseño Gráfico</a>
            </li>
            <li>
              |
            </li>
            <li>
              <a href="#i" className={`link-portafolio ${activeCategory === 'i' ? 'active' : ''}`} onClick={() => handleCategoryClick('i')}>Ilustraciones</a>
            </li>
            <li>
              |
            </li>
            <li>
              <a href="#f" className={`link-portafolio ${activeCategory === 'f' ? 'active' : ''}`} onClick={() => handleCategoryClick('f')}>Fotografía</a>
            </li>
          </ul>
        </div>

        <div className='contenido-portafolio col-12 col-md-11 mx-auto pb-md-4'>
          <ul className='row'>
            {images.map((image, index) => (
              <li key={index} className={`col-6 col-md-4 col-xxl-3 ${activeCategory && image.category !== activeCategory ? 'd-none' : ''}`}>
                <Image src={image.src} alt={`Portafolio ${index + 1}`} className="img-fluid" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Portafolio;