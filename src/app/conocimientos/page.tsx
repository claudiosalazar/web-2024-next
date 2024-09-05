'use client';

import Image from 'next/image';
import icoHtml from '../assets/iconos/ico-html.png';
import icoCss from '../assets/iconos/ico-css.png';
import icoSass from '../assets/iconos/ico-sass.png';
import icoBootstrap from '../assets/iconos/ico-bootstrap.png';
import icoAdobe from '../assets/iconos/ico-adobe.png';
import icoAngular from '../assets/iconos/ico-angular.png';  
import icoAtlassian from '../assets/iconos/ico-atlassian.png';

import icoPhp from '../assets/iconos/ico-php.png';  
import icoWp from '../assets/iconos/ico-wordpress.png';
import icoMysql from '../assets/iconos/ico-mysql.png';
import icoApi from '../assets/iconos/ico-api.png';

import icoFigma from '../assets/iconos/ico-figma.png';
import icoGit from '../assets/iconos/ico-git.png';
import icoGitHub from '../assets/iconos/ico-github.png';
import icoGitLab from '../assets/iconos/ico-gitlab.png';

import icoIllustrator from '../assets/iconos/ico-illustrator.png';
import icoJs from '../assets/iconos/ico-js.png';
import icoKanban from '../assets/iconos/ico-kanban.png';
import icoNpm from '../assets/iconos/ico-npm.png';
import icoPhotoshop from '../assets/iconos/ico-photoshop.png';
import icoReact from '../assets/iconos/ico-react.png';

import icoScrum from '../assets/iconos/ico-scrum.png';
import icoSketch from '../assets/iconos/ico-sketch.png';
import icoTs from '../assets/iconos/ico-ts.png';
import icoXd from '../assets/iconos/ico-xd.png';
import React, { useState } from 'react';




function Conocimientos() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false)

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
    setIsActive1(!isActive1);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
    setIsActive2(!isActive2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
    setIsActive3(!isActive3);
  };
  const handleClick4 = () => {
    setIsOpen4(!isOpen4);
    setIsActive4(!isActive4);
  };
  const handleClick5 = () => {
    setIsOpen5(!isOpen5);
    setIsActive5(!isActive5);
  };
  const handleClick6 = () => {
    setIsOpen6(!isOpen6);
    setIsActive6(!isActive6);
  };

  return (
    <section className="info-conocimientos conocimientos row d-flex align-items-center">
      <div className="col-6 mx-auto py-5">
        <h1 className="my-5">Conocimientos</h1>
        
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" onClick={handleClick1}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoUno" aria-expanded="true" aria-controls="panelsAbierto-conocimientoUno">
                <div className="icono-item">
                  <div className={`vertical ${isOpen1 ? 'item-abierto' : ''}`}></div>
                  <div className="horizontal"></div>
                </div>
                <div className={`iconos d-none d-md-flex ${isOpen1 ? 'active' : ''}`}>
                  <Image src={icoHtml} className="ico-conocimientos" alt="HTML 5" title="HTML 5" />
                  <Image src={icoCss} className="ico-conocimientos" alt="CSS 3" title="CSS 3" />
                  <Image src={icoSass} className="ico-conocimientos" alt="Sass" title="Sass, scss" />
                  <Image src={icoBootstrap} className="ico-conocimientos" alt="Bootstrap" title="Bootstrap 4 o superior" />
                </div>
                Códigos estructurales
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoUno" className="accordion-collapse collapse">
              <div className="accordion-body">
                <p>
                  Con más de 15 años de experiencia en desarrollo web, domino <strong>HTML5</strong> semántico y <strong>CSS3</strong> para crear proyectos responsivos. Utilizo <strong>preprocesadores CSS</strong> y <strong>Bootstrap (4 y versiones superiores)</strong> para optimizar el flujo de trabajo y garantizar interfaces consistentes en diversos dispositivos.
                </p>
                <hr className='separador-conocimientos' />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" onClick={handleClick2} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoDos" aria-expanded="true" aria-controls="panelsAbierto-conocimientoDos">
              <div className="icono-item">
                <div className={`vertical ${isOpen2 ? 'item-abierto' : ''}`}></div>
                <div className="horizontal"></div>
              </div>
              <div className={`iconos d-none d-md-flex ${isOpen2 ? 'active' : ''}`}>
                <Image src={icoJs} className="ico-conocimientos" alt="javascript" title="JavaScript" />
                <Image src={icoTs} className="ico-conocimientos" alt="typescript" title="TypeScript" />
                <Image src={icoPhp} className="ico-conocimientos" alt="php" title="PHP" />
                <Image src={icoApi} className="ico-api" alt="api" title="API" />
                <Image src={icoMysql} className="ico-conocimientos" alt="mysql" title="MySQL" />
              </div>
              Lenguajes
            </button>
            </h2>
            <div id="panelsAbierto-conocimientoDos" className="accordion-collapse collapse">
              <div className="accordion-body">
                <p>Tengo conocimientos en el desarrollo de proyectos web utilizando <strong>JavaScript</strong>, <strong>PHP</strong> y <strong>NodeJs</strong>. Además, tengo experiencia en la integración y <strong>consumo de datos provenientes de APIs</strong>, así como en el manejo de bases de datos  <strong>MySQL</strong>, lo que me permite crear aplicaciones dinámicas y conectadas a servicios externos de manera eficiente.</p>
                <hr className='separador-conocimientos' />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" onClick={handleClick3} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoTres" aria-expanded="false" aria-controls="panelsAbierto-conocimientoTres">
                <div className="icono-item">
                  <div className={`vertical ${isOpen3 ? 'item-abierto' : ''}`}></div>
                  <div className="horizontal"></div>
                </div>
                <div className={`iconos d-none d-md-flex ${isOpen3 ? 'active' : ''}`}>
                  <Image src={icoAngular} className="ico-conocimientos" alt="angular" title="Angular 15 o superior" />
                  <Image src={icoReact} className="ico-conocimientos" alt="react" title="React Native" />
                  <Image src={icoWp} className="ico-conocimientos" alt="wordpress" title="WordPress" />
                  <Image src={icoNpm} className="ico-conocimientos" alt="npm" title="Dependencias NPM" />
                </div>
                Frameworks y Gestión de Dependencias
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoTres" className="accordion-collapse collapse">
              <div className="accordion-body">
                <p>Poseo experiencia sólida en el desarrollo de proyectos web en frameworks como <strong>Angular (15 y versiones superiores)</strong>, <strong>React (18)</strong> y <strong>WordPress</strong>. Además, tengo conocimientos en el manejo de dependencias a través de <strong>NPM</strong>, lo que me permite construir aplicaciones robustas y escalables eficientemente. También tengo experiencia en la <strong>Modularización de proyectos</strong>.</p>
                <hr className='separador-conocimientos' />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" onClick={handleClick4} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoCuatro" aria-expanded="false" aria-controls="panelsAbierto-conocimientoCuatro">
                <div className="icono-item">
                  <div className={`vertical ${isOpen4 ? 'item-abierto' : ''}`}></div>
                  <div className="horizontal"></div>
                </div>
                <div className={`iconos d-none d-md-flex ${isOpen4 ? 'active' : ''}`}>
                  <Image src={icoGit} className="ico-conocimientos" alt="git" title="GIT" />
                  <Image src={icoGitHub} className="ico-conocimientos" alt="github" title="Repositorio GitHub" />
                  <Image src={icoAtlassian} className="ico-conocimientos" alt="atlassian" title="Repositorio Atlassian" />
                  <Image src={icoGitLab} className="ico-conocimientos" alt="gitlab" title="Repositorio GitLab" />
                </div>
                Manejo de Repositorios y Gestión de Proyectos
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoCuatro" className="accordion-collapse collapse">
              <div className="accordion-body">
                <p>Tengo experiencia sólida en el manejo de repositorios utilizando <strong>Git</strong>, lo que me permite gestionar eficientemente el control de versiones en proyectos de desarrollo. Además, cuento con habilidades profesionales en el uso de herramientas de gestión de proyectos como <strong>Atlassian</strong>, <strong>GitHub</strong> y <strong>GitLab</strong>, lo que facilita la colaboración y el seguimiento de tareas en equipos de trabajo distribuidos.</p>
                <hr className='separador-conocimientos' />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" onClick={handleClick5} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoCinco" aria-expanded="false" aria-controls="panelsAbierto-conocimientoCinco">
                <div className="icono-item">
                  <div className={`vertical ${isOpen5 ? 'item-abierto' : ''}`}></div>
                  <div className="horizontal"></div>
                </div>
                <div className={`iconos d-none d-md-flex ${isOpen5 ? 'active' : ''}`}>
                  <Image src={icoFigma} className="ico-conocimientos" alt="figma" title="Figma" />
                  <Image src={icoSketch} className="ico-conocimientos" alt="sketch" title="Sketch" />
                  <Image src={icoXd} className="ico-conocimientos" alt="xd" title="Adobe XD" />
                  <Image src={icoAdobe} className="ico-conocimientos" alt="adobe" title="Creative Cloud Adobe" />
                  <Image src={icoIllustrator} className="ico-conocimientos" alt="illustrator" title="Adobe Illustrator" />
                  <Image src={icoPhotoshop} className="ico-conocimientos" alt="photoshop" title="Adobe Photoshop" />
                </div>
                Software de Diseño
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoCinco" className="accordion-collapse collapse">
              <div className="accordion-body">
                <p>Tengo un dominio profesional en el uso de herramientas de diseño UI como <strong>Figma</strong>, <strong>Sketch</strong> y <strong>Adobe XD</strong>. Con más de 15 años de experiencia, también tengo un amplio conocimiento en el uso de software de diseño y edición de imágenes de la suite <strong>Creative Cloud</strong> de <strong>Adobe</strong>, lo que me permite crear y desarrollar proyectos visuales de alta calidad y precisión.</p>
                <hr className='separador-conocimientos' />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" onClick={handleClick6} type="button" data-bs-toggle="collapse" data-bs-target="#panelsAbierto-conocimientoSeis" aria-expanded="false" aria-controls="panelsAbierto-conocimientoSeis">
                <div className="icono-item">
                  <div className={`vertical ${isOpen6 ? 'item-abierto' : ''}`}></div>
                  <div className="horizontal"></div>
                </div>
                <div className={`iconos d-none d-md-flex ${isOpen6 ? 'active' : ''}`}>
                  <Image src={icoScrum} className="ico-conocimientos" alt="scrum" title="Scrum" />
                  <Image src={icoKanban} className="ico-conocimientos" alt="kanban" title="Kanban" />
                </div>
                Metodologías Ágiles
              </button>
            </h2>
            <div id="panelsAbierto-conocimientoSeis" className="accordion-collapse collapse">
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