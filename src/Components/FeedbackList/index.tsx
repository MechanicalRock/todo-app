import { Stars } from "@mui/icons-material";
import { List, ListItem, Grid, Typography } from "@mui/material";
import React from "react";

export default function FeedbackList(props: any) {
  console.log(props.data);
  return (
    <>
      <Grid item xs={12}>
        <List
          sx={{
            width: "relative",
            maxWidth: "100vh",
            position: "relative",
            overflow: "auto",
            maxHeight: "100vh",
            "& ul": { padding: 0 },
          }}
        >
          {props.data
            ? props.data.map((item: any) => (
                <>
                  <ListItem key={item.id}>
                    <Grid container>
                      <Grid item xs={2}>
                        <Typography variant="body1">
                          <strong>{item.rating} </strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="body1">{item.reason}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </>
              ))
            : null}
        </List>
      </Grid>
    </>
  );
}
