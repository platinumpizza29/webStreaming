import React from "react";
import "./videoPlayer.css";

export default function VideoPlayer() {
  return (
    <div className="App">
      <video id="player" controls autoPlay>
        <source src="http://192.168.1.136:4000/video" type="video/mp4" />
      </video>
    </div>
  );
}
