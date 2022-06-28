import {
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Todo(props: any) {
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(false);
  const [editedBody, setEditedBody] = useState("");
  useEffect(() => {
    setEditedBody(props.item.body);
  }, [props.item.body]);

  return (
    <Grid item xs={12}>
      {!edit ? (
        <Grid
          container
          rowSpacing={"16px"}
          columnSpacing={"16px"}
          sx={{ backgroundColor: "#252627" }}
        >
          <Grid item xs={9}>
            <Typography
              variant="body1"
              sx={{ textDecoration: done ? "line-through" : null }}
            >
              {props.item.body}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                props.deleteTodo(props.item.id, props.item.createdAt);
              }}
            >
              <DeleteForeverIcon color={"error"} />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                setEdit(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                setDone((prevState) => !prevState);
              }}
            >
              {!done ? (
                <CheckCircleIcon color={"success"} />
              ) : (
                <RemoveCircleIcon color={"success"} />
              )}
            </IconButton>
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

            <Grid item xs={2}>
              <IconButton
                onClick={() => {
                  props.editTodo(
                    props.item.id,
                    props.item.createdAt,
                    editedBody
                  );
                  setEditedBody(props.item.body);
                  setEdit(false);
                }}
              >
                <CheckCircleIcon color={"success"} />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                onClick={() => {
                  setEdit(false);
                }}
              >
                <CloseIcon color={"error"} />
              </IconButton>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
