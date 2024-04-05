import React from "react";

interface UserProps {
  fullName: string;
  profilePicture: string;
  isOnline?: boolean;
}

const User: React.FC<UserProps> = ({
  fullName,
  profilePicture,
  isOnline = false,
}) => {
  return (
    <>
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 rounded-full">
          <img src={profilePicture} />
        </div>
      </div>
      <p>{fullName}</p>
    </>
  );
};

export default User;
