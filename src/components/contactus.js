import React, { useState } from 'react';
import './contactus.css';
import { MdAccessTimeFilled } from "react-icons/md";
import { send } from 'emailjs-com';

export default function Contactus(){

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [toSend, setToSend] = useState({
        cusmessage: '',
        toemail: '',
        clientname: '',
    });

    function submitform(){
        toSend.cusmessage = message;
        toSend.toemail = email;
        toSend.clientname = name;
        if(name === ""){
            alert("Enter Your Name!!");
        }
        else if(email === ""){
            alert("Enter Your Email!!");
        }
        else if(message === ""){
            alert("Kindly Enter Your Query!!");
        }
        else{
            send(
                'service_q4iqajo',
                'template_jttyn9p',
                toSend,
                "NqWgev2WEM4cTFN8U",
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setmessage('');
                setemail('');
                setname('');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        }
    }

    return(
        <div className="contactusmain" id='contactus'>
            <div className='contactuslower'>
                <div className="contactusform">
                    <div className="contactusheading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="form">
                        <form>
                            <input onChange={(e) => setname(e.target.value)} value={name} type="text" className="name" required placeholder="Name"></input>
                            <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="email" required placeholder="Email"></input>
                            <textarea onChange={(e) => setmessage(e.target.value)} value={message} id="message" name="message" rows="6" required placeholder="Type your message here.."></textarea>
                        </form>
                    </div>
                    <div className="subbutton" onClick={submitform}>
                        <p>Submit</p>
                    </div>
                </div>
                <div className="contactusdeatils">
                    <div className="intouch">
                        <h1>Get In Touch</h1>
                        <p>Whatever you would like to share with us — we are ready to listen to you. Our mailing system forwards messages to the Smashing team members who take care of inquiries as soon as possible. To receive an answer, you need to provide your e-mail</p>
                    </div>
                    <div className="bushours">
                        <h1>Business Hours</h1>
                        <p><MdAccessTimeFilled className='time'></MdAccessTimeFilled> Monday - Satruday 9am to 5pm</p>
                        <p><MdAccessTimeFilled className='time'></MdAccessTimeFilled> Sunday - Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}