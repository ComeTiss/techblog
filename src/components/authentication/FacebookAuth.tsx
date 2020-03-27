import React from "react";
import FacebookLogin from "react-facebook-login";

type Props = {
  onLoginSuccess: (data: any) => void;
  onLoginFailure: () => void;
};

function FacebookAuth(props: Props) {
  const { onLoginSuccess, onLoginFailure } = props;
  return (
    <FacebookLogin
      appId="499174550757102"
      fields="name, email, picture"
      callback={onLoginSuccess}
      onFailure={onLoginFailure}
      size="medium"
      cookie={true}
    />
  );
}

export default FacebookAuth;
