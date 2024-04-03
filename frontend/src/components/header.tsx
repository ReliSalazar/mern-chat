import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <select className="gradientselect" data-choose-theme>
      <option disabled value="">
        Pick a theme
      </option>
      <option value="">Default</option>
      <option value="light">Light</option>
      <option value="cupcake">Cupcake</option>
      <option value="emerald">Emerald</option>
      <option value="dark">Dark</option>
      <option value="sunset">Sunset</option>
      <option value="dracula">Dracula</option>
    </select>
  );
};

export default Header;
