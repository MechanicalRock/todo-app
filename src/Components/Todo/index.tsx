import { Button, Divider, Grid, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Todo(props: any) {
  const [edit, setEdit] = useState(false);
  const [editedBody, setEditedBody] = useState(props.item.body);
  return (
    <Grid item xs={12}>
      <Divider />
      {!edit ? (
        <Grid container rowSpacing={"16px"} columnSpacing={"16px"}>
          <Grid item xs={9}>
            <Typography variant="body1">{props.item.body}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained">
              <Typography
                variant="body1"
                onClick={() => {
                  props.deleteTodo(props.item.id, props.item.createdAt);
                }}
              >
                -
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              onClick={() => {
                setEdit(true);
              }}
            >
              <Typography variant="body1">Edit</Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained">
              <Typography variant="body1">Done</Typography>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container rowSpacing={"16px"} columnSpacing={"16px"}>
            <Grid item xs={9}>
              <TextField
                value={editedBody}
                onChange={(e) => {
                  setEditedBody(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained">
                <Typography
                  variant="body1"
                  onClick={() => {
                    props.deleteTodo(props.item.id, props.item.createdAt);
                  }}
                >
                  -
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                onClick={() => {
                  props.editTodo(props.item.id, editedBody);
                  setEdit(false);
                }}
              >
                <Typography variant="body1">Confirm Edit</Typography>
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained">
                <Typography variant="body1">Done</Typography>
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
