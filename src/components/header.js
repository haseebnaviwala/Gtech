import React, {useEffect} from "react";
import "./header.css";
import gtech from "./images/logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import background from './images/background.mp4';
import background1 from './images/background2.mp4';

export default function Header(){
    useEffect(() => {
        let menuToggle = document.querySelector('.menuToggle');
        let menuToggle1 = document.querySelector('.linkto');
        let menuToggle2 = document.querySelector('.linkto1');
        let menuToggle3 = document.querySelector('.linkto2');
        let menuToggle4 = document.querySelector('.linkto3');
        let menuToggle5 = document.querySelector('.linkto4');
        let navigation = document.querySelector('.navigation');
        menuToggle.onclick = function(){
            navigation.classList.toggle('active')
        }
        menuToggle1.onclick = function(){
            navigation.classList.toggle('active')
        }
        menuToggle2.onclick = function(){
            navigation.classList.toggle('active')
        }
        menuToggle3.onclick = function(){
            navigation.classList.toggle('active')
        }
        menuToggle4.onclick = function(){
            navigation.classList.toggle('active')
        }
        menuToggle5.onclick = function(){
            navigation.classList.toggle('active')
        }
    });

    return(
        <div className="main" id="main">
            <div className="backgrounddiv">
                <video src={background} autoPlay muted loop playsInline className="one"></video>
                <video src={background1} autoPlay muted loop playsInline className="two"></video>
            </div>
            <div className="upperBox">
                <div className="imgBox">
                    <img src={gtech} className="img"></img>
                </div>
                <div className="navigation">
                    <div className="userBx">
                        <p className="username">Products</p>
                    </div>
                    <div className="menuToggle"></div>
                    <ul className="menu">
                        <li className="linkto"><NavLink to={"/smartpos"}>SMART POS</NavLink></li>
                        <li className="linkto1"><NavLink to={"/dresscode"}>DRESS CODE</NavLink></li>
                        <li className="linkto2"><NavLink to={"/autopilot"}>AUTO PILOT</NavLink></li>
                        <li className="linkto3"><NavLink to={"/smartbuilders"}>SMART BUILDERS</NavLink></li>
                        <li className="linkto4"><NavLink to={"/smarttraders"}>SMART TRADERS</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="belowBox">
                <div className="mainText">
                    <h1 className="heading">The New Way to Success</h1>
                </div>
                <div className="belowText">
                    <p className="text">G-tech's mission is to develop reliable business solutions for their valuable clients that enables and transforms the ways to gather manage, distribute and communicate information.</p>
                </div>
                <div className="buttonBox">
                    <Link to="contactus" spy={true} smooth={true} offset={-20} duration={1000} className="but" href="#contactus"><p>Contact Us</p></Link>
                </div>
            </div>
        </div>
    );
}