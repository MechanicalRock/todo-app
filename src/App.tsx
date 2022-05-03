import React, { useEffect } from "react";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import GetData from "./GetData";
import PutData from "./PutData";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error ${message} `);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://nzbeyfg4inc75ptui6o3jtjkna.appsync-api.ap-southeast-2.amazonaws.com/graphql",
  }),
]);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-api-key": "da2-d3enmtsimvcfxjeodrksxz2bfq",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default function App() {
  // useEffect(() => {
  //   fetch(
  //     `https://nzbeyfg4inc75ptui6o3jtjkna.appsync-api.ap-southeast-2.amazonaws.com/graphql`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "x-api-key": "da2-d3enmtsimvcfxjeodrksxz2bfq",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query: '{getNote(NoteId: "1") {title, content}}',
  //         variables: null,
  //         operationsName: null,
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res.data));
  // }, []);

  return (
    <ApolloProvider client={client}>
      <PutData />
    </ApolloProvider>
  );
}
