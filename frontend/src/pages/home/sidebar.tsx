import React, { useState } from "react";
import SearchInput from "../../components/search-input";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [value, setValue] = useState<string>("");

  const handleSearch = () => {
    console.log(value);
  };
  
  return (
    <div className="py-2 px-4 flex flex-col divide-y divide-primary gap-4">
      <SearchInput value={value} onChange={setValue} onEnter={handleSearch} />
      <p>chats</p>
    </div>
  );
};

export default Sidebar;
