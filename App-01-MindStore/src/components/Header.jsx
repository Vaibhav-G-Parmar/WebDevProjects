//Author: Vaibhav Parmar

import React from "react";
import appLogo from "../assets/appLogo.svg";

function Header(){
    return (
        <div>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <img src={appLogo} alt="MindStore Logo" className="appLogo" />
                    <h1 className="appTitle">MindStore</h1>
                    <p className="appSlogan">Never lose a great thought - save it with MindStore</p>
                </div>
                <div className="copyRight">
                    &copy; 2025 MindStore
                </div>
            </header>
        </div>
    );
}

export default Header;