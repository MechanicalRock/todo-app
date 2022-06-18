import { Grid } from "@mui/material";

import LoginForm from "../../Components/LoginForm";

export default function Login() {
  return (
    <>
      <Grid
        container
        sx={{
          marginLeft: "40px",
          marginRight: "40px",
          marginTop: "360px",
        }}
      >
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            boxShadow={4}
            sx={{ minWidth: "10vw" }}
            spacing={"20px"}
          >
            <LoginForm />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </>
  );
}
