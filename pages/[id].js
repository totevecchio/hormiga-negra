import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { productsEstudio, productsMantenimiento } from "../db";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Page = (context) => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    [...productsMantenimiento, ...productsEstudio].map((e) => {
      if (e.id == context.router.query.id) {
        setData(e.images);
        setImg(e.images[0]);
        setText(e.text);
      }
    });
  }, []);

  const handleChange = (e) => {
    setImg(e);
  };

  console.log(data);

  return (
    <div className="container">
      <Nav />
      <div className="container-id">
        <div className="photos-container">
          <div className="photos">
            <div className="big-photo">
              <img src={img} alt="" />
            </div>
            <div className="images">
              {data.map((e) => (
                <img
                  src={e}
                  width={200}
                  height={200}
                  alt="photo"
                  onClick={() => handleChange(e)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Page);
