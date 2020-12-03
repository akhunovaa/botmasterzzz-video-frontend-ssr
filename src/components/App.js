import React, {Component} from 'react'
import {ToastContainer} from 'react-toastify';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import Home from "../pages/Home";
import "../sass/Global.css";
import "../sass/Container.css";
import "../sass/Toastify.css";

class App extends Component {

    render() {

        const {videos} = this.props

        return (
            <div>
                <div/>
                <ToastContainer
                    autoClose={2500}
                    position="top-right"
                    closeButton={false}
                />
                <ScrollToTop/>
                <Navbar/>
                <Sidebar/>
                <BottomBar/>
                <div className='home-container'>
                    <Home videos={videos}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({isFetching, videos}) {
    return {
        isFetching,
        videos
    }
}

export default App;
