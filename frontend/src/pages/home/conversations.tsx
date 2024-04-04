import React from "react";
import User from "../../components/user";
import useGetConversations from "../../hooks/use-get-conversation";
import useConversation from "../../store/use-conversation";

interface ConversationsProps {}

const Conversations: React.FC<ConversationsProps> = () => {
  const { loading, conversations } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="flex-1 overflow-y-auto pt-2 flex flex-col gap-2">
      {loading && <span className="loading loading-spinner w-4 h-4" />}

      {conversations.map((conversation) => (
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
          />
        </button>
      ))}
    </div>
  );
};

export default Conversations;
