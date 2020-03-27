import React from "react";
import GoogleLogin from "react-google-login";

type Props = {
  onLoginSuccess: (data: any) => void;
  onLoginFailure: () => void;
};

function GoogleAuth(props: Props) {
  const { onLoginSuccess, onLoginFailure } = props;
  return (
    <GoogleLogin
      clientId="388587644587-ji93ua9275faiuh6edf8g49c1v2umf1q.apps.googleusercontent.com"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
    />
  );
}

export default GoogleAuth;
