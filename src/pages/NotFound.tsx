import React from "react";
import Navigation from "../components/routes/Navigation";

function NotFound() {
  return (
    <>
      <Navigation linkPath="/login" linkTitle="Login" />
      <p>{"404 Page not found..."}</p>
    </>
  );
}

export default NotFound;
