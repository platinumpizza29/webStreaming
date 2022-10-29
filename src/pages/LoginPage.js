import { Typography, TextField, Button, Paper, Grid } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <div className="LoginPage">
      <Grid container spacing={2} className="grid1">
        <Grid item xs={6} className="side">
          <img src="LoginPage.jpeg" />
        </Grid>
        <Grid item xs={6} className="grid2">
          <Typography variant="h4">Welcome to Genensis</Typography>

          <TextField id="outlined-basic" label="Email" variant="outlined" />

          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/home");
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
