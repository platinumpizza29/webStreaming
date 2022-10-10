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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../components/navbar";

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
              <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
                <CardMedia
                  component="img"
                  height="140"
                  src={p.Img_Url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.Movie_Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.Description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => {
                      const name = p.Movie_Name;
                      axios.post(movieListURL, { name });
                      console.log(name);
                      navigate("/player");
                    }}
                  >
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
