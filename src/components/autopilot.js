import React, {useEffect} from 'react';
import './autopilot.css';
import { Link } from 'react-scroll';
import illustate1 from './images/gtech_features_illustrate.png';
import automotive from './images/automotive.png';
import automobile from './images/automobile.png';
// import illustate2 from './images/financial.jpg';
import financial from './images/financial.mp4';
import financial1 from './images/financial1.mp4';

export default function Autopilot(){

    useEffect(() => {
        document.getElementById('dress').scrollIntoView({
            behavior: 'smooth'
        });
    })

    return(
        <div className="autopilot" id='dress'>
            <div className="autopilotunder">
                <div className="autopilotcontent">
                <h1 className="heading" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">AUTO PILOT</h1>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Product or Solution Synopsis</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">G-Tech by Unicon Group has designed a module called Auto Pilot for Dealership management customers (DMS). This product is consisted of Five subparts which include (Sales, Service, Parts, customer relation & Finance), which is designed in such a way that it becomes a complete solution for Automobile industry. While Auto pilot is a complete solution and a great tool for the user providing information in real time to respond to the customers and to make planned business decision. There are not many products that caters Auto Dealership and across Pakistan our software (Auto Pilot ) is a one stop solution to all the problems Weather it be parts services or creating a voucher for a car payment Gtech does it all for the customers. However our product is a great tool for all the users providing information in real time to respond to customers to make strategic business decision making. Auto Dealers are very dynamic having 3 different sectors operating under a single company. Sales, Service & Spare Parts are considered as three different business sectors having their individual requirements for each segments. Different OEMs also have different reporting requirements and interactive screens to pass their audits. Gtech tends to use these technologies:
                    <br></br>
                    Dot Net Technologies framework 4.5
                    <br></br>
                    SQL Server 2016 and above
                    <br></br>
                    React / Dot Net Core for Web Dashboards</p>
                </div>
                <div className="autopilotcontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Uniqueness</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">Auto Pilot is especially designed for Dealer Networks catering end to end requirement of 3S Dealerships. The product is designed in such way that it becomes easily adopted due to its stylish Graphic user interface. The whole infrastructure of ERP Software Solution is on cloud which decreases the cost of an IT Department. However, Live Dashboards helps the management to take instant reporting instead of the staff making manual reports. There is no Initial Cost of Auto Pilot and during the implementation there is no reoccurring cost after implementation there is a monthly cost which is locked for next five years which includes Maintenance Cost & Modification Cost if the customer requires. FBR Integration interactive and Live’ screen to monitor status of Service Departments. Auto pilot can manage cash sales, customer sales, credit sales, payments, refunds and installments. In addition to that inventory returns which are also supported. Our Module offers flexible inventory management including inventory batches, box and bulk quantity sales, barcode generation and scanning. ERP solution also includes a robust purchase and supplier module which keeps track of orders, shipments and supplier payments. Our system supports barcode printers, receipt printers, scanners and integrates with FBR IMS System for tax purposes.</p>
                </div>
                <div className="autopilotcontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Market Potential</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">With the introduction and expansion of new Original Equipment Manufacturer (OEM's) in Pakistan the industry is increasing with not much products in car dealership software however the Market Potential for Auto Pilot is increasing day by day. Auto Dealer Software Market size is growing at moderate pace with substantial growth rates over the last few years and is estimated that the market will grow significantly in the forecasted period i.e. 2020 to 2027.The factors which are expected to drive growth of the  Auto Dealer Software Market is rising technological advances along with increased sales tracking, improved inventory management, better customer relationship management and greater ease of calculations of commissions and insurances. Demand for cloud-based and AI integrated Auto Dealer Software has increased in transport and logistics, and it is expected that this trend will continue during the forecast period. Gtech Auto Dealer Software Market report provides a holistic evaluation of the market.</p>
                </div>
                <div className="autopilotspare">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Functional & Features:</h1>
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Sales:</h1>
                    <div className="spareunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Inquiry</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Follow-ups</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Order Booking</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Dispatch</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Arrival</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Invoicing</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Commission</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Delivery Management</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Transfer Letters</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Salesman Targets</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={automotive}></img>
                    </div>
                </div>
                <div className="autopilotspare">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Services:</h1>
                    <div className="spareunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Jobs / Services File</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Appointments</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Appointment Schedule Board</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Estimates</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Job Card</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Parts Requisition</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Job In & Out</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Technician Efficiency</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Job Status</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Job Progress Control Board</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Labor Invoicing</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Key performance indicators</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Vehicle History</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Maintenance Reminder System</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Post Service Follow-ups</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">SMS Integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="autopilotspare">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Parts:</h1>
                    <div className="spareunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Parts Catalog</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Procurement</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Jobbers Sales</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Counter Sales</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Workshop Sales</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Depreciation Invoicing</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">FBR Integration</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Key performance indicators</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Stock Management</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Part Movement Reports (Fast Moving, Slow Moving, Dead)</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Inventory Aging</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Physical Stocks</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Adjustments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={automobile}></img>
                    </div>
                </div>
                <div className="autopilotspare">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Financial Modules:</h1>
                    {/* <div className="spareunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Chart of Accounts</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Cost Centers</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Cash Management</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Bank Management</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Journal voucher</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Bank Reconciliations</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Accounts Receivable</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Accounts Payable</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Fixed Assets</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Ledgers</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Trial Balance</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Income Statement</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Balance Sheets</li>
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
                <div className="autopilotspare">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Features:</h1>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={illustate1}></img>
                    </div>
                </div>
                <div className="autopilotcontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Qualities & Technology</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">GTech by Unicon Group consists of a Quality Department that does testing for all the developments made by developers before implementing it to the customers  so that there are minimum errors when customer are operating it in their daily routine. ERP software is a computer software designed to help an entire organization enhance. Its business and management reporting. Autopilot is a collection of technologies used to set up and pre-configure new devices, getting them ready for productive. Gtech by Unicon Group provides an ERP system which creates a single version of the truth to align everyone in the company in terms of costs and revenues. However, Gtech also standardize's manufacturing processes, While our ERP system ensures that different units are using the same business processes to save time and increase productivity. Lastly ERP also standardize's HR information where it can help large companies to have a standard way of tracking employee time and share benefits and services offered.</p>
                </div>
                <div className='morelink'>
                    <Link to="productboxes" spy={true} smooth={true} offset={20} duration={1000} className="but" href="#productboxes">More Products...</Link>
                </div>
            </div>
        </div>
    );
}