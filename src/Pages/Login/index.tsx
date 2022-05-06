import { useInput } from "@mui/base";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useGlobalUserContext } from "../../Components/context";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useGlobalUserContext();

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
  };

  return (
    <>
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        Sign in to an existing account
      </h1>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label={"Email"}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label={"Password"}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Login to Your Account
      </Button>
    </>
  );
}
