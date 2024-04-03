import React from "react";
import User from "../../components/user";
import Message from "../../components/message";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  return (
    <section className="pt-2 px-4 col-span-2 flex flex-col divide-y divide-neutral gap-2">
      <header>
        <h2 className="card-title">
          <User
            fullName="John Doe"
            profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
          />
        </h2>
      </header>
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 py-2">
        <Message sender={false} />
        <Message sender={true} />
        <Message sender={false} />
      </div>
      <div>footer</div>
    </section>
  );
};

export default Chat;
