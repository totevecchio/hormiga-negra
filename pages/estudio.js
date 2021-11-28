import React, { useState } from "react";
import { productsEstudio } from "../db";
import Products from "../components/Products";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Estudio = () => {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <Products products={productsEstudio} />
      </div>
      <Footer />
    </div>
  );
};

export default Estudio;
