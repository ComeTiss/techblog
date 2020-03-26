import ApolloClient from "apollo-boost";

const URI_DEV = "http://localhost:9090/graphql";
const URI_PROD = "https://tech-website-backend.herokuapp.com/graphql";
const target_uri = process.env.NODE_ENV === "production" ? URI_PROD : URI_DEV;

export const client = new ApolloClient({
  uri: target_uri
});
