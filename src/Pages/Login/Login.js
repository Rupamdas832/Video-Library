import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toast } from "../../Components";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";

import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { state } = useLocation();
  const navigate = useNavigate();

  const { storeState, storeDispatch } = useStore();
  const { isLoading } = storeState;

  const { userDispatch } = useUser();

  const fetchVideoLibrary = async (user) => {
    try {
      const {
        data: { videoLibrary },
        status,
      } = await axios.get(`${URL}/video-library/${user._id}`);
      if (status === 200) {
        storeDispatch({ type: "LOAD_VIDEO_LIBRARY", payload: videoLibrary });
        localStorage.setItem(
          "VideoLoginUser",
          JSON.stringify({
            isUserLogin: true,
            userId: user._id,
            userName: user.name,
            userEmail: user.email,
            likedVideos: videoLibrary.likedVideos,
            watchLaterVideos: videoLibrary.watchLaterVideos,
            historyVideos: videoLibrary.historyVideos,
          })
        );
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const loginWithCredentials = async () => {
    storeDispatch({ type: "IS_LOADING", payload: "loggingIn" });
    try {
      const {
        data: { user },
        status,
      } = await axios.post(`${URL}/login`, {
        email: email,
        password: password,
      });
      if (status === 200) {
        userDispatch({ type: "LOAD_USER", payload: user });
        fetchVideoLibrary(user);
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };
  return (
    <div className="loginContainer">
      {isLoading === "loggingIn" ? (
        <Toast message="Authenticating Details..." />
      ) : null}
      <div className="formCard">
        <h1>Login</h1>
        <div className="formInput">
          <label>Email</label>
          <input
            placeholder="Type your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            placeholder="Type your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="formBtn" onClick={loginWithCredentials}>
          Login
        </button>
        {error && <p className="errorMessage">{error}</p>}
        <div className="redirectToSignup">
          <p>
            new to GradTube! <Link to="/signup"> Signup here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
