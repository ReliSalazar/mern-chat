import React, { useState } from "react";
import SearchInput from "../../components/search-input";
import LogoutIcon from "../../icons/logout";
import User from "../../components/user";
import useLogOut from "../../hooks/use-log-out";

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
      <div className="flex-1 overflow-y-auto pt-2 flex flex-col gap-2">
        <button className="btn btn-outline btn-primary w-full h-14 justify-start">
          <User
            fullName="John Doe"
            profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
          />
        </button>
        <button className="btn btn-outline btn-primary w-full h-14 justify-start">
          <User
            fullName="John Doe"
            profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
          />
        </button>
      </div>
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
