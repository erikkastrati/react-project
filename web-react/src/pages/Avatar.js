import React from "react";
import defaultAvatar from "../assets/image/profile-avatar.jpg";
import "..//../src/pages/Avatar.css";

const Avatar = ({ userAvatar }) => {
  console.log("avatar rendering");
  return (
    <div className="avatar">
      <img src={userAvatar} alt="User Avatar" className="avatar" />
    </div>
  );
};

export default Avatar;
