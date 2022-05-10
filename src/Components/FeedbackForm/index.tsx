import { useMutation } from "@apollo/client";
import { ThumbUp } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { PUT_DATA } from "../../GraphQL/mutations";
import { useGlobalUserContext } from "../context";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saveFeedback, { error }] = useMutation(PUT_DATA);
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useGlobalUserContext();

  console.log(user);

  const handleSubmit = () => {
    setLoading(true);
    saveFeedback({
      variables: {
        rating: rating,
        reason: reason,
      },
    });
    if (error) {
      console.log(error);
    } else {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleClick = (event: { target: any }) => {
    setRating(event.target.value);
  };

  async function signOut() {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <>
      {!submitted && (
        <>
          <Grid item xs={12} textAlign={"center"}>
            {error && (
              <Alert severity="error">
                Something went wrong, pleas try again later{" "}
              </Alert>
            )}
            <Typography variant="h4">How did we do?</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="body1">
              How likely are you to recommend us to a friend or colleague?
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button value={1} onClick={handleClick}>
                1
              </Button>
              <Button value={2} onClick={handleClick}>
                2
              </Button>
              <Button value={3} onClick={handleClick}>
                3
              </Button>
              <Button value={4} onClick={handleClick}>
                4
              </Button>
              <Button value={5} onClick={handleClick}>
                5
              </Button>
              <Button value={6} onClick={handleClick}>
                6
              </Button>
              <Button value={7} onClick={handleClick}>
                7
              </Button>
              <Button value={8} onClick={handleClick}>
                8
              </Button>
              <Button value={9} onClick={handleClick}>
                9
              </Button>
              <Button value={10} onClick={handleClick}>
                10
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12} textAlign={"center"}>
            <TextField
              variant="outlined"
              label={"Reason for response"}
              sx={{ width: "70%" }}
              value={reason}
              onChange={(event) => {
                setReason(event?.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} textAlign={"center"} padding={"20px"}>
            <Button variant="contained" onClick={handleSubmit}>
              <Typography variant="body1">Submit</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"} padding={"20px"}>
            {/* <Button variant="contained" onClick={signOut}>
              <Typography variant="body1">Sign out</Typography>
            </Button> */}
          </Grid>
        </>
      )}
      {submitted && (
        <>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h4">Thanking you!</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="body1">
              Thanks for your feedback, you may now close this window.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <ThumbUp fontSize="large" color="success" />
          </Grid>
        </>
      )}
      {loading && (
        <>
          <Grid item xs={12} textAlign={"center"}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </Grid>
        </>
      )}
    </>
  );
}
