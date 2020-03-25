import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../service/apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import routes from "../routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";

const Routes = routes.map(route =>
  route.protected ? (
    <ProtectedRoute isUserLoggedIn={true} route={route} key={route.name} />
  ) : (
    <Route {...route} key={route.name} />
  )
);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>{Routes}</Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
