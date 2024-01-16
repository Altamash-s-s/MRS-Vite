import React from "react";
import MRS_Logo from '../../assets/img/header_img/MRS-Logo.svg'
import Search_icon from '../../assets/img/header_img/mrs_search_icon.svg'


export default function Header() {
    return (
        <>
        <div className="section hdr-sec">
                <div className="main-container width-1250 flex head-container">
                    <div className="clm-2 hdr-clm1">
                        <a href="#"><img src={MRS_Logo} alt="MRS_Logo" /></a>
                    </div>

                    <div className="clm-2 hdr-clm2">
                        <div className="head-links">
                            <a href="#">About Us</a>
                            <a href="#">Service</a>
                            <a href="#">Sectors</a>
                            <a href="#">Media Center</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <img src={Search_icon} alt="Search_icon" />
                        </div>
                    </div>

                </div>
        </div>        
        </>
    )
}