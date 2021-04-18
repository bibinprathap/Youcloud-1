import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { HiOutlineUser } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa'
import { BiHeart, BiCartAlt, BiSearch, BiHelpCircle } from 'react-icons/bi'
import { AiOutlineShop } from 'react-icons/ai'
import { GrShieldSecurity } from 'react-icons/gr';
import './nav.css'
import MaterialIcon from 'react-google-material-icons'

const nav = ({ count }) => {
    return (
        <div className="w-100">
            <header className="nav-2">
                <div className="head-2 container">

                    <span><ImLocation2 />&nbsp; Dubai Festival City - Dubai</span>
                    <span><FaBars />&nbsp; &nbsp;Blog &nbsp;&nbsp;<HiOutlineUser />&nbsp;Register or Sign in</span>
                </div>
            </header>
            <div className="youshop col-lg-12 col-md-12 p-0">
                <div className="icon container pt-3 pb-3">
                    <div className="col-lg-4 col-sm-12">
                    <div>
                        <span className="you">You</span>
                        <span className="shop">Shop</span>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                    <form>
                        <div className="search_form">
                            <input className="search_input" type="text" name="place" placeholder="Dubai, AL Karama" />
                            <button className="search"><BiSearch /></button>
                        </div>
                    </form>
                    </div>

                    <div className="col-lg-4 col-sm-12 nav_icon_right">
                        <span className="side_icons"><MaterialIcon icon="perm_identity" size={30}/></span>&nbsp;&nbsp;
                    <span className="side_icons"><BiHeart /></span>&nbsp;&nbsp;
                    <span className="side_icons"><BiCartAlt /></span><span className="counter">{count}</span>
                    </div>
                </div>
                <div className="header3">
                <div className="container pt-3 pb-3">
                    <span><GrShieldSecurity className="support_icons" />&nbsp;&nbsp;Covid-19 Supplies</span>
                    <span><AiOutlineShop className="support_icons" />&nbsp;&nbsp;Nearby Shops</span>
                    <span><BiHelpCircle className="support_icons" />&nbsp;&nbsp;Help</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default nav;