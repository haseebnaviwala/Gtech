import React, { useEffect } from "react";
import "./aboutus.css";

export default function AboutUs(){

    useEffect(() => {
        let textToggle = document.querySelector('.firstmission');
        let textmission = document.querySelector('.textmission');
        textToggle.onclick = function(){
            textmission.classList.toggle('active')
        }
    });

    return(
        <div className="aboutusDiv" id="aboutus">
            <div className="aboutusUpperBox">
                <h1 className="text1" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Who We Are</h1>
            </div>
            <div className="aboutusMiddleBox" data-aos="fade-right" data-aos-delay="500" data-aos-duration="600">
                <p className="text2">Over the years, serving our customers in pakistan, Gtech has developed expertise to provide solutions that covers all aspects of business operations , we provide coprehensive business solutions to organizations , Our State-of-the-art sofware integrates each association function into one flexible affordable and reliable software.</p>
                <p className="text2">Our ideology is not only to developed software but to ensure that the software is incorporated within the clients existing system in such a way that it becomes the solution to the problems , our support team are experienced and professionals that work with your staff to help you manage your information more effectively. Customer are at the core of everthing we do we listen carefully to their needs and desires and collaborate to find new ways of existing business solutions.</p>
            </div>
            <div className="aboutusLowerBox">
                <div className="textmission">
                    <p className="onHoverBox">In today's highly competitive and ruthless world , custom cycle times and responsiveness are important factors to sustain in the world of business.</p>
                </div>
                <div className="firstmission" data-aos="fade-left" data-aos-duration="600">
                    <p className="text3">Why Gtech</p>
                </div>
            </div>
        </div>
    );
}