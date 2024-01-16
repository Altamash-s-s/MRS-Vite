import React from "react";
import { useEffect } from 'react';
import SuccessStory from '../../assets/img/home_img/SuccessStory.svg'
import MRS_haeding from '../../assets/img/home_img/MRS_haeding.svg'
import Cloud_Based_Logistics from '../../assets/img/home_img/Cloud_Based_Logistics.png'
import '../../assets/css/success.css'

export default function HomeSuccStory () {

    useEffect(() => {

        var swiper = new Swiper(".StorythumbSlider", {
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            direction: 'vertical',  
            // centeredSlides: true,       
            allowTouchMove: false,
            breakpoints: {
                320: {
                  direction: 'horizontal',
                  slidesPerView: 1,
                },
                768: {
                    direction: 'vertical',
                    slidesPerView: 4,
                  }
              }    
          });

          var swiper2 = new Swiper(".StorymainSlider", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".success-swiper-button-next",
              prevEl: ".success-swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
            direction: 'vertical',
            allowTouchMove: false,  
            breakpoints: {
                320: {
                  direction: 'horizontal',
                  slidesPerView: 1,
                },
                768: {
                    direction: 'vertical',
                  }
              }     
        });

        
    })

    return (
        <>
        <div className="story-sec section-padd-LR">                
                <div className="story-txt-bx">
                    <img className="SuccessStory-img" src={SuccessStory} alt="SuccessStory" />
                    <img className="MRS-haeding" src={MRS_haeding} alt="MRS_haeding" />
                </div>
            <div className="main-container width-1250 flex"> 
                <div className="swiper StorymainSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                        <div className="swiper-slide">
                            <img src={Cloud_Based_Logistics} alt="Cloud_Based_Logistics" />
                        </div>
                    </div>                                      
                </div>
                <div className="swiper StorythumbSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <h4>Supply-Chain Startup MRS Reaches $1.3 Billion Valuation</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                        <div className="swiper-slide">
                            <h4>How This Cloud-Based Logistics Company Could Revolutionize the Global Supply Chain</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                        <div className="swiper-slide">
                            <h4>Warehousing Startup Stord Raises $31 Million As Shipping Surges In Advance Of the Holidays</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                        <div className="swiper-slide">
                            <h4>How This Cloud-Based Logistics Company Could Revolutionize the Global Supply Chain</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                        <div className="swiper-slide">
                            <h4>Supply-Chain Startup MRS Reaches $1.3 Billion Valuation</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                        <div className="swiper-slide">
                            <h4>Supply-Chain Startup MRS Reaches $1.3 Billion Valuation</h4>
                            <a className="read-more" href="#">Raed More</a>
                        </div>
                    </div>
                </div>
                <div className="success-nav">
                        <div className="success-swiper-button-next cursor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="white" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="white" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="white"/></g></svg>
                        </div>
                        <div className="success-swiper-button-prev cursor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="white" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="white" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="white"/></g></svg>
                        </div>
                </div> 
            </div>         
        </div> 
        </>
    )
}