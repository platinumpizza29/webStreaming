import React from "react";
import axios from "axios";
import {
  Button,
  Divider,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../components/navbar";
import Carousel from "react-elastic-carousel";
import { PostAddSharp } from "@mui/icons-material";

const baseURL = "http://192.168.1.136:4000/movieList";
const movieListURL = "http://192.168.1.136:4000/video";

export default function HomePage() {
  const [post, setPost] = React.useState(null);
  let navigate = useNavigate();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post);

  return (
    <div className="App">
      <Navbar />
      <div className="movieList">
        {post.map((p) => {
          return (
            <div key={p.ID} className="list">
              <Box className="image">
                <Paper
                  elevation={3}
                  className="img__img"
                  onClick={() => {
                    const name = p.Movie_Name;
                    axios.post(movieListURL, { name });
                    console.log(name);
                    navigate("/player");
                  }}
                >
                  <img src={p.Img_Url} id="paperImage" title={p.Movie_Name} />
                </Paper>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
}
