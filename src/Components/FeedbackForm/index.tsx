import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PUT_DATA } from "../../GraphQL/mutations";
import { GET_DATA } from "../../GraphQL/queries";
import { useGlobalUserContext } from "../context";
import TodoList from "../TodoList";

export default function FeedbackForm() {
  const [todo, setTodo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saveTodo] = useMutation(PUT_DATA);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([{}]);
  const { user } = useGlobalUserContext();
  const { data, error } = useQuery(GET_DATA);

  const getTodos = () => {
    if (data) {
      setTodos(data.getAllTodos.todos);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [data]);

  const submit = () => {
    setLoading(true);
    saveTodo({
      variables: {
        body: todo,
      },
    });
    if (error) {
      console.log(error);
    } else {
      setLoading(false);
      setSubmitted(true);
      getTodos();
      setTodo("");
    }
  };

  // async function signOut() {
  //   try {
  //     await Auth.signOut();
  //     setUser(null);
  //   } catch (error) {
  //     console.log("error signing out: ", error);
  //   }
  // }

  return (
    <>
      {!submitted && (
        <>
          <Grid item xs={12} textAlign={"center"}>
            {error && (
              <Alert severity="error">
                Something went wrong, pleas try again later{" "}
              </Alert>
            )}
            <Typography variant="h4">To do:</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="body1">Wednesday 9th June 2022</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <TodoList data={todos} />
          </Grid>

          <Grid item xs={12} textAlign={"center"}>
            <TextField
              variant="outlined"
              label={"Reason for response"}
              sx={{ width: "70%" }}
              value={todo}
              onChange={(event) => {
                setTodo(event?.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} textAlign={"center"} padding={"20px"}>
            <Button variant="contained" onClick={submit}>
              <Typography variant="body1">Add Todo</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"} padding={"20px"}></Grid>
        </>
      )}

      {loading && (
        <>
          <Grid item xs={12} textAlign={"center"}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </Grid>
        </>
      )}
    </>
  );
}
