import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../GraphQL/queries";

export default function GetData() {
  const { error, loading, data } = useQuery(GET_DATA);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
}
