import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";

// components
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import Sidebar from "../components/Sidebar";

// styles

// pages
import Home from "../pages/Home";
import Trending from "../pages/Trending";
import WatchVideo from "../pages/WatchVideo";
import SearchResults from "../pages/SearchResults";

const AppRouter = () => (
    <Router>
        <ScrollToTop/>
        <Navbar/>
        <Sidebar/>
        <BottomBar/>
        <div>
            <Switch>
                <Route path="/watch/:videoId" component={WatchVideo}/>
                <Route path="/results/:searchterm" component={SearchResults}/>
                <Route path="/feed/trending" component={Trending}/>
                <Route path="/" component={Home}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
