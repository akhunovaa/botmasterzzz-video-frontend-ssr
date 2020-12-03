import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HomeIcon,
  TrendingIcon,
  SubIcon,
  LibIcon,
  HistoryIcon,
  VidIcon,
  LikeIcon,
} from "./Icons";
import "../sass/Sidebar.css";
import { closeSidebar } from "../reducers/reducers/sidebar";


const Sidebar = () => {
  const dispatch = useDispatch();

  const { sidebar: open } = useSelector((state) => state.sidebar);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  return (
    <div className={open ? 'side-bar-open' : 'side-bar' }>
      <a onClick={handleCloseSidebar} href="/" className="side-bar-active">
          <div className="side-bar-icon">
          <HomeIcon />
          <span>Главная страница</span>
        </div>
      </a>

      <a onClick={handleCloseSidebar} href="/feed/trending" className="side-bar-active">
        <div className="side-bar-icon">
          <TrendingIcon />
          <span>В трэнде 🔥</span>
        </div>
      </a>

      {/*<NavLink*/}
      {/*  onClick={handleCloseSidebar}*/}
      {/*  to="/feed/subscriptions"*/}
      {/*  activeClassName="active"*/}
      {/*>*/}
      {/*  <div className="icon">*/}
      {/*    <SubIcon />*/}
      {/*    <span>Subscriptions</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      <div className="ruler"/>

      {/*<NavLink*/}
      {/*  onClick={handleCloseSidebar}*/}
      {/*  to="/feed/library"*/}
      {/*  activeClassName="active"*/}
      {/*>*/}
      {/*  <div className="icon">*/}
      {/*    <LibIcon />*/}
      {/*    <span>Library</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      {/*<NavLink*/}
      {/*  onClick={handleCloseSidebar}*/}
      {/*  to="/feed/history"*/}
      {/*  activeClassName="active"*/}
      {/*>*/}
      {/*  <div className="icon">*/}
      {/*    <HistoryIcon />*/}
      {/*    <span>History</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      {/*<NavLink*/}
      {/*  onClick={handleCloseSidebar}*/}
      {/*  to="/feed/my_videos"*/}
      {/*  activeClassName="active"*/}
      {/*>*/}
      {/*  <div className="icon">*/}
      {/*    <VidIcon />*/}
      {/*    <span>Your videos</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      {/*<NavLink*/}
      {/*  onClick={handleCloseSidebar}*/}
      {/*  to="/feed/liked_videos"*/}
      {/*  activeClassName="active"*/}
      {/*>*/}
      {/*  <div className="icon">*/}
      {/*    <LikeIcon />*/}
      {/*    <span>Liked videos</span>*/}
      {/*  </div>*/}
      {/*</NavLink>*/}

      {/*<div className="ruler"></div>*/}

      {/*<Subscriptions />*/}
    </div>
  );
};

export default Sidebar;
