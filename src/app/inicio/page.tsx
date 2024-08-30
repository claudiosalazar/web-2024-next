import React from 'react';

function Inicio() {
  return (
    <>
      <main className='info-inicio row'>
        <section className='info-portada inicio col-6 mx-auto'>
          <div>
            <div className='logo-inicio'></div>
            <div>
              <h1 className='titulo my-3 my-xl-4'>
                FRONTEND
                <br />
                DESIGNER
              </h1>
            </div>

            <hr className='separador mb-4 mb-lg-3' />

            <p className='introduccion d-block'>
              <strong>Frontend Designer</strong> especializado en <strong>transformar el diseño UI</strong> en <strong>interfaces web responsivas cross browser</strong>, creando código semántico y manteniendo siempre un enfoque en la mejora continua y el conocimiento de nuevas tecnologías, trabajando con <strong>metodologías ágiles</strong>. Gracias a mis estudios en diseño, estoy familiarizado con los términos técnicos y la interpretación de los <strong>equipos UX/UI</strong>.
            </p>

            <div>
              <div className='uxUi mt-5 mt-md-3 mt-xl-4 d-flex align-items-center'>
                <span className='ux-ui'>UX / UI</span>
                <span className='ico-saludo d-block mx-3'></span>
                <span className='dev'>DEV</span>
              </div>
            </div>
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