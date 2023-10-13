import React, {useEffect} from 'react';
import './smartbuilders.css';
import { Link } from 'react-scroll';
import construction from './images/Construction ERP.png';
import financial from './images/financial.mp4';
import financial1 from './images/financial1.mp4';

export default function Smartbuilders(){

    useEffect(() => {
        document.getElementById('builders').scrollIntoView({
            behavior: 'smooth'
        });
    })

    return(
        <div className="smartbuilders" id='builders'>
            <div className="smartbuildersunder">
                <div className="smartbuilderscontent">
                    <h1 className="heading" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">SMART BUILDERS</h1>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Product or Solution Synopsis</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">G-Tech by Unicon Group has designed a module called Smart builders (retail & distribution) for construction based companies. Smart builders is a cloud-based construction management software which is designed to increase project efficiency and accountability by streamlining and mobilizing project communications and documentation. Our software provides complete construction management, combine accounting, job cost and project management solution in more than one cloud-based database. Our software solution is an entirely cloud-based, quick to install, low cost construction software solution with training and support included G-Tech handles your technology so that you can handle your business. Construction is a very dynamic industry and we have witnessed that most of the International ERPs like Oracle, Microsoft Dynamics and SAP are not able to cater end to end needs of the customer.In order to cope up with the latest technologies Gtech uses: 
	                <br></br>
                    Dot Net Technologies framework 4.5
                    <br></br>
	                SQL Server 2016 and above
                    <br></br>
                    React / Dot Net Core for Web Dashboards</p>
                </div>
                <div className="smartbuilderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Uniqueness</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">The successful delivery of any engineering or construction project starts with a well and collaboratively built schedule. A schedule that coordinates the right resources on the right work at the right time, improving communication between office and field teams to boost productivity and respond to project changes in time .The whole infrastructure of ERP Software Solution is on cloud which decreases the cost of an IT Department. However, Live Dashboards helps the management to take instant reporting instead of the staff making manual reports. There is no Initial Cost of  Smart Builders  and during the implementation there is no reoccurring cost after implementation there is a monthly cost which is locked for next five years which includes Maintenance Cost & Modification Cost if the customer requires .Our software offers FBR Integration interactive and Live’ screen to monitor status of Service Departments. Smart builders can manage chart of accounts, bank reconciliation, customer statement, aging reports and standard payment plan. Real Estate Management Software System allows the industry and companies to implement software and manage their core business processes and it also helps professionals to manage customer contacts, client inquiries, marketing campaigns, listing new properties, and after-sales services.</p>
                </div>
                <div className="smartbuilderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Market Potential</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">The market for smart builders is bifurcated into Builders and Contractors, Construction Managers, Engineers and Architects. Builders and Contractors have the largest market share and are anticipated to grow at the highest over the forecasted period. The market is made On-Premises, Cloud-Based which is held by the largest market share and is anticipated to grow at a rapid rate over the forecast period. From implementation to operation, everything is handled internally for on-premise software; maintenance, security, and updates must also be handled internally.</p>
                </div>
                <div className="smartbuildersfeat">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Functional & Features:</h1>
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Financial Modules:</h1>
                    {/* <div className="featunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Chart of Accounts</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Cost Centre Management</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Tag Files</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Cash Book</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Bank Book</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Journals Vouchers</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Bank Reconciliation</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Fixed Asset Management</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Capital work in progress Management</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Ledger</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Trial Balance</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Income Statement</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Balance Sheet</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <div className='productillustate1' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                    <video src={financial} autoPlay muted loop playsInline className='fir'></video>
                    <video src={financial1} autoPlay muted loop playsInline className='sec'></video>
                    </div>
                </div>
                <div className="smartbuildersfeat">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Reservation Modules:</h1>
                    <div className="featunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Project Files</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Unit Type</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Block / Building</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Unit Files</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Reservation</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Standard Payment Plan</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Customized Payment Plan</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Receipt Management</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Letter Generation</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Customer Statement</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Ageing Reports</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Recovery Report</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="smartbuildersfeat">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Construction Modules:</h1>
                    <div className="featunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Procurement Modules</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Construction Stages</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Consumption of Material</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Labour Costing</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Costing of Stages</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Project Costing</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Payable Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={construction}></img>
                    </div>
                </div>
                <div className="smartbuilderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Quality & Application of Technology</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">GTech by Unicon Group consists of a Quality Department that does testing for all the developments made by developers before implementing it to the customers  so that there are minimum errors when customer are operating it in their daily routine. ERP software is a computer software designed to help an entire organization enhance its daily operations. G-tech by Unicon Group provides an ERP system which creates a single version of the truth to align everyone in the company in terms of costs and revenues. However, G-tech also standardizes retail and distribution processes. While our ERP system ensures that different units are using the same business processes to save time and increase productivity. Lastly ERP also standardizes HR information where it can help large companies to have a standard way of tracking employee time and share benefits and services offered. Some technological innovations are equally important to consumers and real estate professionals. Real estate agents begin to use specific technology for realtors designed to help them provide services to their clients.</p>
                </div>
                <div className='morelink'>
                    <Link to="productboxes" spy={true} smooth={true} offset={20} duration={1000} className="but" href="#productboxes">More Products...</Link>
                </div>
            </div>
        </div>
    );
}