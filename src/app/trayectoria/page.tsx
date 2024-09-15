'use client';

import { easeIn, motion, useAnimation, AnimatePresence } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";

function Trayectoria() {
  const controlTitulo = useAnimation();
  const controlResumen = useAnimation();
  const controlbotonCv = useAnimation();
  const controlContainerList = useAnimation();
  const controlItem = useAnimation();
  const controlFondoStrongAnho = useAnimation();
  const controlFondoItem = useAnimation();

  const titulo = {
    hidden: { 
      opacity: 0,
      x: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        easeIn,
        delay: .2,
        duration: .3
      }
    }
  };

  const resumen = {
    hidden: { 
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        easeIn,
        duration: .35
      }
    }
  };

  const botonCv = {
    hidden: { 
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        easeIn,
        duration: .35
      }
    }
  };
  
  const item = {
    hidden: { 
      y: 15, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const containerList = {
    hidden: { 
      opacity: 1 
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  const fondoItem = {
    hidden: { 
      scaleX: 0,
    },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.6,
      }
    }
  };

  useEffect(() => {
    const sequence = async () => {
      await controlTitulo.start("visible");
      await controlResumen.start("visible");
      await controlbotonCv.start("visible");
      await controlContainerList.start("visible");
      await controlItem.start("visible");
      await controlFondoItem.start("visible");
    };

    sequence();
  }, [controlTitulo, controlResumen, controlbotonCv, controlContainerList, controlItem, controlFondoItem]);

  useEffect(() => {
    // 1. Selecciona todos los elementos que tengan la clase `modal`.
    const modals = document.querySelectorAll('.modal');
  
    const observers: MutationObserver[] = [];
  
    // 2. Itera sobre cada modal encontrado.
    modals.forEach((modal) => {
      // 3. Para cada modal, crea un `MutationObserver`.
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const target = mutation.target as HTMLElement;
          }
        });
      });
  
      observer.observe(modal, { attributes: true });
      observers.push(observer);
    });
  
    // 5. Desconecta cada `MutationObserver` cuando el componente se desmonte.
    return () => observers.forEach(observer => observer.disconnect());
  }, []);


  return (
    <>
      <section className="info-trayectoria trayectoria row d-flex align-items-center">
        <div className="col-10 mx-auto py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-5 mb-md-0 me-md-5">
                <motion.h1 variants={titulo} initial="hidden" animate={controlTitulo} className="titulo my-5 mt-md-0 mb-md-5">Trayectoria</motion.h1>
                <motion.p variants={resumen} initial="hidden" animate={controlResumen} className="resumen mb-5">
                  Tengo más de 15 años de experiencia profesional en proyectos web. Desde 2017, he participado activamente en proyectos de transformación digital dentro de equipos multidisciplinarios, siempre trabajando bajo metodologías ágiles. En los últimos 7 años, he colaborado en proyectos para importantes entidades bancarias nacionales como Banco Estado, BCI e Itaú Chile. A lo largo de mi carrera, mi enfoque ha estado siempre centrado en la mejora continua de mis conocimientos en las últimas tecnologías para el desarrollo frontend.
                </motion.p>
                <motion.a variants={botonCv} initial="hidden" animate={controlbotonCv} className="botonCv curriculum" href="/claudio-salazar-cv2024.pdf" target="new">
                  <span className="me-2 ico-pdf"></span>
                  <span className="text-btn-cv">Descargar CV</span>
                </motion.a>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <motion.ul  className="mt-4 mt-md-0 ps-md-2 ps-lg-0 containerList" initial="hidden" variants={containerList} animate={controlContainerList}>
                {[0].map((index) => (
                  <React.Fragment key={index}>
                    <motion.li className="item" variants={item}></motion.li>
                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="nombre-empresa">
                            ITAU
                          </p>
                          <p>UI Developer</p>
                        </div>
                        <p className="duracion-trabajo text-end">
                          2021 - 2023
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>
                    
                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="nombre-empresa">
                            everis / NTT DATA
                          </p>
                          <p>UI Developer</p>
                        </div>
                        <p className="duracion-trabajo text-end">
                          2017 - 2021
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>

                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <span className="d-block">
                          <p className="nombre-empresa">
                            BBK Group
                          </p>
                          <p>Frontend / UX</p>
                        </span>
                        <p className="duracion-trabajo text-end">
                          2017
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>

                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <span className="d-block">
                          <p className="nombre-empresa">
                            MAYO Group
                          </p>
                          <p>Frontend / UX</p>
                        </span>
                        <p className="duracion-trabajo text-end">
                          2009 - 2016
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>

                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <span className="d-block">
                          <p className="nombre-empresa">
                            KITEKNOLOGY
                          </p>
                          <p>Frontend / UX</p>
                        </span>
                        <p className="duracion-trabajo text-end">
                          2008 - 2009
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>

                    <motion.li variants={item}>
                      <div className="d-flex justify-content-between">
                        <span className="d-block">
                          <p className="nombre-empresa">
                            NUESTRAGENCIA
                          </p>
                          <p>Frontend / UX</p>
                        </span>
                        <p className="duracion-trabajo text-end">
                          2004 - 2007
                        </p>
                      </div>
                      <motion.span className="fondoItem fondo-linea-trabajo" initial="hidden" variants={fondoItem} animate={controlFondoItem} />
                    </motion.li>

                  </React.Fragment>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modales trayectoria */}
      <div className="modal fade" id="modalItau" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>Desempeñé el rol de desarrollador web, colaborando estrechamente con el equipo de UX/UI para transformar diseños en código HTML. Mi trabajo se centró en el desarrollo de la interfaz del sitio privado del banco, asegurando que fuera responsive y cumpliendo con los estándares de calidad exigidos. Además, trabajé bajo metodologías ágiles, lo que facilitó la entrega iterativa y eficiente de funcionalidades clave. Esta experiencia me permitió fortalecer mis habilidades en desarrollo web y en la colaboración efectiva dentro de equipos multidisciplinarios.</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalEveris" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>Durante mi trayectoria en everis Chile, me desempeñé como desarrollador web especializado en la creación de HTML a partir de diseños proporcionados por el equipo UX. Utilicé principalmente Angular como framework para desarrollar interfaces de usuario, principalmente en proyectos para Banco Estado y BCI. Mi rol implicó asegurar la implementación efectiva de los diseños en soluciones web robustas y responsive, contribuyendo así al éxito y la calidad de los proyectos entregados. Esta experiencia consolidó mi habilidad para trabajar en entornos exigentes y multidisciplinarios.</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalBbk" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>En BBK Group, desempeñé un rol dual como Diseñador UX y Frontend Developer. Como diseñador UX, fui responsable de crear wireframes que guiaron el diseño y la funcionalidad de interfaces web centradas en la experiencia del usuario. Además, como desarrollador frontend, participé activamente en la implementación del sitio web enfocado en estrategias de marketing. Esta experiencia me permitió integrar mis habilidades creativas con sólidas capacidades técnicas.</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalMayo" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>Como Diseñador Web Senior y Productor Digital, lideré la creación y desarrollo frontend de minisitios, landing pages y campañas de email marketing. También gestioné la producción integral de campañas de marketing digital, incluyendo la creación de banners y emails promocionales. Mi enfoque se centró en combinar creatividad visual con funcionalidad técnica para optimizar la experiencia del usuario y maximizar el impacto de las estrategias digitales.</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalKi" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>Como Diseñador Web Senior, me especialicé en la creación de diseños UI y el desarrollo frontend de sitios corporativos construidos principalmente en PHP y ASP.net. Mi enfoque se centró en combinar un diseño visual atractivo con una funcionalidad robusta, asegurando una experiencia de usuario intuitiva y efectiva en entornos corporativos.Como Diseñador Web Senior, me especialicé en la creación de diseños UI y el desarrollo frontend de sitios corporativos construidos principalmente en PHP y ASP.net. Mi enfoque se centró en combinar un diseño visual atractivo con una funcionalidad robusta, asegurando una experiencia de usuario intuitiva y efectiva en entornos corporativos.</p>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalNuestragencia" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="cerrar-modal" data-bs-dismiss="modal" aria-label="Close">
              <div className='icono-cerrar'></div>
            </button>
            <p>Como Diseñador Gráfico Junior, lideré proyectos que incluyeron la creación de avisos de prensa, desarrollo de imagen corporativa y diseño de sitios web en HTML4 y Flash. Mi enfoque se centró en la combinación de creatividad visual con soluciones técnicas innovadoras para alcanzar los objetivos de comunicación visual de manera efectiva.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trayectoria;