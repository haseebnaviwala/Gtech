import React, { useState } from "react";
import "./footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone, MdEmail } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { send } from 'emailjs-com';

export default function Footer(){

    const [email, setemail] = useState("");
    const [toSend, setToSend] = useState({
        toemail: '',
    });

    function submitform(){
        toSend.toemail = email;
        if(email === ""){
            alert("Enter Your Email First!!");
        }
        else{
            send(
                'service_q4iqajo',
                'template_3hw06ji',
                toSend,
                "NqWgev2WEM4cTFN8U",
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setemail('');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        } 
    }

    return(
        <div className="footer" id="footer">
            <div className="footercontent">
                <div className="footerabout">
                    <h1>ABOUT</h1>
                    <p>Over the years, serving our customers in pakistan, Gtech has developed expertise to provide solutions that covers all aspects of business operations , we provide coprehensive business solutions to organizations , Our State-of-the-art sofware integrates each association function into one flexible affordable and reliable software.</p>
                </div>
                <div className="footerproducts">
                    <h1>PRODUCTS</h1>
                    <ul>
                        <li><NavLink to={"/smartpos"}>Smart POS</NavLink></li>
                        <li><NavLink to={"/dresscode"}>Dress Code</NavLink></li>
                        <li><NavLink to={"/autopilot"}>Auto Pilot</NavLink></li>
                        <li><NavLink to={"/smartbuilders"}>Smart Builders</NavLink></li>
                        <li><NavLink to={"/smarttraders"}>Smart Traders</NavLink></li>
                    </ul>
                </div>
                <div className="footeraddress">
                    <h1>REACH US</h1>
                    <div className="footeraddressbelow">
                        <p><IoLocationSharp className="addressicon"></IoLocationSharp>Plot # 207 ,Sector 23, Korangi Industrial Area, Karachi, Pakistan</p>
                        <p><MdLocalPhone className="addressicon"></MdLocalPhone>+92 300 8264257</p>
                        <p><MdEmail className="addressicon"></MdEmail>info@gtech.com.pk</p>
                    </div>
                </div>
                <div className="footersubscribe">
                    <h1>SUBSCRIBE US</h1>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="email" required placeholder="Enter your email"></input>
                    <div className="subscribebut" onClick={submitform}>
                        <p>Submit</p>
                    </div>
                </div>
            </div>
            <div className="footerbelow">
                <div className="footertextbox">
                    <p>&copy; Copyright 2022-23. All rights Reserved</p>
                </div>
            </div>
        </div>
    );
}