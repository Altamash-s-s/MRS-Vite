import React from "react";
import '../../../assets/css/about.css'
import About_MRS from '../../../assets/img/about_img/About_MRS.jpg'
import Line from '../../../assets/img/home_img/Line.svg'


export default function AboutSpotlight () {
    return (
        <>
        <div className="section inner-spotlight-sec section-padd-LR overflow" >
            <div className="main-container width-1250 flex">
                <div className="inner-spot-clm-1">
                    <h1 className="white">About MRS Group</h1>
                    <h2 className="sldr-sub-ttl">Legacy Insights</h2>
                    <img src={Line} alt="Line" />
                    <p className="white">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt.</p>
                    <a className="btn inner-spt-btn white" href="#">Home {' > '}  About Us</a>
                </div>                
            </div>
            <div className="inner-img-sec">                
                <div className="inner-spot-clm-2">
                    <img src={About_MRS} alt="supplyChainImage" />
                </div>
            </div>

        </div>
        
        </>
    )
}