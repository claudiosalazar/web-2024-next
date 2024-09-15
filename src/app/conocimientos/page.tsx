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
import icoNode from '../assets/iconos/ico-nodejs.png';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
  const [isActive6, setIsActive6] = useState(false);

  const controlTitulo = useAnimation();
  const controlItems = useAnimation();

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

  useEffect(() => {
    const sequence = async () => {
      await controlTitulo.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await controlItems.start(i => ({
        opacity: 1,
        y: 0,
        transition: { 
          delay: i * 0.05 ,
          ease: 'easeInOut',
        }
      }));
    };

    sequence();
  }, [controlTitulo, controlItems]);

  return (
    <section className="info-conocimientos conocimientos row d-flex align-items-center">
      <div className="col-10 col-md-6 mx-auto py-5">
        <motion.h1 className="my-5" initial={{ opacity: 0, y: -20 }} animate={controlTitulo}>
          Conocimientos
        </motion.h1>
        
        <div className="accordion" id="accordionFlushExample">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              className="accordion-item"
              initial={{ opacity: 0, y: 20 }}
              animate={controlItems}
              custom={index - 1}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  onClick={() => {
                    switch (index) {
                      case 1: handleClick1(); break;
                      case 2: handleClick2(); break;
                      case 3: handleClick3(); break;
                      case 4: handleClick4(); break;
                      case 5: handleClick5(); break;
                      case 6: handleClick6(); break;
                      default: break;
                    }
                  }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsAbierto-conocimiento${index}`}
                  aria-expanded="true"
                  aria-controls={`panelsAbierto-conocimiento${index}`}
                >
                  <div className="icono-item">
                    <div className={`vertical ${eval(`isOpen${index}`) ? 'item-abierto' : ''}`}></div>
                    <div className="horizontal"></div>
                  </div>
                  <div className={`iconos d-none d-md-flex ${eval(`isOpen${index}`) ? 'active' : ''}`}>
                    {index === 1 && (
                      <>
                        <Image src={icoHtml} className="ico-conocimientos" alt="HTML 5" title="HTML 5" />
                        <Image src={icoCss} className="ico-conocimientos" alt="CSS 3" title="CSS 3" />
                        <Image src={icoSass} className="ico-conocimientos" alt="Sass" title="Sass, scss" />
                        <Image src={icoBootstrap} className="ico-conocimientos" alt="Bootstrap" title="Bootstrap 4 o superior" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Image src={icoJs} className="ico-conocimientos" alt="javascript" title="JavaScript" />
                        <Image src={icoTs} className="ico-conocimientos" alt="typescript" title="TypeScript" />
                        <Image src={icoNode} className="ico-conocimientos" alt="nodejs" title="Node.js" />
                        <Image src={icoPhp} className="ico-conocimientos" alt="php" title="PHP" />
                        <Image src={icoApi} className="ico-api" alt="api" title="API" />
                        <Image src={icoMysql} className="ico-conocimientos" alt="mysql" title="MySQL" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <Image src={icoAngular} className="ico-conocimientos" alt="angular" title="Angular 15 o superior" />
                        <Image src={icoReact} className="ico-conocimientos" alt="react" title="React Native" />
                        <Image src={icoWp} className="ico-conocimientos" alt="wordpress" title="WordPress" />
                        <Image src={icoNpm} className="ico-conocimientos" alt="npm" title="Dependencias NPM" />
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <Image src={icoGit} className="ico-conocimientos" alt="git" title="GIT" />
                        <Image src={icoGitHub} className="ico-conocimientos" alt="github" title="Repositorio GitHub" />
                        <Image src={icoAtlassian} className="ico-conocimientos" alt="atlassian" title="Repositorio Atlassian" />
                        <Image src={icoGitLab} className="ico-conocimientos" alt="gitlab" title="Repositorio GitLab" />
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <Image src={icoFigma} className="ico-conocimientos" alt="figma" title="Figma" />
                        <Image src={icoSketch} className="ico-conocimientos" alt="sketch" title="Sketch" />
                        <Image src={icoXd} className="ico-conocimientos" alt="xd" title="Adobe XD" />
                        <Image src={icoAdobe} className="ico-conocimientos" alt="adobe" title="Creative Cloud Adobe" />
                        <Image src={icoIllustrator} className="ico-conocimientos" alt="illustrator" title="Adobe Illustrator" />
                        <Image src={icoPhotoshop} className="ico-conocimientos" alt="photoshop" title="Adobe Photoshop" />
                      </>
                    )}
                    {index === 6 && (
                      <>
                        <Image src={icoScrum} className="ico-conocimientos" alt="scrum" title="Scrum" />
                        <Image src={icoKanban} className="ico-conocimientos" alt="kanban" title="Kanban" />
                      </>
                    )}
                  </div>
                  {index === 1 && 'Códigos estructurales'}
                  {index === 2 && 'Lenguajes'}
                  {index === 3 && 'Frameworks y Gestión de Dependencias'}
                  {index === 4 && 'Manejo de Repositorios y Gestión de Proyectos'}
                  {index === 5 && 'Software de Diseño'}
                  {index === 6 && 'Metodologías Ágiles'}
                </button>
              </h2>
              <div id={`panelsAbierto-conocimiento${index}`} className="accordion-collapse collapse">
                <div className="accordion-body">
                  {index === 1 && (
                    <p>
                      Con más de 15 años de experiencia en desarrollo web, domino <strong>HTML5</strong> semántico y <strong>CSS3</strong> para crear proyectos responsivos. Utilizo <strong>preprocesadores CSS</strong> y <strong>Bootstrap (4 y versiones superiores)</strong> para optimizar el flujo de trabajo y garantizar interfaces consistentes en diversos dispositivos.
                    </p>
                  )}
                  {index === 2 && (
                    <p>
                      Tengo conocimientos en el desarrollo de proyectos web utilizando <strong>JavaScript</strong>, <strong>PHP</strong> y <strong>NodeJs</strong>. Además, tengo experiencia en la integración y <strong>consumo de datos provenientes de APIs</strong>, así como en el manejo de bases de datos  <strong>MySQL</strong>, lo que me permite crear aplicaciones dinámicas y conectadas a servicios externos de manera eficiente.
                    </p>
                  )}
                  {index === 3 && (
                    <p>
                      Poseo experiencia sólida en el desarrollo de proyectos web en frameworks como <strong>Angular (15 y versiones superiores)</strong>, <strong>React (18)</strong> y <strong>WordPress</strong>. Además, tengo conocimientos en el manejo de dependencias a través de <strong>NPM</strong>, lo que me permite construir aplicaciones robustas y escalables eficientemente. También tengo experiencia en la <strong>Modularización de proyectos</strong>.
                    </p>
                  )}
                  {index === 4 && (
                    <p>
                      Tengo experiencia sólida en el manejo de repositorios utilizando <strong>Git</strong>, lo que me permite gestionar eficientemente el control de versiones en proyectos de desarrollo. Además, cuento con habilidades profesionales en el uso de herramientas de gestión de proyectos como <strong>Atlassian</strong>, <strong>GitHub</strong> y <strong>GitLab</strong>, lo que facilita la colaboración y el seguimiento de tareas en equipos de trabajo distribuidos.
                    </p>
                  )}
                  {index === 5 && (
                    <p>
                      Tengo un dominio profesional en el uso de herramientas de diseño UI como <strong>Figma</strong>, <strong>Sketch</strong> y <strong>Adobe XD</strong>. Con más de 15 años de experiencia, también tengo un amplio conocimiento en el uso de software de diseño y edición de imágenes de la suite <strong>Creative Cloud</strong> de <strong>Adobe</strong>, lo que me permite crear y desarrollar proyectos visuales de alta calidad y precisión.
                    </p>
                  )}
                  {index === 6 && (
                    <p>
                      Cuento con más de 6 años de experiencia en el desarrollo de proyectos bajo <strong>Metodologías Ágiles</strong>, incluyendo <strong>Scrum</strong> y <strong>Kanban</strong>. Además, tengo experiencia práctica en el uso de herramientas de gestión como <strong>Jira</strong> y <strong>Trello</strong>, lo que me permite coordinar eficazmente equipos y proyectos en entornos ágiles.
                    </p>
                  )}
                  <hr className='separador-conocimientos' />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Conocimientos;