import React from "react";
import { PUT_DATA } from "../GraphQL/mutations";
import { useMutation } from "@apollo/client";

export default function PutData() {
  const [saveNote, { error }] = useMutation(PUT_DATA);

  const addData = () => {
    saveNote({
      variables: {
        NoteId: 101,
        title: "Another test",
        content: "Another content",
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={addData}>Add Data</button>
    </>
  );
}
