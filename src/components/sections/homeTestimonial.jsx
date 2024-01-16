import React from "react";
import { useEffect } from "react";
import '../../assets/css/home.css';
import testimonial_icon from '../../assets/img/home_img/testimonial_icon.svg'
import Ashley_Right from '../../assets/img/home_img/Ashley_Right.png'
import earth from '../../assets/img/home_img/earth.png'
import map_point_icon from '../../assets/img/home_img/map_point_icon.svg'

export default function HomeTestimonial () {

    useEffect (()=> {
        var swiper = new Swiper(".testml-sldr", {
            navigation: {
              nextEl: ".testml-swiper-button-next",
              prevEl: ".testml-swiper-button-prev",
            },
            slidesPerView: 1,
            spaceBetween: 0,
          });
    })

    return (
        <>
        <div className="testmnl-sec section-padd-LR">
                <div className="main-container flex"> 
                    <div className="clm-2 testmnl-clm1">
                        <div className="swiper testml-sldr">    
                        <img className="testimonial_icon" src={testimonial_icon} alt="testimonial_icon"/>                         
                                <div className="swiper-wrapper">                                
                                    <div className="swiper-slide">                                                                             
                                            <p className="testmnl-para">“Professionals in theircraft! All products were super great with strong attention to details, and overall vibe”</p>
                                                <div className="testmnlProfile-bx">
                                                    <div className="profile-img">
                                                        <img src={Ashley_Right} alt="Ashley_Right" />
                                                    </div>
                                                    <div className="profile-details">
                                                        <h3 className="P-name">Ashley Right</h3>
                                                        <h4 className="P-position">Director at Pinterest</h4>
                                                    </div>
                                                </div>                                                                                                               
                                    </div>
                                
                                    <div className="swiper-slide">                                    
                                            <p className="testmnl-para">“Professionals in theircraft! All products were super great with strong attention to details, and overall vibe”</p>
                                                <div className="testmnlProfile-bx">
                                                    <div className="profile-img">
                                                        <img src={Ashley_Right} alt="Ashley_Right" />
                                                    </div>
                                                    <div className="profile-details">
                                                        <h3 className="P-name">Ashley Right</h3>
                                                        <h4 className="P-position">Director at Pinterest</h4>
                                                    </div>
                                                </div>                                                                                                               
                                    </div>
                                    <div className="swiper-slide">                                    
                                            <p className="testmnl-para">“Professionals in theircraft! All products were super great with strong attention to details, and overall vibe”</p>
                                                <div className="testmnlProfile-bx">
                                                    <div className="profile-img">
                                                        <img src={Ashley_Right} alt="Ashley_Right" />
                                                    </div>
                                                    <div className="profile-details">
                                                        <h3 className="P-name">Ashley Right</h3>
                                                        <h4 className="P-position">Director at Pinterest</h4>
                                                    </div>
                                                </div>                                                                                                           
                                    </div>
                                    <div className="swiper-slide">                                    
                                            <p className="testmnl-para">“Professionals in theircraft! All products were super great with strong attention to details, and overall vibe”</p>
                                                <div className="testmnlProfile-bx">
                                                    <div className="profile-img">
                                                        <img src={Ashley_Right} alt="Ashley_Right" />
                                                    </div>
                                                    <div className="profile-details">
                                                        <h3 className="P-name">Ashley Right</h3>
                                                        <h4 className="P-position">Director at Pinterest</h4>
                                                    </div>
                                                </div>                                                                                                             
                                    </div>
                                </div>

                                <div className="testml-pegination">
                                        <div className="testml-swiper-button-next cursor">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="#929292" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="#929292"/></g></svg>
                                        </div>
                                        <div className="testml-swiper-button-prev cursor">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="#929292" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="#929292"/></g></svg>                              
                                        </div>
                                </div>

                            </div>
                    </div>
                    <div className="clm-2 testmnl-clm2">
                        <img className="earth" src={earth} alt="earth" />
                            <div className="our-presence">
                                <div className="presence-bx">
                                    <h2>Our Presence</h2>
                                    <img src={map_point_icon} alt="map_point_icon" />
                                </div>
                                
                                <p>MRS  PVT LTD., Plot No-20, Sector – 14, Gurgaon -122001, Haryana, India</p>
                                <a className="text-decoration" href="mailto:connect@MRSsupplychain.com">connect@mrssupplychain.com</a>
                                <a href="tel:0124 674 0200">0124 674 0200</a>
                            </div>                        
                    </div>                   
                </div>
            </div>
        </>
    )
}