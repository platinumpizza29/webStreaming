import React from "react";
import "./videoPlayer.css";
import Navbar from "../components/navbar";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Paper,
} from "@mui/material";

export default function VideoPlayer() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="videoPlayer">
        <video id="player" controls autoPlay>
          <source src="http://192.168.1.136:4000/video" type="video/mp4" />
        </video>
        <Paper
          elevation={3}
          className="descriptionCard"
          style={{ backgroundColor: "red" }}
        ></Paper>
      </div>
    </div>
  );
}
