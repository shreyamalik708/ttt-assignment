import React from "react";
import './Header.css';

function Header() {
    return (
        <div>
            <nav>
                <div class="rightside-header">
                    <div class="header-logo"></div>
                    <div class="header-straight-line"></div>
                    <div class="rightside-header-text">STORIES</div>
                </div>
                <div class="leftside-header">
                    <button class="btn">Courses</button>
                </div>
            </nav>
            <header>
                <div class="header-image"></div>
            </header>
        </div>
    )
}

export default Header;