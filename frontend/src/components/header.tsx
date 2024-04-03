import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">MERN Chat</Link>
      </div>

      <div className="navbar-end">
        <select
          className="select select-bordered w-full max-w-xs"
          data-choose-theme
          data-key="theme"
        >
          <option disabled selected value="">
            Pick a theme
          </option>
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="cupcake">Cupcake</option>
          <option value="dark">Dark</option>
          <option value="dracula">Dracula</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
