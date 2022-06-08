import { Stars } from "@mui/icons-material";
import { List, ListItem, Grid, Typography } from "@mui/material";
import React from "react";

export default function TodoList(props: any) {
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
                      <Grid item xs={12}>
                        <Typography variant="body1">{item.body}</Typography>
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
