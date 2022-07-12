import { Grid } from "@mui/material";

import Todo from "../Todo";

export default function TodoList(props: any) {
  return (
    <>
      <Grid container textAlign={"start"} rowSpacing={"32px"}>
        {props.data
          ? props.data.map((item: any) => (
              <>
                <Todo
                  item={item}
                  deleteTodo={props.deleteTodo}
                  editTodo={props.editTodo}
                  getTodos={props.getTodos}
                  completeTodo={props.completeTodo}
                />
              </>
            ))
          : null}
      </Grid>
    </>
  );
}
