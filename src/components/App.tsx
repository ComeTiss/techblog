import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../service/apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import routes from "../routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import store from "../store/store";
import { Provider } from "react-redux";
import { useCookies } from "react-cookie";

function isUserLoggedIn(cookies: any) {
  const userId: number = +cookies["userId"];
  return !!userId;
}

const Routes = (cookies: any) => {
  return routes.map(route =>
    route.protected ? (
      <ProtectedRoute
        isUserLoggedIn={isUserLoggedIn(cookies)}
        route={route}
        key={route.name}
      />
    ) : (
      <Route {...route} key={route.name} />
    )
  );
};

function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const clientApollo = client(cookies);
  return (
    <ApolloProvider client={clientApollo}>
      <Provider store={store}>
        <Router>
          <Switch>{Routes(cookies)}</Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
