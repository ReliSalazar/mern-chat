import React from "react";
import useGetConversations from "../../hooks/use-get-conversation";
import useConversation from "../../store/use-conversation";
import Conversation from "../../components/conversation";

interface ConversationsProps {}

const Conversations: React.FC<ConversationsProps> = () => {
  const { loading, conversations } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="flex-1 overflow-y-auto pt-2 flex flex-col gap-2">
      {loading && <span className="loading loading-spinner w-4 h-4" />}

      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          loading={loading}
          conversation={conversation}
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />
      ))}
    </div>
  );
};

export default Conversations;
