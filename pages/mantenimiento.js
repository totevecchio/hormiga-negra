import React, { useState } from "react";
import { productsMantenimiento } from "../db";
import Products from "../components/Products";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Mantenimiento = () => {
  return (
    <div className="container">
      <Nav />
      <Products products={productsMantenimiento} />
      <Footer />
    </div>
  );
};

export default Mantenimiento;
