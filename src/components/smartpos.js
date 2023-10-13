import React, {useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import './smartpos.css';
import {Link} from 'react-scroll';
import illustate1 from './images/gtech_features_illustrate.png';
import pos1 from './images/POS 1.png';
import pos2 from './images/POS 2.png';
// import illustate2 from './images/financial.jpg';
import financial from './images/financial.mp4';
import financial1 from './images/financial1.mp4';

export default function Smartpos(){

    useEffect(() => {
        document.getElementById('pos').scrollIntoView({
            behavior: 'smooth'
        });
    })

    return(
        <div className="smartpos" id='pos'>
            <div className="smartposunder">
                <div className="smartposcontent">
                    <h1 className="heading" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">SMART POS</h1>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Introduction</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">G-Tech by Unicon Group product Smart POS is specially designed for Fashion Industry Retail Chains with real ease and controls. The complete software is integrated with Financial Module and has advance features and capacity to integrate with different Web Portals like Shopify & Magento. It’s a cloud based system which helps to manage real time transactions and reporting across retail channel for better decision making. G-Tech by unicon group is a listed vendor of FBR that are authorized to inte- grate POS system with FBR Portal & IRIS system. Locally there are not much solutions that can address such retail chains, whereas in Pakistan such retail chains were using Microsoft Dynamics but there are several problems that cannot be addressed in Dynamics such as: Production Module for Fashion Industry cannot be implemented in any of the international software due to its complexity. Secondly, Cost of Microsoft Products tend to be very  high.   While,Modifications cost is high plus most of the modifications are not possible due to the standard version. Lastly High infrastructure, consultants and training cost cannot be bared my industries in Pakistan. G-Tech by unicon group uses these technologies:
                    <br></br>
                    Dot Net Technologies framework 4.5
                    <br></br>
                    SQL Server 2016 and above
                    <br></br>
                    React / Dot Net Core for Web Dashboards</p>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={pos1}></img>
                    </div>
                </div>
                <div className="smartposcontent">             
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Uniqueness</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">In today's world customers expect a more friction less shopping experience than ever before, and those expectations are constantly increasing. To exceed both your customers’ and your own expectations, Gtech has created the High Checkout – a cloud-native, scalable SaaS (Software as a Service) Point of Sale (POS) solution. Our Production Module works as USP and most of the retail products does not cater this module.Our point of sale offers OMNI Channel across the Network Pick, Pack & Ship Module for Online. A cloud-based point of sale allows you to manage your stock in real time and know the quantity of goods you own over a given period of time. When you receive your order, all you have to do is scan or enter your items and everything will be saved in the software. Once you scan all of your items, it will be much easier to know the quantity you have in your inventory for each article. It is possible that the supposed quantity is not the same as the actual quantity because of losses and theft. However G-techs point of sale increases Carton Management, Loyalty Card Module and Physical Stock Taking & Adjustments.</p>
                </div>
                <div className="smartposcontent">             
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Market Potential</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">A POS system by G-Tech  is an ideal tool to manage and access a store business. A retail POS system can be a simple software that runs on any PC or online-based QuickBooks or mobile device.Small and medium retailers are interested in installing a POS system due to its affordability and ease of access directly from the internet, which is expected to expand the retail POS market over the forecast period. Retail is one of the most fastly growing industry in Pakistan, having so much potentials and Smart POS is a product that is especially designed to cater such chains which  has great opportunity.</p>
                </div>
                <div className="smartpospos">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Functionality and Features:</h1>
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">POS:</h1>
                    <div className="posunder">
                        <div className="export1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Product Attributes</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Product Setup</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Stock Keeping Unit Generation</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Planning</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Production</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Transfer Orders</li>
                                <li data-aos="fade-up" data-aos-delay="70" data-aos-duration="600">Wholesales Module</li>
                            </ul>
                        </div>
                        <div className="export2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Gate Pass</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Promotion</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Discount</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Point of Sales</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Daily Cash Activity</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Federal Board Of Revenue Integration</li>
                            </ul>
                        </div>
                        <div className="export3">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Physical Stock</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Loyalty Card</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Consumables (Shopping Bags, Stationaries Etc)</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Services</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Shop Wise Profitability</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Dashboards</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={pos2}></img>
                    </div>
                </div>
                <div className="smartposonline">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Online Module:</h1>
                    <div className="onlineunder">
                        <div className="financial1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Integration with Websites</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Order Fetching from Websites</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Stock Updating of Websites</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">OMNI Channel</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Pick Pack & Ship Module</li>
                                <li data-aos="fade-up" data-aos-delay="60" data-aos-duration="600">Status Updating of Orders</li>
                            </ul>
                        </div>
                        <div className="financial2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Courier Management</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Point Of Sale Generation</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Return Cycles</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Loyalty Card Point Updating & Redemption on Web</li>
                                <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">Order Tracking Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="smartposonline">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Financial Module:</h1>
                    {/* <div className="onlineunder">
                        <div className="financial1">
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
                        <div className="financial2">
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
                <div className="smartposonline">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Features:</h1>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={illustate1}></img>
                    </div>
                </div>
                <div className="smartposcontent">             
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Quality</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">GTech by Unicon Group has a Quality Department that does testing  for all the developments made by developers before giving it to the customer so that there are minimum errors when customer are implementing it in their daily routine. ERP software is a computer software designed to help an entire organization enhance its business and management reporting. Gtech by Unicon Group provides a POS system which creates a single version of the truth to align everyone in the company in terms of costs and revenues. However, Gtech also standardize's manufacturing processes. While our POS system ensures that different units are using the same business processes to save time and increase productivity. Lastly POS also standardize's financial modules with advance features which are integrated with different web portals in order to maintain the retail chains with real ease and control.</p>
                </div>
                <div className='morelink'>
                    <Link to="productboxes" spy={true} smooth={true} offset={20} duration={1000} className="but" href="#productboxes">More Products...</Link>
                </div>
            </div>
        </div>
    );
}