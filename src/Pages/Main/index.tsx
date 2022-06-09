import { Grid } from "@mui/material";
import React from "react";
import FeedbackForm from "../../Components/FeedbackForm";

export default function Main() {
  return (
    <>
      <Grid container sx={{ marginTop: "120px" }}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            boxShadow={4}
            // sx={{ margin: "0 40px 0 40px" }}
            spacing={"20px"}
          >
            <FeedbackForm />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </>
  );
}
