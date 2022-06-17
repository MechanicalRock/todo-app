import { useLazyQuery, useMutation } from "@apollo/client";
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
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([{}]);
  const { user } = useGlobalUserContext();
  const token = user.signInUserSession.idToken.jwtToken;
  useEffect(() => {
    getTodos();
    console.log(token);
  }, []);

  const getTodos = () => {
    fetch(
      "https://siqmpph34k.execute-api.ap-southeast-2.amazonaws.com/dev/todos",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTodos(data.Items));
  };

  const saveTodo = () => {
    fetch(
      "https://siqmpph34k.execute-api.ap-southeast-2.amazonaws.com/dev/todo",
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: todo,
        }),
      }
    )
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  const deleteTodo = (id: string, createdAt: string) => {
    fetch(
      "https://siqmpph34k.execute-api.ap-southeast-2.amazonaws.com/dev/todo",
      {
        method: "DELETE",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          createdAt: createdAt,
        }),
      }
    )
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  const submit = () => {
    saveTodo();
    setLoading(true);
    saveTodo();
    setTodo("");
    getTodos();
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
      <>
        <Grid
          container
          sx={{ marginRight: "40px", marginLeft: "40px", marginTop: "60px" }}
        >
          <Grid item xs={12} textAlign={"center"}>
            {/* {false && (
              <Alert severity="error">
                Something went wrong, pleas try again later{" "}
              </Alert>
            )} */}
            <Typography variant="h4">To do:</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="body1">Wednesday 9th June 2022</Typography>
          </Grid>

          <Grid item xs={12} textAlign={"center"}>
            <TextField
              variant="outlined"
              label={"To do"}
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
          <Grid item xs={12} textAlign={"center"}>
            <TodoList data={todos} getTodos={getTodos} />
          </Grid>
          <Grid item xs={12} textAlign={"center"} padding={"20px"}></Grid>
        </Grid>
      </>

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
