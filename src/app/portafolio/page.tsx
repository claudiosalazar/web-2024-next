import Image from 'next/image';
import miBanco1 from '../assets/portafolio/mi-banco-1.jpg';
import miBanco2 from '../assets/portafolio/mi-banco-2.jpg';
import miBanco3 from '../assets/portafolio/mi-banco-3.jpg';
import miBanco4 from '../assets/portafolio/mi-banco-4.jpg';

function Portafolio () {
  return (
    <section className="info-portafolio portafolio row d-flex align-items-center">
      <div className="col-8 offset-2">
        <div className="row">
          <div className="col-4">
            <h1 className='mb-5'>Portafolio</h1>
            <ul>
              <li>
                <a href='#'>01</a>
              </li>
              <li>
                <a href='#'>02</a>
              </li>
              <li>
                <a href='#'>03</a>
              </li>
              <li>
                <a href='#'>04</a>
              </li>
            </ul>
          </div>

          <div className="col-8">
            <div>
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
            <h2 className='my-4'>Mi Banco</h2>
            <p>Descripcion</p>
            <a href="https://mi-banco.claudiosalazar.cl" target='new'>Ver Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;