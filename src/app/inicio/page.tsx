'client-only'

import React from 'react';
import Image from 'next/image';
import icoConocimientos from '../assets/resumen-icon-conocimientos.png';
import VideoInicio from '../ui/video-inicio';


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
              <div className='row'>
                <div className='col-2'>
                  2024
                </div>
                <div className='col-10'>
                  <p>
                    Con más de 20 años de experiencia, he participado en muchos proyectos web para rubros como banca, corporativos y marketing. Durante los últimos años he trabajado en proyectos con metodologías ágiles utilizando las últimas tecnologías para proyectos de la banca nacional como Banco Estado, BCI e Itaú.
                  </p>
                  <p>
                    <a href='#'>+ Más información</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='resumen-conocimiento py-5 col-12'>
          <div className='col-8 mx-auto py-5'>
            <div className='d-flex flex-row align-items-center'>
              <div>
                <h3>Conocimiento</h3>
              </div>
              <div>
                <Image src={icoConocimientos} className="ico-conocimientos-resumen" alt="HTML 5" title="HTML 5" />
              </div>
              <div>
                <p>
                  Mis mejores conocimientos al día de hoy están enfocados al desarrollo Frontend, utilizando frameworks como Angular y bibliotecas como React. También años de experiencia en el uso de software de diseño para proyectos web. 
                </p>
                <p>
                  <a href='#'>+ Más información</a>
                </p>
              </div>
            </div>
          </div>
        </section>
          
        <section className='resumen-portafolio py-5 col-12'>
          <h3 className='mb-5'>Portafolio</h3>
        </section>
        
      </main>
    </>
  );
}

export default Inicio;