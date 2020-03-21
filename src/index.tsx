import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import { client } from "./service/apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
