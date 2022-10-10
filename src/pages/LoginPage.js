import React from "react";
import "./LoginPage.css";
import { Grid } from "@mui/material";

export default function LoginPage() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item md={6} bgcolor="red">
          <h1>Grid 1</h1>
        </Grid>
        <Grid item md={6} bgcolor="cyan">
          <h1>Grid 2</h1>
        </Grid>
      </Grid>
    </div>
  );
}
