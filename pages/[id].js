import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { productsEstudio, productsMantenimiento } from "../db";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Page = (context) => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [backgroundClass, setbackgroundClass] = useState([]);

  useEffect(() => {
    [...productsMantenimiento, ...productsEstudio].map((e) => {
      if (e.id == context.router.query.id) {
        setData(e.images);
        setTitle(e.name.toUpperCase());
        setImg(e.images[0]);
        setText(e.text);
        setbackgroundClass(e.backgroundImg);
      }
    });
  }, [context]);

  const handleChange = (e) => {
    setImg(e);
  };

  console.log(data);

  return (
    <div className={backgroundClass}>
      <Nav />
      <div className="container-id">
        <div className="photos-container">
          <div className="photos">
            <div className="big-photo">
              <div className="titulo">{title}</div>
              {data.map((e, i) => (
                <img
                  key={i}
                  src={e}
                  width={200}
                  height={200}
                  alt="photo"
                  onClick={() => handleChange(e)}
                  className="small-img"
                />
              ))}
            </div>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Page);
