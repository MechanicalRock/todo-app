import React from "react";
import { PUT_DATA } from "../GraphQL/mutations";
import { useMutation } from "@apollo/client";

export default function PutData() {
  const [saveFeedback, { error }] = useMutation(PUT_DATA);

  const addData = () => {
    saveFeedback({
      variables: {
        id: 2,
        rating: 10,
        reason: "Amazing Service",
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
