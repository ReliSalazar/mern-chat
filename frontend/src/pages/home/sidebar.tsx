import React, { useState } from "react";
import SearchInput from "../../components/search-input";
import LogoutIcon from "../../icons/logout";
import useLogOut from "../../hooks/use-log-out";
import Conversations from "./conversations";
import useConversation from "../../store/use-conversation";
import useGetConversations from "../../hooks/use-get-conversation";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [search, setSearch] = useState<string>("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const { loading, logOut } = useLogOut();

  const handleSearch = () => {
    if (search.trim() === "") return;
    const conversation = conversations.find(
      (conversation) =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
  };

  return (
    <div className="pt-2 px-4 flex flex-col divide-y divide-neutral gap-2">
      <SearchInput value={search} onChange={setSearch} onEnter={handleSearch} />
      <Conversations />
      <div className="flex items-center py-2">
        <button onClick={logOut} disabled={loading} className="btn w-full">
          {loading ? (
            <span className="loading loading-spinner w-4 h-4" />
          ) : (
            <LogoutIcon className="w-4 h-4" />
          )}
          <span className="mb-1">logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
