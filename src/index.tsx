import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./service/apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
