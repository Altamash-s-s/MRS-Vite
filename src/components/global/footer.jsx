import React from "react";
import message_icon from '../../assets/img/footer_img/message_icon.svg'
import { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {

        if (!$('.marquee').data('isMarqueeInitialized')) {
            $('.marquee').data('isMarqueeInitialized', true);
          
            $('.marquee').marquee({
              //speed in milliseconds of the marquee
              duration: 9000,
              //gap in pixels between the tickers
              gap: 50,
              //time in milliseconds before the marquee will start animating
              delayBeforeStart: 0,
              //'left' or 'right'
              direction: 'left',
              //true or false - should the marquee be duplicated to show an effect of continuous flow
              duplicated: true
            });
        }

    })

    return(
        <>
        <div className="section footer-sec section-padd-LR">
                <div className="main-container width-1200 flex foo-contanr">
                <div className="clm-2 footr-clm1">
                    <img src={message_icon} alt="message_icon" />
                    <h2 className="white">Subscribe to Newsletters</h2>
                    <p className="white">Want to stay up to date? Sign up for MRS’s biannual update </p>
                    <form>
                        <div className="email">
                            <label className="form__label hide">Email </label>
                            <input  type="email" id="email" className="form__input" placeholder="Enter your email"/>
                        </div>
                        <button type="submit" className="submit-btn">Subscribe</button>
                    </form>
                </div>
                <div className="clm-2 footr-clm2">
                    <div className="foo-links">
                        <a href="#">Home.</a>
                        <a href="#">Service.</a>
                        <a href="#">Sectors.</a>
                        <a href="#">Media Center.</a>
                        <a href="#">Careers.</a>
                        <a href="#">Contact.</a>
                    </div>

                    <div className="foo-innr-container">
                        <div className="clm-2">
                            <h6 className="white">Head Office</h6>
                            <p>MRS Towers, Plot No-20, Sector – 44, Gurgaon -122001, Haryana,India</p>
                            <p className="site-credit">© 2023, MRS Supply Chain. All Rights Reserved.</p>
                        </div>
                        <div className="clm-2 foo-innr-clm2">
                            <h6 className="white">Email</h6>
                            <a href="mailto:Info@mrssupplychain.in">Info@mrssupplychain.in</a>

                            <h6 className="white phone">Phone</h6>
                            <a href="tel:0124 674 0200">0124 674 0200</a>
                            <div className="foo-bottom-links">
                                <a href="#">Legal Notice</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Linkedin</a>
                            </div>
                        </div>
                    </div>

                </div>
                </div>        
        </div>

        <div className="section bottom-footer-sec">
            <div className="main-container">
                <h2 className="marquee">We are the 1st Company in Kutch to Provide Single Largest Warehouse of Grade A category</h2>
            </div>
        </div>
        </>
    )
}