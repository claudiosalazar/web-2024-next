'client-only'

import React from 'react';
import VideoInicio from '../ui/video-inicio';
import images from '../ui/Images';
import Link from "next/link";

function Inicio() {
  return (
    <>
      <main className='info-inicio row'>
        <section className='info-portada col-12 p-0'>
          <div className='inicio'>
            <div className='contenido-portada d-flex align-items-center justify-content-center'>
              <div>
                <div className='logo-inicio mx-auto'></div>
                <div className='nombre-inicio mb-4'></div>
                <h1 className='d-flex flex-column mx-auto'>
                  <span>UI DEVELOPER</span> 
                  <span>UI DESIGNER</span>
                  <span>FRONTEND DESIGNER</span>
                </h1>
              </div>
            </div> 
            <VideoInicio />
          </div>
        </section>

        <section className='resumen-trayectoria pt-5 pb-4 py-md-5 col-12'>
          <h3 className='mb-3 mb-md-5'>Trayectoria</h3>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-9 col-xxl-6 mx-auto'>
              <div className='row pb-4'>
                <div className='col-12 col-md-4 col-lg-2 mx-auto mx-md-0 mb-3 mb-md-0'>
                  <h4>
                    <span className='span-texto'>DESDE</span>
                    <br className='d-none d-md-block' />
                    <span className='span-anho'>2004</span>
                  </h4>
                </div>
                <div className='col-12 col-md-8 col-lg-10 texto-resumen-trayectoria'>
                  <p className='ms-0 ms-md-4 mb-4 px-4 px-lg-0'>
                    <strong>UI DEVELOPER</strong> especializado en en el <strong>desarrollo de interfaces web y componentes</strong>, usando código semántico y manteniendo siempre un enfoque en la mejora continua y el conocimiento de nuevas tecnologías. Más de 10 años de experiencia en uso de <strong>HTML</strong> y <strong>CSS</strong> para framework como <strong>Angular</strong> o <strong>React</strong>, trabajando en proyectos con <strong>metodologías ágiles</strong>. 
                  </p>
                  <p className='mb-0 ps-4 mx-auto mx-md-0 mt-2 mt-md-0'>
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

        <section className='resumen-conocimiento py-2 pt-md-4 pb-md-5 col-12'>
          <div className='row'>
            <div className='col-12 my-4 mb-md-3'>
              <h3>Conocimientos</h3>
            </div>
            <div className='col-12 col-md-10 col-lg-8 col-xxl-6 mx-auto'>
              <div className='row'>
                <div className='col-8 col-md-4 mx-auto mt-4 mt-md-4 pe-md-4 separador-resumen-conocimiento'>
                  <img src={images.icoConocimientos} className="ico-conocimientos-resumen img-fluid" alt="conocimientos" title="Conocimientos" />
                </div>
                <div className='col-10 col-md-8 mx-auto my-5 mt-md-4 mb-md-0 ps-md-4'>
                  <p>
                    Mis mejores conocimientos al día de hoy están enfocados al desarrollo Frontend, utilizando frameworks como Angular y bibliotecas como React. También años de experiencia en el uso de software de diseño para proyectos web. 
                  </p>
                  <p className='mb-0 mx-auto mx-md-0 mt-4 mt-md-5'>
                    <Link href="/conocimientos" className="link-inicio-resumenes">
                      <span className='ico-mas-blanco'></span>
                      <span className='texto-link-inicio'>Más información</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
        <section className='resumen-portafolio py-5 col-12'>
          <h3 className='mb-5'>Portafolio</h3>
          <hr className='mx-auto' />
          <ul className='d-flex justify-content-center flex-column flex-md-row mx-auto my-3 my-md-5'>
            <li>
              <img src={images.dev1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
            <li>
              <img src={images.dev2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
            <li>
              <img src={images.dev3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
            </li>
          </ul>
          <hr className='mx-auto' />
          <p className='mb-0 mt-4 d-flex justify-content-center mt-4 mt-md-5'>
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