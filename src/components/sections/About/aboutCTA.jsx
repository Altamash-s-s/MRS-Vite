import React from "react";
import { useEffect } from "react";
import '../../../assets/css/home.css';
import About_CTA from '../../../assets/img/about_img/about_CTA.png'
import white_Arrow from '../../../assets/img/home_img/white_Arrow.svg'



export default function aboutCTA () {

    useEffect (() =>  {
        
    })
    return (
        <>
        <div className="cta-sec">                  
                <div className="main-container">
                    <div className="client-img-bx global-cta">
                        <img className="first_Company-img" src={About_CTA} alt="About_CTA"/>
                        <div className="client-contnt-bx">
                            <h2 className="white ttl-60px">We are the 1st Company in Kutch to Provide Single Largest Warehouse of Grade <b>A</b> category</h2>
                                <div className="client-btn">
                                    <a href="#">Discover Now our Offering <img src={white_Arrow} alt="Arrow" /></a>
                                </div>
                            
                        </div>                        
                    </div>
                </div> 
                           
        </div>
        </>
    )
}