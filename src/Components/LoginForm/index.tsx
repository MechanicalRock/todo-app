import { Button, Grid, TextField, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useGlobalUserContext } from "../../Components/context";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useGlobalUserContext();

  const handleSubmit = async (e: any) => {
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      toast.success("Signing you in!");
      console.log(user);
      setUser(user);
    } catch (error: any) {
      console.log(error);
      toast.error("username and password invalid");
    }
    setLoading(false);
    // const newpassword = await Auth.completeNewPassword(user, password);
  };
  return (
    <>
      <Toaster />
      <Grid
        container
        sx={{
          marginRight: "40px",
          marginLeft: "40px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        spacing={3}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2">Login</Typography>
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
