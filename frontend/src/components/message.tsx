import React from "react";
import { useAuthContext } from "../context/auth-context";
import useConversation from "../store/use-conversation";

interface MessageType {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSender = message.senderId === authUser?._id;

  return (
    <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={
              isSender
                ? authUser?.profilePicture
                : selectedConversation?.profilePicture
            }
          />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          isSender ? "chat-bubble-primary" : "chat-bubble-neutral"
        }`}
      >
        {message.message}
      </div>
    </div>
  );
};

export default Message;
