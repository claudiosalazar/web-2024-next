'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import miBanco1 from '../assets/portafolio/mi-banco-1.jpg';
import miBanco2 from '../assets/portafolio/mi-banco-2.jpg';
import miBanco3 from '../assets/portafolio/mi-banco-3.jpg';
import miBanco4 from '../assets/portafolio/mi-banco-4.jpg';

function Portafolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="info-portafolio portafolio row d-flex align-items-center">
      <div className='row'>
        <div className='col-6 mx-auto'>
          <div className='row'>
            <div className='col-1 d-flex flex-column justify-content-center'>
              <ul className="carousel-portafolio-controls">
                {['01', '02', '03', '04'].map((index) => (
                  <li key={index} className='d-block'>
                    <a href="#" onClick={() => handleSelect(Number(index) - 1)}>{index}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-11 mx-auto">
              <div className="carousel-portafolio-container">
                <div className="carousel-portafolio-viewport">
                  <ul className="carousel-portafolio-list" style={{ transform: `translateY(-${activeIndex * 500}px)` }}>
                    <li key={0} className="carousel-portafolio-item">
                      <div className='card'>
                        <div className='container-fluid p-0'>
                          <div className='row m-0 p-0'>
                            <div className='col-3'>
                              <h2>Mi Banco</h2>
                              <p>Descripción de la imagen 1</p>
                              <p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                              </p>
                            </div>
                            <div className='col-9 p-0'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li key={1} className="carousel-portafolio-item">
                    <div className='card'>
                        <div className='container-fluid p-0'>
                          <div className='row m-0 p-0'>
                            <div className='col-3'>
                              <h2>Proyecto 2</h2>
                              <p>Descripción de la imagen 1</p>
                              <p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                              </p>
                            </div>
                            <div className='col-9 p-0'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li key={2} className="carousel-portafolio-item">
                    <div className='card'>
                        <div className='container-fluid p-0'>
                          <div className='row m-0 p-0'>
                            <div className='col-3'>
                              <h2>Proyecto 3</h2>
                              <p>Descripción de la imagen 1</p>
                              <p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                              </p>
                            </div>
                            <div className='col-9 p-0'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li key={3} className="carousel-portafolio-item">
                    <div className='card'>
                        <div className='container-fluid p-0'>
                          <div className='row m-0 p-0'>
                            <div className='col-3'>
                              <h2>Proyecto 4</h2>
                              <p>Descripción de la imagen 1</p>
                              <p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                              </p>
                            </div>
                            <div className='col-9 p-0'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <Image src={miBanco1} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco2} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco3} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                                <div className="carousel-item">
                                  <Image src={miBanco4} className="ico-conocimientos img-fluid" alt="HTML 5" title="HTML 5" />
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;