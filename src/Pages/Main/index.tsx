import { Grid } from "@mui/material";
import React from "react";
import FeedbackForm from "../../Components/FeedbackForm";

export default function Main() {
  return (
    <>
      <Grid
        container
        sx={{ marginLeft: "40px", marginRight: "40px", marginTop: "120px" }}
      >
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            boxShadow={4}
            sx={{ minWidth: "10vw" }}
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
