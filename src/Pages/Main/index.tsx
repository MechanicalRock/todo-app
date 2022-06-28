import { Box, Grid } from "@mui/material";
import React from "react";
import TodoForm from "../../Components/TodoForm";

export default function Main() {
  return (
    <Grid container sx={{ backgroundColor: "#38393A", height: "100vh" }}>
      <Grid container sx={{ marginTop: "120px" }} justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            boxShadow={4}
            spacing={"20px"}
            sx={{ background: "#131313" }}
          >
            <TodoForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
