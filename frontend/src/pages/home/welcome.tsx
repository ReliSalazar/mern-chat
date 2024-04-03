import React from "react";
import MessageIcon from "../../icons/message";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <section className="flex-1 flex flex-col gap-4 items-center justify-center p-4">
      <MessageIcon className="w-16 h-16" />
      <h2 className="font-bold">Welcome to MERN Chat, <span className="text-primary">John Doe</span> 👋</h2>
      <p>Select a chat to start messaging</p>
    </section>
  );
};

export default Welcome;
