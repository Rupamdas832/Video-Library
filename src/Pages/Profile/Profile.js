import React from "react";
import { useUser } from "../../Store";
import "./Profile.css";

export const Profile = () => {
  const { userState } = useUser();
  const { user } = userState;
  return (
    <div className="profileContainer">
      <p>
        Hii{" "}
        <span style={{ color: "var(--orange)" }}>
          {user.name.toUpperCase()}
        </span>
      </p>
      <div className="profileDetail">
        <div className="input">
          <label>Name</label>
          <input placeholder="Enter name" value={user.name} readOnly />
        </div>
        <div className="input">
          <label>Email</label>
          <input placeholder="Enter name" value={user.email} readOnly />
        </div>
      </div>
    </div>
  );
};
