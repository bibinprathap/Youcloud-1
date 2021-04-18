import React from 'react';
import './footer.css';
import { AiOutlineTwitter, AiFillCopyrightCircle } from 'react-icons/ai';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';

// const footer =()=>{
// return(<div> 

// </div>)
// }
function footer() {
    return (
        <div className="container-fluid">
            <div className="footer_background">
                <div className="footer_content">
                    <div className="list_1">
                        <ul>
                            <li>About us</li>
                            <li>Join Sales</li>
                            <li>Success Stories</li>
                            <li>Press Section</li>
                            <li>Advertise with us</li>
                            <li>Investor Section</li>
                        </ul>
                    </div>
                    <div className="list_2">
                        <ul>
                            <li>Help</li>
                            <li>Feedback</li>
                            <li>Complaints</li>
                            <li>Customer Care</li>
                            <li>Jobs & Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="list_3">
                        <ul>
                            <li>Suppliers Tool Kit</li>
                            <li>Sell on YouCloud</li>
                            <li>Latest BuyLead</li>
                        </ul>
                    </div>
                    <div className="list_4">
                        <ul>
                            <li>Buyers Tool kit</li>
                            <li>Post Your Requirement</li>
                            <li>Products You Buy</li>
                            <li>Search Products & Suppliers</li>
                            <li>Pay With YouCloud</li>
                        </ul>
                    </div>
                    <div className="list_5">
                        <ul>
                            <li>Events</li>
                            <li>Trade Shows</li>
                            <li>Conferences</li>
                            <li>Events by Country</li>
                        </ul>
                        <div class="text-center">
                            <p>Media Hub</p>
                            <span><AiOutlineTwitter /><IoLogoFacebook /><IoLogoInstagram /></span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright_content d-flex">
                    <span>Copyright <AiFillCopyrightCircle />1996-2021 YouShop Ltd. All rights reserved</span>
                    <span>Terms of Use - Privacy Policy - Link to Us</span>
                </div>
            </div>
        </div>
    )
}


export default footer;