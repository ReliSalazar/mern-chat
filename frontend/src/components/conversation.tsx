import React from "react";
import User from "./user";
import { useSocketContext } from "../context/socket-context";

interface UserType {
  _id: string;
  fullName: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

interface ConversationProps {
  loading: boolean;
  selectedConversation: UserType | null;
  setSelectedConversation: (conversation: UserType) => void;
  conversation: UserType;
}

const Conversation: React.FC<ConversationProps> = ({
  loading,
  conversation,
  selectedConversation,
  setSelectedConversation,
}) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (
    <button
      disabled={loading}
      className={`btn ${
        selectedConversation?._id === conversation._id
          ? "btn-outline btn-primary"
          : "btn-ghost"
      } w-full h-14 justify-start`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <User
        fullName={conversation.fullName}
        profilePicture={conversation.profilePicture}
        isOnline={isOnline}
      />
    </button>
  );
};

export default Conversation;
