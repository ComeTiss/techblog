import ApolloClient from "apollo-boost";

const URI_DEV = "http://localhost:9090/posts";
// const URI_PROD = "https://tech-website-backend.herokuapp.com/posts";

export const client = new ApolloClient({
  uri: URI_DEV
});
