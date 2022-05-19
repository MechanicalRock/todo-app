import { useInput } from "@mui/base";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalUserContext } from "../../Components/context";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useGlobalUserContext();

  const handleSubmit = async (e: any) => {
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    // const newpassword = await Auth.completeNewPassword(user, password);
  };

  return (
    <>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item xs={12} textAlign={"center"}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          sx={{ width: "75%" }}
        />
      </Grid>

      <Grid item xs={12} textAlign={"center"}>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
          sx={{ width: "75%" }}
        />
      </Grid>

      <Grid item xs={12} textAlign={"center"} sx={{ paddingBottom: "16px" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={handleSubmit}
        >
          <Typography variant="body1">Login</Typography>
        </Button>
      </Grid>
    </>
  );
}
