import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_DATA } from "../../GraphQL/queries";

export default function FeedbackData(props: any) {
  return (
    <>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="body1">NPS:</Typography>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="h4">9.8</Typography>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="body1">Responses:</Typography>{" "}
        <Typography variant="h4">7</Typography>{" "}
      </Grid>
      <Grid item xs={12} textAlign={"center"}></Grid>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="body1"></Typography>
      </Grid>
    </>
  );
}
