import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn " onClick={() => loginWithRedirect()} style={{ padding: '3px', backgroundColor: ' #00ABB3', width: '14vh', color: '#fff', margin: '0.5rem' }}>Log in</button>;
};

export default LoginButton;