import React, { useEffect, useState } from "react";
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

// >>New - Configuring Auth Module
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error ${message} `);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://iifyruoomnh2niepkwubd6bcue.appsync-api.ap-southeast-2.amazonaws.com/graphql  ",
  }),
]);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key": "da2-atwwitd5fzflzdkq5r5y7hwsgm",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ user, setUser }}>
        <Pages />
      </UserContext.Provider>
    </ApolloProvider>
  );
}
