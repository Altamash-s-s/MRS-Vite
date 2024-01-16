import React from "react";
import supplyChainImage from '../../assets/img/home_img/Supply_Chain.png';
import '../../assets/css/slider-sec.css';
import { useEffect } from 'react';


export default function HomeSpotlight() {

    useEffect(() => {

        var swiper = new Swiper(".thumbSlider", {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mainSlider", {
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
            swiper: swiper,
            },
            effect: "creative",
            creativeEffect: {
                prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
                },
                next: {
                translate: ["100%", 0, 0],
                },
            },
        });

        //text revelAnimation inside page
    var isInViewport = function(elem) {
        var distance = elem.getBoundingClientRect();
        return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
  
    var findMe = document.querySelectorAll('.animte');
    
    window.addEventListener('scroll', function(event) {
    // add event on scroll
    findMe.forEach(element => {
        //for each .thisisatest
        if (isInViewport(element)) {
            //if in Viewport
            element.classList.add("animt");
        }
    });
    }, false);
  
   
    AOS.init();

    })

return (
    <>
        <div className="section slider-sec section-padd-LR">
            <div className="main-container width-1250 flex">            
                    <div className="swiper thumbSlider">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide">                        
                            <div className="ovrflw-hdn">
                                <h1 className="white animte delay-7s">Make Your Supply Chain A Competitive Advantage</h1>
                            </div> 
                            <div className="ovrflw-hdn">                     
                                <h2 className="sldr-sub-ttl animte delay-8s">Optimize Advantage</h2>   
                            </div>  
                            <div className="ovrflw-hdn">                                           
                                <p className="white sldr-para animte delay-9s">Port-to-porch logistics and integrated software, built together to drive business results.</p>
                            </div>
                            <div className="ovrflw-hdn">
                                <a className="btn white animte delay-9s" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ovrflw-hdn">
                                <h1 className="white  animte delay-5s">Make Your Supply Chain A Competitive Advantage</h1>
                            </div>
                            <h2 className="sldr-sub-ttl">Optimize Advantage</h2>
                            <p className="white sldr-para">Port-to-porch logistics and integrated software, built together to drive business results.</p>
                            <a className="btn white" href="#">Learn More</a>
                        </div>
                        <div className="swiper-slide">
                            <h1 className="white">Make Your Supply Chain A Competitive Advantage</h1>
                            <h2 className="sldr-sub-ttl">Optimize Advantage</h2>
                            <p className="white sldr-para">Port-to-porch logistics and integrated software, built together to drive business results.</p>
                            <a className="btn white" href="#">Learn More</a>
                        </div>
                        </div>
                    </div>  

                    <div className="swiper mainSlider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={supplyChainImage} alt="supplyChainImage" />
                            </div>
                            <div className="swiper-slide">
                                <img src={supplyChainImage} alt="supplyChainImage" />
                            </div>
                            <div className="swiper-slide">
                                <img src={supplyChainImage} alt="supplyChainImage" />
                            </div>
                        </div>                        
                    </div> 
                    <div className="pegination-arrow">
                            <div className="swiper-button-next cursor">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="white" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="white" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="white"/></g></svg>
                            </div>
                            <div className="swiper-button-prev cursor">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="white" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="white" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="white"/></g></svg>                              
                            </div>
                            <div className="swiper-pagination"></div>  
                    </div>
            </div>         
        </div>   
    </>
)
}   




  



