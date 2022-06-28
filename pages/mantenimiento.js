import { productsMantenimiento } from "../db";
import Products from "../components/Products";
import Nav from "../components/Nav";

const Mantenimiento = () => {
  return (
    <div className="container-mantenimiento">
      <Nav />
      <div className="wrapper">
        <Products products={productsMantenimiento} />
      </div>
    </div>
  );
};

export default Mantenimiento;
