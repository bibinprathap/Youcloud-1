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

            <div className="footer_background">
                <div className="row footer_content py-3">
                    <div className="col-12 col-md-auto list_1">
                        <ul>
                            <li>About us</li>
                            <li>Join Sales</li>
                            <li>Success Stories</li>
                            <li>Press Section</li>
                            <li>Advertise with us</li>
                            <li>Investor Section</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-auto list_2">
                        <ul>
                            <li>Help</li>
                            <li>Feedback</li>
                            <li>Complaints</li>
                            <li>Customer Care</li>
                            <li>Jobs & Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-auto list_3">
                        <ul>
                            <li>Suppliers Tool Kit</li>
                            <li>Sell on YouCloud</li>
                            <li>Latest BuyLead</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-auto list_4">
                        <ul>
                            <li>Buyers Tool kit</li>
                            <li>Post Your Requirement</li>
                            <li>Products You Buy</li>
                            <li>Search Products & Suppliers</li>
                            <li>Pay With YouCloud</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-auto list_5">
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
                <div className="copyright_content d-flex px-4">
                    <span>Copyright <AiFillCopyrightCircle />1996-2021 YouShop Ltd. All rights reserved</span>
                    <span>Terms of Use - Privacy Policy - Link to Us</span>
                </div>
            </div>
      
    )
}


export default footer;