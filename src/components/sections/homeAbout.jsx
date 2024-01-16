import React, { useEffect } from "react";
import '../../assets/css/home.css';
import '../../assets/img/home_img/Home_about.png'
import Home_about from '../../assets/img/home_img/Home_about.png'
import blue_Arrow from '../../assets/img/home_img/blue_Arrow.svg'
import Clients_icon from '../../assets/img/home_img/Clients_icon.svg'
import MT_Cargo_icon from '../../assets/img/home_img/MT_Cargo_icon.svg'
import TEUs_icon from '../../assets/img/home_img/TEUs_icon.svg'


export default function HomeAbout() {

    useEffect (() => {

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
            <div className="section section-padd-LR hm-abt-sec">
                <div className="main-container width-1100 flex">

                    <div className="clm-2">
                        <p className="grey uppercase normalidad-wide" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">about US</p>
                        <div className="ovrflw-hdn">
                            <h2 className="ttl-60px black animte">All Supply</h2>
                        </div>    
                        <div className="ovrflw-hdn">
                            <h2 className="ttl-60px black animte delay-5s">Chains are Not</h2>
                        </div> 
                        <div className="ovrflw-hdn">
                            <h2 className="ttl-60px black animte delay-7s">Created Equal</h2>
                        </div>                                            
                        <img src={Home_about} alt="Home about" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" className="hm-abt-img"/>
                    </div>

                    <div className="clm-2">                        
                        <p className="black abt-para" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. </p>                        
                        <button className="blue" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="0">Learn more about MRS Offerings <img src={blue_Arrow} alt="Arrow" /> </button>                        
                        <div className="numbers-sec">
                            <div className="numbers-dv" data-aos="fade-in" data-aos-delay="1000">                                
                                <h4 className="numbers blue"> 1.5K+</h4>                                                            
                                <p className="grey numbers-desc">Total no. of Clients Served</p>
                                <div className="img-bx"><img src={Clients_icon} alt="Clients_icon" /></div>
                            </div>
                            <div className="numbers-dv" data-aos="fade-in" data-aos-delay="1100">                                
                                <h4 className="numbers blue">18K+</h4>                                                               
                                <p className="grey numbers-desc">Total no. of MT Cargo Handled</p>
                                <div className="img-bx"><img src={MT_Cargo_icon} alt="MT_Cargo_icon" /></div>
                            </div>
                            <div className="numbers-dv" data-aos="fade-in" data-aos-delay="1200">
                                <h4 className="numbers blue">2K+</h4>                                                                 
                                <p className="grey numbers-desc num-third-para">Total no. of TEUs Handled of Import Cargo Handled Every Year</p>
                                <div className="img-bx"><img src={TEUs_icon} alt="TEUs_icon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
    }   