import React from 'react';
import { useEffect } from 'react';
import Awards_ttl from '../../../assets/img/about_img/Awards_ttl.svg'
import Awrds1 from '../../../assets/img/about_img/awrds1.jpg'
import Awrds2 from '../../../assets/img/about_img/awards2.jpg'

export default function aboutAwards () {

    useEffect(() => {

        var swiper = new Swiper(".awards-sldr", {
            navigation: {
              nextEl: ".awards-swiper-button-next",
              prevEl: ".awards-swiper-button-prev",
            },
            slidesPerView: 3,
            spaceBetween: 50,
            // centeredSlides: true,
            // loop: true,
          });

    })

    return (
        <>
            <div className="awards-section">
                <div className='awrd-ttl'>
                    <img src={Awards_ttl} alt='Awards_ttl' />
                </div>
                <div className="main-container width-1150">
                    <h2 className='grey awrds-sub-ttl'>Port-to-porch logistics and integrated software, built together to drive business results.</h2>
                    <div className="awards-pegination-arrow">
                                    <div className="awards-swiper-button-next cursor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="#929292" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="#929292"/></g></svg>
                                    </div>
                                    <div className="awards-swiper-button-prev cursor hide">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="#929292" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="#929292"/></g></svg>                              
                                    </div>
                    </div>
                    <div className="swiper awards-sldr">                            
                            <div className="swiper-wrapper white">
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>                                        
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds2} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>                                       
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="award-bx">                                        
                                        <img src={Awrds1} alt='Awrds1' />
                                        <h2>Fleet Management Software Momentum Leader</h2>
                                        <p>Products in the Leader tier of the Momentum Grid® are highly rated and rank within the top 25% of their category.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>            
        </>
    )
}