import React, { useState } from "react";
import User from "../../components/user";
import Message from "../../components/message";
import ComposeMessage from "../../components/compose-message";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    console.log(newMessage);
    setNewMessage("");
  };

  return (
    <section className="pt-2 px-4 md:min-w-[450px] flex flex-col divide-y divide-neutral gap-2">
      <header>
        <h2 className="card-title">
          <User
            fullName="John Doe"
            profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
          />
        </h2>
      </header>
      <div className="flex-1 overflow-y-auto">
        <Message sender={false} />
        <Message sender={true} />
        <Message sender={false} />
      </div>
      <div className="py-2">
        <ComposeMessage
          value={newMessage}
          onChange={setNewMessage}
          onEnter={handleSendMessage}
        />
      </div>
    </section>
  );
};

export default Chat;
