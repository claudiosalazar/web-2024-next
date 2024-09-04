'client-only'

import React from 'react';
import Image from 'next/image';
import icoConocimientos from '../assets/resumen-icon-conocimientos.png';
import VideoInicio from '../ui/video-inicio';
import miBanco1 from '../assets/portafolio/mi-banco-1.jpg';
import Link from "next/link";


function Inicio() {
  return (
    <>
      <main className='info-inicio row'>
        <section className='info-portada col-12'>
          <div className='inicio'>
            <div className='contenido-portada d-flex align-items-center justify-content-center'>
              <div>
                <div className='logo-inicio mx-auto'></div>
                <h1 className='text-center'>DISEÑADOR / FRONTEND DEV</h1>
                <div className='nombre-inicio'></div>
              </div>
            </div> 
            <div className='fondo-video'>
              <VideoInicio />
            </div>
          </div>
        </section>

        <section className='resumen-trayectoria py-5 col-12'>
          <h3 className='mb-5'>Trayectoria</h3>
          <div className='row'>
            <div className='col-6 mx-auto'>
              <div className='row pb-4'>
                <div className='col-2'>
                  <h4>
                    <span className='span-texto'>DESDE</span>
                    <br />
                    <span className='span-anho'>2024</span>
                  </h4>
                </div>
                <div className='col-10 texto-resumen-trayectoria'>
                  <p className='ms-4 mb-4'>
                    Con más de 20 años de experiencia, he participado en muchos proyectos web para rubros como banca, corporativos y marketing. Durante los últimos años he trabajado en proyectos con metodologías ágiles utilizando las últimas tecnologías para proyectos de la banca nacional como Banco Estado, BCI e Itaú.
                  </p>
                  <p className='mb-0 ps-4'>
                    <Link href="/trayectoria" className="link-inicio-resumenes">
                      <span className='ico-mas-blanco'></span>
                      <span className='texto-link-inicio'>Más información</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='resumen-conocimiento py-5 col-12'>
          <div className='col-8 mx-auto py-5'>
            <div className='d-flex align-items-stretch'>
              <div className='d-flex align-items-center'>
                <h3>Conocimientos</h3>
              </div>
              <div className='separador-resumen-conocimiento mx-5 px-5'>
                <Image src={icoConocimientos} className="ico-conocimientos-resumen img-fluid" alt="HTML 5" title="HTML 5" />
              </div>
              <div className='d-flex flex-column justify-content-between align-items-baseline'>
                <p>
                  Mis mejores conocimientos al día de hoy están enfocados al desarrollo Frontend, utilizando frameworks como Angular y bibliotecas como React. También años de experiencia en el uso de software de diseño para proyectos web. 
                </p>
                <p className='mb-0'>
                  <Link href="/conocimientos" className="link-inicio-resumenes">
                    <span className='ico-mas-blanco'></span>
                    <span className='texto-link-inicio'>Más información</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
          
        <section className='resumen-portafolio py-5 col-12'>
          <h3 className='mb-5'>Portafolio</h3>
          <hr className='mx-auto' />
          <ul className='d-flex justify-content-center mx-auto my-5'>
            <li>
              <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
            <li>
              <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
            <li>
              <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
          </ul>
          <hr className='mx-auto' />
          <p className='mb-0 mt-4 d-flex justify-content-center'>
            <Link href="/portafolio" className="link-inicio-resumenes">
              <span className='ico-mas-dorado-oscuro'></span>
              <span className='texto-link-inicio'>Ver más</span>
            </Link>
          </p>
        </section>
        
      </main>
    </>
  );
}

export default Inicio;