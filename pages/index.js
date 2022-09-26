import router from "next/router";
import { useEffect, useState } from "react";
import desktopVideo from "../images/hn2.mp4";
import mobileVideo from "../images/hnmobile.mp4"

export default function Index() {
  const [vid, setVideo] = useState()

  useEffect(() => { 
    window.innerWidth <= 800 || window.innerHeight <= 600 ? setVideo(mobileVideo) : setVideo(desktopVideo)
  },[])

  console.log(vid);

  return (
    <div className="container-home">
      {typeof window !== 'undefined' &&
      <video
        className="index-video"
        autoPlay
        muted
        onEnded={() => router.push("/home")}
      >
        <source src={window.innerWidth <= 800 || window.innerHeight <= 600 ? mobileVideo : desktopVideo} type="video/mp4" id="video" />
      </video>}
    </div>
  );
}
