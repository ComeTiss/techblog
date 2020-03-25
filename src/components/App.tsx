import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../service/apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import routes from "../routes/routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          {routes.map(route => <Route {...route}/>)}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
