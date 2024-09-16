'client-only'

import React from 'react';
import Image from 'next/image';
import icoConocimientos from '../assets/resumen-icon-conocimientos.png';
import VideoInicio from '../ui/video-inicio';
import miBanco1 from '../assets/portafolio/desarrollo/mi-banco-1.jpg';
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
                {/* <h1 className='d-flex flex-column flex-md-row align-content-center'> */}
                <h1 className='d-flex flex-column flex-md-row mx-auto'>
                  <span >DISEÑADOR</span> 
                  <span className='d-none d-md-block mx-3'>/</span>
                  <span >FRONTEND DEV</span>
                </h1>
                <div className='nombre-inicio'></div>
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
                <div className='col-12  col-md-8 col-lg-10 texto-resumen-trayectoria'>
                  <p className='ms-0 ms-md-4 mb-4 px-4 px-lg-0'>
                    Con más de 20 años de experiencia, he participado en muchos proyectos web para rubros como banca, corporativos y marketing. Durante los últimos años he trabajado en proyectos con metodologías ágiles utilizando las últimas tecnologías para proyectos de la banca nacional como Banco Estado, BCI e Itaú.
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
                  <Image src={icoConocimientos} className="ico-conocimientos-resumen img-fluid" alt="conocimientos" title="Conocimientos" />
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