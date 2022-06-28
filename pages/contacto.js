import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contacto = () => {
  return (
    <div className="container-estudio">
      <Nav />
      <div className="wrapper-acerca">
      <div></div>
        <div className="container-map">
          <img src="/map.jpg" alt="" />
        </div>
        <div className="color-container">
          <div className="text-box-contac">
            <div className="text-back">
              <h2>Mail: hn.mantenimiento.estudio @gmail.com</h2>
            </div>
            <div className="text-back">
              <h2>
                Tel: <br /> 11 5833-0897
              </h2>
            </div>
            <div className="text-back">
              <h2>
                Direccion: <br /> Maestro Santana 619, B1642 San Isidro,
                Provincia de Buenos Aires
              </h2>
            </div>
            <div className="iconos">
              <div className="text-back-icons">
                <a href="https://www.instagram.com/hnconstructora/?r=nametag">
                  <img src="/instagram-icone-noir.png" 
                  onMouseEnter={(e) => (e.currentTarget.src = '/instagram-icone-noir-white.png')}
                    onMouseLeave={(e) => (e.currentTarget.src = '/instagram-icone-noir.png')}
                  alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5401155238951&text=Hola%2C%20estoy%20aqu%C3%AD%20por%20">
                  <img src="/whatsapp1.png"
                    onMouseEnter={(e) => (e.currentTarget.src = '/whatsapp1-white.png')}
                    onMouseLeave={(e) => (e.currentTarget.src = '/whatsapp1.png')}
                  alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
