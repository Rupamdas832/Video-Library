import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginModal.css";

export const LoginModal = ({ setIsLoginModalOpen, videoId }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="modal">
      {toggle && (
        <Navigate to="/login" state={{ from: `/video-detail/${videoId}` }} />
      )}
      <div className="modalBox">
        <h3>You are not Logged In</h3>
        <p>In order to save your videos, you have to first login.</p>
        <div className="isLoginBtns">
          <button
            className="btn outline"
            onClick={() => setIsLoginModalOpen(false)}
          >
            Cancel
          </button>
          <button className="btn" onClick={() => setToggle(true)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
