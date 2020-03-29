import React from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

function Logout() {
  const [cookies, setCookies] = useCookies();
  setCookies("token", null);
  setCookies("userId", null);

  return <Redirect to="/login" />;
}

export default Logout;
