import React from 'react';

function Inicio() {
  return (
    <>
      <main className='info-inicio row'>

        <section className='info-portada inicio col-12'>
          <div className='logo-inicio'></div>
          <h1>DISEÑADOR / FRONTEND DEV</h1>
          <div className='nombre-inicio'></div>
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