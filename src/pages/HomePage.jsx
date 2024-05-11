import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const HomePage = () => {

  const imageUrl2 = 'https://i.ibb.co/g96DVxG/web.jpg';
  const imageUrl = 'https://i.ibb.co/ydS2HvC/Copia-de-Dise-o-sin-t-tulo.png';
  /* const imageUrl3 = 'https://i.ibb.co/W3VHJsk/Flyer-Clases-Particulares-Llamativo-Naranja-2.png' */
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-50 mt-5">
      <Link to="/info" className="btn btn-primary">Informacion</Link>
      
      <Link to="/imagenes" className="btn btn-primary">Imagenes</Link>

      <Link to="/contacto" className="btn btn-primary">Contacto</Link>
      
      <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageUrl} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={imageUrl2} className="d-block w-100" alt="Slide 2" />
          </div>
          {/* <div className="carousel-item">
            <img src={imageUrl3} className="d-block w-100" alt="Slide 3" />
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Link to="/Create" className="btn btn-primary">Me quiero registrar</Link>
    </div>
  );
}

export default HomePage;