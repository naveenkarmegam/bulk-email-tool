import React from "react";
import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
import { useDispatch } from "react-redux";
import { logInSuccess } from "../../../redux/global/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const response = await axios.post(`/api/auth/login-with-google`, {
        token: result.user.accessToken,
      });
      if (response.status === 200) {
        dispatch(logInSuccess(response.data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error logIn with google ", error);
    }
  };
  return (
    <button
      className="btn btn-google btn-user btn-block text-white"
      type="button"
      onClick={logInWithGoogle}
    >
      <i className="bi bi-google" /> Login with Google
    </button>
  );
};

export default OAuth;
