import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeedbackData from "../../Components/FeedbackData";
import FeedbackForm from "../../Components/FeedbackForm";
import FeedbackList from "../../Components/FeedbackList";
import { GET_DATA } from "../../GraphQL/queries";

export default function Admin() {
  const { error, data } = useQuery(GET_DATA);
  const [feedback, setFeedback] = useState([{}]);

  useEffect(() => {
    if (data) {
      setFeedback(data.getAllFeedback.feedback);
    }
    if (error) {
      console.log(error);
    }
  }, [data]);

  console.log(feedback);

  return (
    <>
      <Grid
        container
        sx={{ marginLeft: "40px", marginRight: "40px", marginTop: "360px" }}
      >
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            boxShadow={4}
            sx={{ minWidth: "10vw" }}
            spacing={"20px"}
          >
            <FeedbackData data={feedback} />
            <FeedbackList data={feedback} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </>
  );
}
