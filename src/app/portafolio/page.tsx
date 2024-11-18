import React from 'react';
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
  const images = [
    dev1, dev2, dev3, dev4,
    ui1, ui2,
    d1, d2, d3, d4, d5, d6, d7,
    i1, i2, i3, i4, i5, i6, i7, i8, i9,
    f1, f2, f3, f4, f5, f6, f7
  ];

  return (
    <>
      <section className="portafolio row d-flex align-items-center">

        <div className='titulo col-11 ol-xl-9 mx-auto text-center pt-4 d-flex flex-column align-items-md-center'>
          <h1 className='text-center mb-4'>Portafolio</h1>
          <hr />
          <ul>
            <li>
              <a href="#miBanco1" className="link-portafolio">Desarrollo</a>
              <a href="#miBanco1" className="link-portafolio">Desarrollo</a>
              <a href="#miBanco1" className="link-portafolio">Desarrollo</a>
              <a href="#miBanco1" className="link-portafolio">Desarrollo</a>
            </li>
          </ul>
        </div>

        <div className='contenidoPortafolio contenido-portafolio col-12 col-md-11 mx-auto mt-5 pb-md-4'>
          <ul className='row'>
            {images.map((image, index) => (
              <li key={index} className='col-4'>
                <Image src={image} alt={`Portafolio ${index + 1}`} className="img-fluid" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Portafolio;