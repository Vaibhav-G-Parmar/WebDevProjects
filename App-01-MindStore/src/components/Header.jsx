//Author: Vaibhav Parmar

import React from "react";
import appLogo from "../assets/appLogo.svg";

function Header(){
    return (
        <div>
            <header>
                <div>
                    <img src={appLogo} alt="MindStore Logo" className="appLogo" />
                    <h1 className="appTitle">MindStore</h1>
                    <p className="appSlogan">Never lose a great thought - save it with MindStore</p>
                </div>
            </header>
        </div>
    );
}

export default Header;