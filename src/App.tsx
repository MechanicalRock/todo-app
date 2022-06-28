import { useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { UserContext } from "./Components/context";
import Pages from "./Pages";
import { Box } from "@mui/material";

export default function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Pages />
    </UserContext.Provider>
  );
}
