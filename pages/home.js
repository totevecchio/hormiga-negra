import React from "react";
import video2 from "../images/video2.mp4";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="container-home">
      <Nav />
      <video
        className="home"
        autoPlay={true}
        muted
        loop
        onEnded={() => setVideoFinished(true)}
      >
        <source src={video2} type="video/mp4" id="video" />
      </video>
      <Footer />
      </div>
    </>
  );
};

export default Home;
