import React from "react";

const ProfileModal = ({ isLoggedIn, onLogout, userData }) => {
  return (
    <div>
      {isLoggedIn && (
        <div className="profile-modal">
          <img src={userData?.avatar} alt="User Avatar" />
          <p>Name: {userData?.name}</p>
          <p>Email: {userData?.email}</p>

          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
