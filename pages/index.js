import React, { useState } from "react";
import video from "../images/video.mp4";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-home">
      <Nav />
      <video className="home" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video> 
      <div className="list"></div>
      <Footer />
    </div>
  );
}
