import router from "next/router";
import { useEffect, useState } from "react";
import video from "../images/hn2.mp4";

export default function Index() {
  // const [mobile, setMobile] =useState(true)
  // useEffect(() => {
  //   if (window.innerWidth <= 800 || window.innerHeight <= 600) {
  //     router.push('/home')
  //     console.log('mobile');
  //   } else {
  //     setMobile(false);
  //   }
  // }, []);

  return (
    <div className="container-home">
      <video
        className="index-video"
        autoPlay
        muted
        onEnded={() => router.push("/home")}
      >
        <source src={video} type="video/mp4" id="video" />
      </video>
    </div>
  );
}
