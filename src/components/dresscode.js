import React, {useEffect} from 'react';
import './dresscode.css';
import { Link } from 'react-scroll';
import illustate1 from './images/gtech_features_illustrate.png';
import erp from './images/ERP 1.png';
// import illustate2 from './images/financial.jpg';

export default function Dresscode(){

    useEffect(() => {
        document.getElementById('dress').scrollIntoView({
            behavior: 'smooth'
        });
    })

    return(
        <div className="dresscode" id='dress'>
            <div className="dresscodeunder">
                <div className="dresscodecontent">
                <h1 className="heading" data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">DRESSCODE</h1>
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Brief Description of Product and Synopsis</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">GTech by Unicon Group product Dress Code is designed especially for the Textile Industry, there are 2 versions of this product. Firstly Dress code is designed for Exporters that cater all categories which includes Knitwear, Woven & Home Textiles. Secondly our product is designed for the Local Industry which is used by Fashion industry brands. Textile is a very dynamic industry and we have witnessed that most of the International ERPs like Oracle, Microsoft Dynamics and SAP are not able to cater end to end needs of customer. Normally these ERPs are designed in such a way that they provided multiple modules using standard formats but when these ERPs are implemented in the textile sector due to the dynamic nature of this industry they faces problems in implementation. Secondly these ERPs are so expensive that SMEs are not able to buy such products and hire an experienced team that can manage those ERPs. In order to cope up with the latest technologies Gtech uses: 
                    <br></br>
                    Dot Net Technologies framework 4.5
                    <br></br>
                    SQL Server 2016 and above
                    <br></br>
                    React / Dot Net Core for Web Dashboards</p>
                </div>
                <div className="dresscodecontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Problem / Issues Addressed Technologies</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">Dress Code is especially designed to serve the Textile Industry for both Large Scale and Smalls Scale Manufacturers. The product is designed in such way that it becomes easily adopted due to its stylish Graphic user interface. The whole infrastructure of ERP Software Solution is on cloud which decreases the cost of an IT Department. However, Live Dashboards helps the management to take instant reporting instead of the staff making manual reports.</p>
                </div>
                <div className="dresscodecontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Uniqueness</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">There is no Initial Cost of Dress Code and during the implementation there is no reoccurring cost however, after implementation there is a monthly cost which is locked for next five years which includes Maintenance Cost & Modification Cost if customer requires.</p>
                </div>
                <div className="dresscodecontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Market Potential</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">Textile is one of the biggest sectors in Pakistan and as mentioned above there is a lot of Gap in the industry where as there are not many products that are designed in a way that it can be implemented in the Textile Sector. The outbreak of COVID-19 is anticipated to provide remunerative opportunities for the market expansion while this is an attributable to rise in digital transformation trend in the enterprises, upsurge in demand for ERP solutions that are hosted or managed in the cloud, and rapid increase in problems due to disruption of the supply chain in the manufacturing sector. Moreover, during the post pandemic, companies will focus more on solutions, which will support advanced planning and mitigate the impact of similar events in the future.</p>
                </div>
                <div className="dresscodefinancial">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Functionalities:</h1>
                    <div className="financialunder">
                        <div className="financial1">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Financials</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Accounts receivable</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Accounts payable</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Fixed Assets</li>
                            </ul>
                        </div>
                        <div className="financial2">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Merchandising</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Inventory</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Work Orders</li>
                                <li data-aos="fade-up" data-aos-delay="40" data-aos-duration="600">Production</li>
                            </ul>
                        </div>
                        <div className="financial3">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="10" data-aos-duration="600">Services</li>
                                <li data-aos="fade-up" data-aos-delay="20" data-aos-duration="600">Exports</li>
                                <li data-aos="fade-up" data-aos-delay="30" data-aos-duration="600">Gate Module</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={erp}></img>
                    </div>
                </div>
                <div className="dresscodeweaving">
                    <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="600">Features:</h1>
                </div>
                <div className='productillustate2' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <div>
                        <img src={illustate1}></img>
                    </div>
                </div>
                <div className="dresscodecontent">
                    <h1 data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">Quality & Technology</h1>
                    <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">GTech by Unicon Group has a Quality Department that does testing  for all the developments made by developers before giving it to the customer so that there are minimum errors when customer are implementing it in their daily routine. ERP software is a computer software designed to help an entire organization enhance its business and management reporting. Gtech by Unicon Group provides an ERP system which creates a single version of the truth to align everyone in the company in terms of costs and revenues. However, Gtech also standardize's manufacturing processes. While our ERP system ensures that different units are using the same business processes to save time and increase productivity. Lastly ERP also standardize's HR information .where it can help large companies to have a standard way of tracking employee time and share benefits and services offered.</p>
                </div>
                <div className='morelink' data-aos="fade-left" data-aos-delay="20" data-aos-duration="600">
                    <Link to="productboxes" spy={true} smooth={true} offset={20} duration={1000} className="but" href="#productboxes">More Products...</Link>
                </div>
            </div>
        </div>
    );
}