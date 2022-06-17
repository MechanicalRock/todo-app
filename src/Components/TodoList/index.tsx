import { Grid, Typography, Divider, Button } from "@mui/material";
import React from "react";

export default function TodoList(props: any) {
  console.log(props.data);
  return (
    <>
      <Grid container textAlign={"start"} rowSpacing={"32px"}>
        {props.data
          ? props.data.map((item: any) => (
              <>
                <Grid item xs={12} key={item.id}>
                  <Divider />
                  <Grid container spacing={4}>
                    <Grid item xs={8} key={item.id}>
                      <Typography variant="body1">{item.body}</Typography>
                    </Grid>
                    <Grid item xs={2} key={item.id}>
                      <Button variant="contained">
                        <Typography variant="body1">Delete</Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={2} key={item.id}>
                      <Button variant="contained">
                        <Typography variant="body1">Done</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ))
          : null}
      </Grid>
    </>
  );
}
