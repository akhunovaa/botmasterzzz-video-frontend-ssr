import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Search from "./Search";

import "../sass/Avatar.css"
import "../sass/Navbar.css"
import { HamburgerIcon} from "./Icons";
import { openSidebar, closeSidebar } from "../reducers/reducers/sidebar";

const Navbar = () => {
  const dispatch = useDispatch();

  const { sidebar: open } = useSelector((state) => state.sidebar);

  const handleToggleSidebar = () => {
    open ? dispatch(closeSidebar()) : dispatch(openSidebar());
  };

  return (
    <div className='nav-bar'>
      <div className="logo flex-row" style={{marginRight: '15px'}}>
        <HamburgerIcon
          className="toggle-navhandler"
          onClick={handleToggleSidebar}
        />
        <span>
          <a href="/">BotmasterZzz</a>
        </span>
      </div>

      <Search />

    </div>
  );
};

export default Navbar;
