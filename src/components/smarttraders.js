import React, {useEffect} from 'react';
import './smarttraders.css';
import { Link } from 'react-scroll';
import erp1 from './images/ERP 1.png';
import financial from './images/financial.mp4';
import financial1 from './images/financial1.mp4';

export default function Smarttraders(){

    useEffect(() => {
        document.getElementById('dress').scrollIntoView({
            behavior: 'smooth'
        });
    })

    return(
        <div className="smarttraders" id='dress'>
            <div className="smarttradersunder">
                <div className="smarttraderscontent">
                <h1 className="heading" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">SMART TRADERS</h1>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Introduction</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">G-Tech by Unicon Group has designed a module called Smart Traders (Inventory & Stock managment) in order to minimize and maximize the qaunity of primary goods. Our software provides complete inventory management, combine Finacials, and project management solution in more than one cloud-based database. Our software solution is an entirely cloud-based, quick to install, low cost construction software solution with training and support included G-Tech handles your technology so that you can handle your business. Trading is a very dynamic industry and we have witnessed that most of the International ERPs like Oracle, Microsoft Dynamics and SAP are not able to cater end to end needs of the customer. Our platform provides a boost to your trading success, enabling you to advance with skills and trading experience.In order to cope up with the latest technologies Gtech uses:
                    <br></br>
                    Dot Net Technologies framework 4.5
                    <br></br>
                    SQL Server 2016 and above
                    <br></br>
                    React / Dot Net Core for Web Dashboards</p>
                </div>
                <div className="smarttraderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Problem / Issues Addressed Technologies</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">Smart Trade System is designed to buy and sell for trade in cash, sales stock and reports etc. These product are designed in such way that it becomes easily adopted due to business inventory mishapps locally its help to companies identify which and how much stock to order at what time. It tracks inventory from purchase to the sale of good. While Smart Trader (Business Inventory Management) to control inventory and costs using powerful software and data. It consists of modern technology solutions such as smart inventory management to take instant reporting instead of the staff making manual reports.</p>
                </div>
                <div className="smarttraderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Uniqueness</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">A Smart Traders system can help to maintain optimal levels of stock by integrating the inventory needs of staff, customers and suppliers. An ERP inventory management systems helps to manage each of their business operations from a single platform. Smart Traders software is designed to be as flexible and customizable as you need. Typically that includes the management of inventory, finance, operations, planning, and logistics. A smart inventory management system uses data to control costs and operations and minimize inefficiencies.  There is no Initial Cost of Smart traders and during the implementation there is no reoccurring cost after implementation there is a monthly cost which is locked for next five years which includes Maintenance Cost & Modification Cost if the customer requires. A Smart Traders can manage stock ageing, stock transfer, purchase orders reports, sales reports ageing reports customer statement trial balances etc. In addition to that inventory returns which are also supported.</p>
                </div>
                <div className="smarttraderscontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Market Potential</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">A Business inventory management system by G-Tech is an ideal tool to manage and access a stock business. An Inventory management system is important to small businesses because it helps them prevent stock outs, manage multiple locations, and ensure accurate recordkeeping. An inventory solution makes these processes easier than trying to do them all manually A Smart traders is one of the most fastly growing industry in Pakistan, having so much potentials and the business inventory management is a product that is especially designed to cater such chains which has great opportunity.</p>
                </div>
                <div className="smarttradersfeatures">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Functional & Features:</h1>
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Financial Modules:</h1>
                    {/* <div className="featuresunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Chart of Accounts</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Cost Centre Management</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Tag Files</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Cash Book</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Bank Book</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Journals Vouchers</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Bank Reconciliation</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Customer Statement</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Ageing Reports</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Accounts payable</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Vendor Statement</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Capital work in progress Management</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Ledger</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Trial Balance</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Income Statement</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Balance Sheet</li>
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
                <div className="smarttradersfeatures">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Inventory:</h1>
                    <div className="featuresunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Product Setup</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Procurement Module</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Import Costing</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Sales Module</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Stock Transfer</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Gate Passes</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Issuance For General Items</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Inventory Adjustment</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Po Reports</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Purchase Reports</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Sales Reports</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Sales Person Management</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Stock Reports</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Stock ageing</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Limited Company Wise Stock Management</li>
                                <li data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Gross Profit Margin Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={erp1}></img>
                    </div>
                </div>
                <div className='morelink'>
                    <Link to="productboxes" spy={true} smooth={true} offset={20} duration={1000} className="but" href="#productboxes">More Products...</Link>
                </div>
            </div>
        </div>
    );
}