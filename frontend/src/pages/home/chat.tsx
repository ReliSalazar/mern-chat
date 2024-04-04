import React, { useEffect, useState } from "react";
import User from "../../components/user";
import Message from "../../components/message";
import ComposeMessage from "../../components/compose-message";
import Welcome from "./welcome";
import useConversation from "../../store/use-conversation";
import useSendMessage from "../../hooks/use-send-message";
import useGetMessages from "../../hooks/use-get-messages";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { loading, sendMessage } = useSendMessage();
  const { loading: messageLoading, messages } = useGetMessages();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    sendMessage(newMessage);
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
        {messages.length === 0 && (
          <p className="text-center">Send a message to start a conversation</p>
        )}

        {messageLoading ? (
          <span className="loading loading-spinner w-4 h-4" />
        ) : (
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))
        )}
      </div>
      <div className="py-2">
        <ComposeMessage
          value={newMessage}
          onChange={setNewMessage}
          onEnter={handleSendMessage}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Chat;
