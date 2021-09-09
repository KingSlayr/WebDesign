import React from 'react'
import "./Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar_logo"><img src={logo} alt="" /> </div>
            <div className="navbar_mainbar">
                <div className="mainbar_items">
                    Home
                    <div className="mainbar_submenu">
                        <div>
                            <div className='block'></div>
                            Home 1
                        </div>
                        <div>
                            <div className='block'></div>
                            Home 2
                        </div>
                        <div>
                            <div className='block'></div>
                            Home 3
                        </div>
                        <div>
                            <div className='block'></div>
                            Home 4
                        </div>
                    </div>
                </div>
                <div className="mainbar_items">About Us</div>
                <div className="mainbar_items">Services</div>
                <div className="mainbar_items">
                    Pages
                    <div className="mainbar_submenu">
                        <div>
                            Blog
                        </div>
                        <div>
                            FAQ
                        </div>
                        <div>
                            Error 404
                        </div>
                        <div>
                            Contact Us
                        </div>
                    </div>
                </div>
                <div className="mainbar_items">
                    Post Details
                    <div className="mainbar_submenu">
                        <div>
                            Post Image
                        </div>
                        <div>
                            Post Gallery
                        </div>
                        <div>
                            Post Video
                        </div>
                        <div>
                            Post Right Sidebar
                        </div>
                    </div>
                </div>
                <div className="mainbar_items">
                    Projects
                    <div className="mainbar_submenu">
                        <div>
                            Project Grid
                        </div>
                        <div>
                            Project Masonry
                        </div>
                        <div>
                            Project Carousel
                        </div>
                        <div>
                            Project Classic
                        -1</div>
                        <div>
                            Project Classic
                        -2</div>
                        <div>
                            Project Detail
                        </div>
                    </div>
                </div>
                <div className="mainbar_items">ShortCodes</div>
                <div className="icons">
                    <i class="fa fa-search"></i>
                </div>
                <div className="icons">
                    <i class="fa fa-angle-left arrow-animation"></i>
                </div>
                <div className="grip-lines icons">
                    <i class="fas fa-grip-lines"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
