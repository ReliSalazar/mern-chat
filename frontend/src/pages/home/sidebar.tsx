import React, { useState } from "react";
import SearchInput from "../../components/search-input";
import LogoutIcon from "../../icons/logout";
import useLogOut from "../../hooks/use-log-out";
import Conversations from "./conversations";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [value, setValue] = useState<string>("");
  const { loading, logOut } = useLogOut();

  const handleSearch = () => {
    console.log(value);
  };

  return (
    <div className="pt-2 px-4 flex flex-col divide-y divide-neutral gap-2">
      <SearchInput value={value} onChange={setValue} onEnter={handleSearch} />
      <Conversations />
      <div className="flex items-center py-2">
        <button onClick={logOut} disabled={loading} className="btn w-full">
          {loading ? <span className="loading loading-spinner w-4 h-4" /> : <LogoutIcon className="w-4 h-4" />}
          <span className="mb-1">logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
