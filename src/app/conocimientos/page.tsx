import Image from 'next/image';
import icoHtml from '../assets/iconos/ico-html.png';


function Conocimientos() {
  return (
    <section className="info-conocimientos conocimientos row d-flex align-items-center">
      <div className="col-8 offset-2">
        <h1 className="my-5">Conocimientos</h1>
        
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              {/* <button className="accordion-button collapsed" onClick={handleClick1} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoUno" aria-expanded="true" aria-controls="panelsAbierto-conocimientoUno"> */}
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoUno" aria-expanded="true" aria-controls="panelsAbierto-conocimientoUno">
                Códigos estructurales
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoUno" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>
                  {/* <Image src={icoHtml} className="ico-conocimientos" alt="HTML 5" title="HTML 5" /> */}
                  Con más de 15 años de experiencia en desarrollo web, domino <strong>HTML5</strong> semántico y <strong>CSS3</strong> para crear proyectos responsivos. Utilizo <strong>preprocesadores CSS</strong> y <strong>Bootstrap (4 y versiones superiores)</strong> para optimizar el flujo de trabajo y garantizar interfaces consistentes en diversos dispositivos.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoDos" aria-expanded="false" aria-controls="flush-collapseTwo">
                Lenguajes
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoDos" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>Tengo conocimientos en el desarrollo de proyectos web utilizando <strong>JavaScript</strong>, <strong>PHP</strong> y <strong>NodeJs</strong>. Además, tengo experiencia en la integración y <strong>consumo de datos provenientes de APIs</strong>, así como en el manejo de bases de datos  <strong>MySQL</strong>, lo que me permite crear aplicaciones dinámicas y conectadas a servicios externos de manera eficiente.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoTres" aria-expanded="false" aria-controls="flush-collapseThree">
                Frameworks y Gestión de Dependencias
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoTres" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>Poseo experiencia sólida en el desarrollo de proyectos web en frameworks como <strong>Angular (15 y versiones superiores)</strong>, <strong>React (18)</strong> y <strong>WordPress</strong>. Además, tengo conocimientos en el manejo de dependencias a través de <strong>NPM</strong>, lo que me permite construir aplicaciones robustas y escalables eficientemente. También tengo experiencia en la <strong>Modularización de proyectos</strong>.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoCuatro" aria-expanded="false" aria-controls="flush-collapseThree">
                Manejo de Repositorios y Gestión de Proyectos
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoCuatro" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>Tengo experiencia sólida en el manejo de repositorios utilizando <strong>Git</strong>, lo que me permite gestionar eficientemente el control de versiones en proyectos de desarrollo. Además, cuento con habilidades profesionales en el uso de herramientas de gestión de proyectos como <strong>Atlassian</strong>, <strong>GitHub</strong> y <strong>GitLab</strong>, lo que facilita la colaboración y el seguimiento de tareas en equipos de trabajo distribuidos.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoCinco" aria-expanded="false" aria-controls="flush-collapseThree">
                Software de Diseño
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoCinco" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>Tengo un dominio profesional en el uso de herramientas de diseño UI como <strong>Figma</strong>, <strong>Sketch</strong> y <strong>Adobe XD</strong>. Con más de 15 años de experiencia, también tengo un amplio conocimiento en el uso de software de diseño y edición de imágenes de la suite <strong>Creative Cloud</strong> de <strong>Adobe</strong>, lo que me permite crear y desarrollar proyectos visuales de alta calidad y precisión.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoSeis" aria-expanded="false" aria-controls="flush-collapseThree">
                Metodologías Ágiles
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoSeis" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>Cuento con más de 6 años de experiencia en el desarrollo de proyectos bajo <strong>Metodologías Ágiles</strong>, incluyendo <strong>Scrum</strong> y <strong>Kanban</strong>. Además, tengo experiencia práctica en el uso de herramientas de gestión como <strong>Jira</strong> y <strong>Trello</strong>, lo que me permite coordinar eficazmente equipos y proyectos en entornos ágiles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Conocimientos;