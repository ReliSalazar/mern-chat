import React from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="py-2 px-4">
      <p>Sidebar</p>
    </div>
  );
};

export default Sidebar;
