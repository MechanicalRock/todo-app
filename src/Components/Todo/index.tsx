import { Grid, Typography, TextField, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import toast from "react-hot-toast";

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
          sx={{
            backgroundColor: "#38393A",
            borderRadius: "12px",
            padding: "0px 4px 12px 4px",
          }}
        >
          <Grid item xs={9}>
            <Typography
              variant="h4"
              sx={{ textDecoration: props.item.done ? "line-through" : null }}
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
              <DeleteForeverOutlinedIcon
                color={"error"}
                sx={{
                  marginTop: "-6px",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                setEdit(true);
              }}
            >
              <EditIcon
                sx={{
                  marginTop: "-6px",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                if (props.item.done) {
                  props.completeTodo(
                    props.item.id,
                    props.item.createdAt,
                    props.item.body,
                    false
                  );
                } else {
                  props.completeTodo(
                    props.item.id,
                    props.item.createdAt,
                    props.item.body,
                    true
                  );
                  toast.success("Nice Work!");
                }
              }}
            >
              {!props.item.done ? (
                <CheckCircleOutlineOutlinedIcon
                  sx={{
                    margin: "-6px",
                    color: "#0277bd",
                    fontSize: "28px",
                  }}
                />
              ) : (
                <CheckCircleIcon
                  sx={{
                    marginTop: "-6px",
                    color: "#0277bd",
                    fontSize: "28px",
                  }}
                />
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
