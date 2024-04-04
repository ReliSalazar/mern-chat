import React, { useEffect, useState } from "react";
import User from "../../components/user";
import Message from "../../components/message";
import ComposeMessage from "../../components/compose-message";
import { trim } from "../../utils";
import Welcome from "./welcome";
import useConversation from "../../store/use-conversation";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const handleSendMessage = () => {
    if (trim(newMessage) === "") return;
    console.log(newMessage);
    setNewMessage("");
  };

  if (!selectedConversation) {
    return <Welcome />;
  }

  return (
    <section className="pt-2 px-4 md:min-w-[450px] flex flex-col divide-y divide-neutral gap-2">
      <header>
        <h2 className="card-title">
          <User
            fullName={selectedConversation.fullName}
            profilePicture={selectedConversation.profilePicture}
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
