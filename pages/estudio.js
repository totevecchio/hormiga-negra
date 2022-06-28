import { productsEstudio } from "../db";
import Products from "../components/Products";
import Nav from "../components/Nav";

const Estudio = () => {
  return (
    <div className="container-estudio">
      <Nav />
      <div className="wrapper">
        <Products products={productsEstudio} />
      </div>
    </div>
  );
};

export default Estudio;
