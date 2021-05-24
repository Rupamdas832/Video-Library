import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../Store";

export const Header = () => {
  const { userState, userDispatch } = useUser();
  const { user, isUserLogin } = userState;

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("VideoLoginUser");
    userDispatch({ type: "USER_LOGOUT" });
    navigate("/");
  };

  return (
    <div className="headerContainer">
      <div className="navbar ecommerce">
        <div className="navSearch ecommerce">
          <label>
            <FaSearch />
          </label>
          <input placeholder="Not working currently...WIP" />
        </div>
        <div className="navAction ecommerce">
          {isUserLogin && user ? (
            <div className="dropdown">
              <button className="btnFloat">
                {user.name.charAt(0).toUpperCase()}
              </button>
              <div className="dropdownContent">
                <ul>
                  <Link to="/profile" className="routerLink">
                    <li>Profile</li>
                  </Link>
                  <li onClick={() => logoutUser()}>Logout</li>
                </ul>
              </div>
            </div>
          ) : null}
          {!isUserLogin && (
            <Link to="/login">
              <button className="btn unstyled nav">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
