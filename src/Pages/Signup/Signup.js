import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Toast } from "../../Components";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";

import "./Signup.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const { userDispatch } = useUser();

  const { storeState, storeDispatch } = useStore();
  const { isLoading } = storeState;

  const fetchVideoLibrary = async (user, token) => {
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
            token: token,
            userId: user._id,
            userName: user.name,
            userEmail: user.email,
            likedVideos: videoLibrary.likedVideos,
            watchLaterVideos: videoLibrary.watchLaterVideos,
            historyVideos: videoLibrary.historyVideos,
            playlist: videoLibrary.playlist,
          })
        );
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const signUpUser = async () => {
    storeDispatch({ type: "IS_LOADING", payload: "signup" });
    try {
      const {
        data: { user, token },
        status,
      } = await axios.post(`${URL}/signup`, {
        name: name,
        email: email,
        password: password,
      });
      if (status === 201) {
        userDispatch({ type: "LOAD_USER", payload: { user, token } });
        fetchVideoLibrary(user, token);
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };
  return (
    <div className="signupContainer">
      {isLoading === "signup" ? <Toast message="Signing up..." /> : null}
      <div className="formCard">
        <h1>Signup</h1>
        <div className="formInput">
          <label>Name</label>
          <input
            placeholder="Type your name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        {error && <p className="errorMessage">{error}</p>}
        <button className="formBtn" onClick={signUpUser}>
          Signup
        </button>
        <div className="redirectToSignup">
          <p>
            already have an account. <Link to="/login"> Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
