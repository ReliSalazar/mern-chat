import React, { useState } from "react";
import SearchInput from "../../components/search-input";
import LogoutIcon from "../../icons/logout";
import User from "../../components/user";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    console.log(value);
  };

  return (
    <div className="pt-2 px-4 flex flex-col divide-y divide-primary gap-2">
      <SearchInput value={value} onChange={setValue} onEnter={handleSearch} />
      <div className="flex-1 pt-2 flex flex-col gap-2">
        <User
          _id="1"
          fullName="John Doe"
          profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
        />
        <User
          _id="1"
          fullName="John Doe"
          profilePicture="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
        />
      </div>
      <div className="flex items-center py-4">
        <button className="btn w-full">
          <LogoutIcon className="w-4 h-4" />
          <span>logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
