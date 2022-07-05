import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
// import { auth, provider, signInWithPopup } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  // const auth = getAuth();
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
          alt=""
        />
        <h2>Sign in to slack </h2>
        <Button onClick={signIn}>Sign in with google </Button>
      </div>
    </div>
  );
}

export default Login;
