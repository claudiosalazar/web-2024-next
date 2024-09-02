'client-only'

import React from 'react';
//import VideoInicio from '../ui/video-inicio';


function Inicio() {
  return (
    <>
      <main className='info-inicio row'>
        <section className='info-portada col-12 p-0'>
          <div className='inicio'>
            <div className='contenido-portada d-flex align-items-center justify-content-center'>
              <div>
                <div className='logo-inicio mx-auto'></div>
                <h1 className='text-center'>DISEÑADOR / FRONTEND DEV</h1>
                <div className='nombre-inicio'></div>
              </div>
            </div>
            {/* <div className='fondo-video'>
              <VideoInicio />
            </div> */}
          </div>
        </section>
          
        <section className='resumen-portafolio py-5 col-12'>
          <p>Resumen portafolio</p>
        </section>

        <section className='resumen-conocimiento py-5 col-12'>
          <p>Resumen conocimiento</p>
        </section>

        <section className='resumen-trayectoria py-5 col-12'>
          <p>Resumen Trayectoria</p>
        </section>
      </main>
    </>
  );
}

export default Inicio;