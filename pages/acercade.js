import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Staff = () => {
  return (
    <div className="container-acercade">
      <Nav />
      <div className="container-staff">
        <div className="list-staff">
          <h2>10 AÑOS QUE AVALAN NUESTRA EXPERIENCIA</h2>
          <p>
            Desde el año 2010 brindamos Servicios de Mantenimiento Integral en
            edificios centrales de entidades bancarias, industria alimenticia y
            comercios. Desde hace 2 años estamos ampliando nuestra gama de
            servicios, incorporando el concepto de Integral Green Facility
            sumando a nuestras actividades todo lo relacionado con Energías
            Renovables.
          </p>
        </div>
        <div className="text-staff">
          <h2>NOSOTROS NOS OCUPAMOS</h2>
          <p>
            Los Recursos Humanos son nuestro principal activo, HN esta formada
            por un equipo de Ingenieros, Arquitectos, Técnicos y personal
            capacitado para realizar los distintos tipos de mantenimiento que tu
            empresa necesita. Descansa en nosotros, te brindaremos el mejor
            servicio en relación costo-beneficio. Contamos con un equipo
            vinculado durante más de 30 años en el rubro Energía y un
            departamento especifico sobre Ingeniería en Seguridad e Higiene. ​
            <br />
            CONFIAR EN HN ES CONFIAR EN NOSOTROS.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
