import ApolloClient from "apollo-boost";

const URI_DEV = "http://localhost:9090/posts";
const URI_PROD = "https://tech-website-backend.herokuapp.com/posts";
const ENV = process.env.NODE_ENV;

export const client = new ApolloClient({
  uri: ENV !== "production" ? URI_DEV : URI_PROD
});
console.log(ENV)