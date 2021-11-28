import React, { useState } from "react";
import { staff } from "../db";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Staff = () => {
  return (
    <div className="container">
      <Nav />
      <div className="container-staff">
        <div className="list-staff">
          {staff.map((e) => (
            // eslint-disable-next-line react/jsx-key
            <div className="box-staff">
              <img src={e.img} width={200} height={200} alt="photo" />
              <p>{e.nombre}</p>
            </div>
          ))}
        </div>
        <div className="text-staff">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem
          fuga, numquam expedita obcaecati inventore! Quisquam ipsum officiis
          non odit perferendis! Veniam, nihil eum. Non qui fuga possimus nostrum
          quos!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
