import React from "react";
import MessageIcon from "../../icons/message";
import { useAuthContext } from "../../context/auth-context";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const { authUser } = useAuthContext();

  return (
    <section className="flex-1 flex flex-col gap-4 items-center justify-center p-4">
      <MessageIcon className="w-16 h-16" />
      <h2 className="font-bold">
        Welcome to MERN Chat,{" "}
        <span className="text-primary">{authUser?.fullName}</span> 👋
      </h2>
      <p>Select a chat to start messaging</p>
    </section>
  );
};

export default Welcome;
