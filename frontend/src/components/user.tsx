import React from "react";

interface UserProps {
  _id: string;
  fullName: string;
  profilePicture: string;
}

const User: React.FC<UserProps> = ({ fullName, profilePicture }) => {
  return (
    <button className="btn btn-outline btn-secondary w-full h-14 justify-start">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={profilePicture} />
        </div>
      </div>
      <p>{fullName}</p>
    </button>
  );
};

export default User;
