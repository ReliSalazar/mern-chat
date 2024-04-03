import React from "react";

interface UserProps {
  fullName: string;
  profilePicture: string;
}

const User: React.FC<UserProps> = ({ fullName, profilePicture }) => {
  return (
    <>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={profilePicture} />
        </div>
      </div>
      <p>{fullName}</p>
    </>
  );
};

export default User;
