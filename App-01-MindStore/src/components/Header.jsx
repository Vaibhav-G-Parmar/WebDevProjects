//Author: Vaibhav Parmar

import React from "react";
import appLogo from "../assets/appLogo.png";

function Header({ theme, toggleTheme }) {

    return (
        <div>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <img 
                        src={appLogo} 
                        alt="MindStore Logo" 
                        className="appLogo" 
                        style={theme === 'dark' ? { filter: 'invert(100%)' } : {}}
                    />
                    <h1 className="appTitle">MindStore</h1>
                    <p className="appSlogan">Never lose a great thought - save it with MindStore</p>
                </div>
                <div onClick={toggleTheme} className="toggleSwitch">
                    <div className="toggleThumb">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;