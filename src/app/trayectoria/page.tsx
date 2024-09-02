function Trayectoria() {
  return (
    <section className="info-trayectoria trayectoria row d-flex align-items-center">

      <div className="col-5 offset-1">
        <h1 className="my-5">Trayectoria</h1>
        <p className="resumen">Tengo más de 15 años de experiencia profesional en proyectos web. Desde 2017, he participado activamente en proyectos de transformación digital dentro de equipos multidisciplinarios, siempre trabajando bajo metodologías ágiles. En los últimos 7 años, he colaborado en proyectos para importantes entidades bancarias nacionales como Banco Estado, BCI e Itaú Chile. A lo largo de mi carrera, mi enfoque ha estado siempre centrado en la mejora continua de mis conocimientos en las últimas tecnologías para el desarrollo frontend.</p>
        <button>
          <span className="material-symbols-outlined me-2">
            picture_as_pdf
          </span>
          <span>Descargar CV</span>
        </button>
      </div>

      <div className="col-5">
        <ul>
          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'>ITAU</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>UI Developer</small>
              </span>
              <span className="duracion-trabajo text-end d-block">
                <p className="anho-trabajo">
                  2021 - 2023
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>
          
          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'>everis / NTT DATA</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>Prototyper</small>
              </span>
              <span className="duracion-trabajo">
                <p className="anho-trabajo">
                  2017 - 2021
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>

          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'>BBK Group</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>Frontend / UX</small>
              </span>
              <span className="duracion-trabajo">
                <p className="anho-trabajo">
                  2017
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>
          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'> MAYO Group</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>Diseñador Frontend / UI / Productor Digital / Lider Equipo Producción Digital</small>
              </span>
              <span className="duracion-trabajo">
                <p className="anho-trabajo">
                  2009 - 2016
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>

          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'>KITEKNOLOGY</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>Diseñador Web Senior</small>
              </span>
              <span className="duracion-trabajo">
                <p className="anho-trabajo">
                  2008 - 2009
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>

          <li>
            <div className="d-flex justify-content-between">
              <span className="d-block">
                <p className="mb-1">
                  <strong className='d-flex align-items-center nombre-trabajo'>
                    <span className='me-1'>NUESTRAGENCIA</span>
                    <span className="fondo-strong" />
                  </strong>
                </p>
                <small>Diseñador Gráfico / Diseñador Web / Frontend</small>
              </span>
              <span className="duracion-trabajo">
                <p className="anho-trabajo">
                  2004 - 2007
                  <span className="fondo-strong" />
                </p>
              </span>
            </div>
            <span className="fondo-linea-trabajo" />
          </li>
        </ul>
      </div>

    </section>
  );
}

export default Trayectoria;