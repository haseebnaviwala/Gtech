import React from "react";
import './productboxes.css'
import { NavLink } from "react-router-dom";
import autopilot from './images/1.png';
import smartbuilder from './images/2.png';
import dresscode from './images/3.png';
import smartpos from './images/4.png';
import smarttraders from './images/5.png';

export default function Productboxes(){
    return(
        <div className="productboxesmain" id="productboxes">
            <div className="boxheading" data-aos="fade-right" data-aos-delay="0" data-aos-duration="600">
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="mainboxes" data-aos="fade-down" data-aos-delay="500" data-aos-duration="600">
                <div className="box">
                    <NavLink to={"/smartpos"} style={{textDecoration:"none", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                        <div className="boxsubheading">
                            <img src={smartpos}></img>
                        </div>
                        <div className="boxtext">
                            <p>G-Tech by Unicon Group product <span>Smart POS</span> is specially designed for <span>Fashion Industry Retail Chains</span> with real ease and controls.It’s a <span>cloud based system</span> which helps to manage <span>real time transactions</span> and reporting across retail channel for better decision making.</p>
                            <div className="boxbutton">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="box">
                    <NavLink to={"/dresscode"} style={{textDecoration:"none", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                        <div className="boxsubheading">
                            <img src={dresscode}></img>
                        </div>
                        <div className="boxtext">
                            <p>GTech by Unicon Group product <span>Dress Code</span> is designed especially for the <span>Textile Industry</span>, there are 2 versions of this product. Firstly Dress code is designed for Exporters that cater all categories which includes <span>Knitwear, Woven & Home Textiles.</span></p>
                            <div className="boxbutton">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="box">
                    <NavLink to={"/autopilot"} style={{textDecoration:"none", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                        <div className="boxsubheading">
                            {/* <h1>AUTO PILOT</h1> */}
                            <img src={autopilot} style={{width: "70%"}}></img>
                        </div>
                        <div className="boxtext">
                            <p>G-Tech by Unicon Group has designed a module called <span>Auto Pilot</span> for <span>Dealership management customers (DMS)</span>. This product is consisted of Five subparts which include <span>(Sales, Service, Parts, customer relation & Finance)</span>, which is designed in such a way that it becomes a complete solution for <span>Automobile industry.</span></p>
                            <div className="boxbutton">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="box">
                    <NavLink to={"/smartbuilders"} style={{textDecoration:"none", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                        <div className="boxsubheading">
                            <img src={smartbuilder}></img>
                        </div>
                        <div className="boxtext">
                            <p>G-Tech by Unicon Group has designed a module called <span>Smart builders (retail & distribution)</span> for <span>construction based companies.</span> Smart builders is a cloud-based construction management software which is designed to increase project efficiency.</p>
                            <div className="boxbutton">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="box">
                    <NavLink to={"/smarttraders"} style={{textDecoration:"none", display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                        <div className="boxsubheading">
                            <img src={smarttraders}></img>
                        </div>
                        <div className="boxtext">
                            <p>G-Tech by Unicon Group has designed a module called <span>Smart Traders </span>(Inventory & Stock managment) in order to minimize and maximize the qaunity of primary goods. Our software provides complete <span>inventory management, combine Finacials, and project management solution</span> in more than one cloud-based database.</p>
                            <div className="boxbutton">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}