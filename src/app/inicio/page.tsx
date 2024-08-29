import React from 'react';

function Inicio() {
  return (
    <>
      <div className='info-inicio'>
        <section className='info-portada'>
          <div className="row">
            <div className='col-8 offset-2'>
              <h1 className='titulo my-3 my-xl-4'>
                FRONTEND
                <br />
                DESIGNER
              </h1>

              <hr className='separador mb-4 mb-lg-3' />

              <p className='texto'>
                <strong>Frontend Designer</strong> especializado en <strong>transformar el diseño UI</strong> en <strong>interfaces web responsivas cross browser</strong>, creando código semántico y manteniendo siempre un enfoque en la mejora continua y el conocimiento de nuevas tecnologías, trabajando con <strong>metodologías ágiles</strong>. Gracias a mis estudios en diseño, estoy familiarizado con los términos técnicos y la interpretación de los <strong>equipos UX/UI</strong>.
              </p>

              <div className='uxUi mt-5 mt-md-3 mt-xl-4'>
                <span className='ux-ui'>UX / UI</span>
                <span className='ico-saludo d-block mx-3'></span>
                <span className='dev'>DEV</span>
              </div>
            </div>
          </div>
        </section>
          
        <section className='resumen-portafolio py-5'>
          <p>Resumen portafolio</p>
        </section>

        <section className='resumen-conocimiento py-5'>
          <p>Resumen conocimiento</p>
        </section>

        <section className='resumen-trayectoria py-5'>
          <p>Resumen Trayectoria</p>
        </section>
      </div>
    </>
  );
}

export default Inicio;