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
  ref: React.RefObject<HTMLDivElement>;
}

const extractTime = (date: string) => {
  const dateObj = new Date(date);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const Message: React.FC<MessageProps> = ({ message, ref }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSender = message.senderId === authUser?._id;

  return (
    <div ref={ref} className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
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
      <div className="chat-footer opacity-50 text-xs">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
