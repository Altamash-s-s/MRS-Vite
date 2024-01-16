import React from "react";
import { useEffect } from "react";
import '../../assets/css/home.css';
import Science_and_Health_Care from '../../assets/img/home_img/Science_and_Health_Care.jpg'
import Solar_Energy from '../../assets/img/home_img/Solar_Energy.jpg'
import Automobile from '../../assets/img/home_img/Automobile.jpg'
import Chemical from '../../assets/img/home_img/Chemical.jpg'

export default function HomeSector () {

    useEffect ( () => {
        var swiper = new Swiper(".sector-sldr", {
            navigation: {
              nextEl: ".sector-swiper-button-next",
              prevEl: ".sector-swiper-button-prev",
            },
            slidesPerView: 3.1,
            spaceBetween: 40,
            breakpoints: {
                320: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 2.1,
                },
                1024: {
                    slidesPerView: 3.1,
                  },
              }
          });
    })

    return (
        <>            
            <div className="sector-sec section-padd-LR">
                <div className="main-container"> 
                    <h2 className="sectr-ttl black">Key Sectors we work with</h2>             
                        <div className="swiper sector-sldr">
                             <div className="pegination-arrow2">
                                    <div className="sector-swiper-button-next cursor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="#929292" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="#929292"/></g></svg>
                                    </div>
                                    <div className="sector-swiper-button-prev cursor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="#929292" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="#929292"/></g></svg>                              
                                    </div>
                            </div>

                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Science_and_Health_Care} alt="Science_and_Health_Care" />
                                        <div className="content-dv">
                                            <h2>Key Sectors we work with</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Solar_Energy} alt="Solar_Energy" />
                                        <div className="content-dv">
                                            <h2>Solar & Green Energy</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Automobile} alt="Automobile" />
                                        <div className="content-dv">
                                            <h2>Automobile Industry</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Chemical} alt="Chemical" />
                                        <div className="content-dv">
                                            <h2>Chemical</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Science_and_Health_Care} alt="Science_and_Health_Care" />
                                        <div className="content-dv">
                                            <h2>Key Sectors we work with</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Solar_Energy} alt="Solar_Energy" />
                                        <div className="content-dv">
                                            <h2>Solar & Green Energy</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sector-bx">
                                        <img src={Automobile} alt="Automobile" />
                                        <div className="content-dv">
                                            <h2>Automobile Industry</h2>
                                            <div className="inner-content-dv">
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                <a className="btn grey" href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </>
    )
}