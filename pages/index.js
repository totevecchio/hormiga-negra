import React, { useState, useEffect } from "react";
import video from "../images/hn2.mp4";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  const [videoFinished , setVideoFinished] = useState(false)
  
  return (
    <div className="container-home">
    {videoFinished && <Nav /> }
      <video className="home" autoPlay muted onEnded={() => setVideoFinished(true)}>
        <source src={video} type="video/mp4" id="video" />
      </video> 
      <div className="list"></div>
      {videoFinished && <Footer /> }
    </div>
  );
}
