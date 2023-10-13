import React from "react";
import "./backtotop.css";

export default function Backtotop(){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };
    return(
        <div className="backtotopmain">
            <div className="backtotoptext">
                <p>We respect your privacy, hence the information you provide remains confidential.</p>
            </div>
            <div className="backtotopcircles">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="backtotopbutton" onClick={scrollToTop}>
                <a>BACK TO TOP</a>
            </div>
        </div>
    );
}