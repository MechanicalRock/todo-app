import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useGlobalUserContext } from "../context";
import TodoList from "../TodoList";
import toast, { Toaster } from "react-hot-toast";

export default function FeedbackForm() {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([{}]);
  const { user, setUser } = useGlobalUserContext();
  const [token, setToken] = useState("");
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  useEffect(() => {
    if (user) {
      setToken(user.signInUserSession.idToken.jwtToken);
      getTodos();
    }
  }, [user, token]);

  const errorMessage = () => {
    toast.error("Something went wrong, please try again later");
  };

  const deleteMessage = () => {
    toast.error("Todo Deleted");
  };
  const successMessage = (successMessage: string) => {
    toast.success(successMessage);
  };

  const getTodos = () => {
    token &&
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
    token &&
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
            done: false,
          }),
        }
      )
        .then((res) => res.json())
        .then((message) => {
          message === "Todo created" ? successMessage(message) : errorMessage();
          getTodos();
        });
  };

  const deleteTodo = (id: string, createdAt: string) => {
    token &&
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
        .then((message) => {
          message === "Deleted" ? deleteMessage() : errorMessage();
          getTodos();
        })
        .catch((err) => console.log(err));
  };

  const editTodo = (id: string, createdAt: string, editedTodo: string) => {
    token &&
      fetch(
        "https://siqmpph34k.execute-api.ap-southeast-2.amazonaws.com/dev/todo",
        {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            createdAt: createdAt,
            body: editedTodo,
          }),
        }
      )
        .then((res) => res.json())
        .then((message) => {
          message === "Changed Todo" ? successMessage(message) : errorMessage();
          getTodos();
        });
  };

  const completeTodo = (
    id: string,
    createdAt: string,
    body: string,
    done: boolean
  ) => {
    token &&
      fetch(
        "https://siqmpph34k.execute-api.ap-southeast-2.amazonaws.com/dev/todo",
        {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            createdAt: createdAt,
            body: body,
            done: done,
          }),
        }
      )
        .then((res) => res.json())
        .then((message) => {
          message = !"Changed Todo" ? errorMessage() : null;
          getTodos();
        });
  };

  const submit = () => {
    setLoading(true);
    saveTodo();
    setTodo("");
    setLoading(false);
  };

  async function signOut() {
    try {
      await Auth.signOut();
      setUser(null);
      window.localStorage.setItem("auth", "false");
      window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <>
      <Toaster />
      <>
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
          <Button onClick={signOut} color={"error"}>
            Sign Out
          </Button>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h2">Today I need to:</Typography>
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
            <Button
              variant="contained"
              onClick={submit}
              sx={{
                borderRadius: "8px",
                background: "#0277bd",
              }}
            >
              Add Todo
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"} sx={{ padding: "12px" }}>
            <TodoList
              data={todos}
              getTodos={getTodos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              completeTodo={completeTodo}
            />
          </Grid>
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
