import React from 'react';
import { useEffect } from 'react';

export default function aboutHistory () {

    useEffect(() => {

        var swiper = new Swiper(".year-sldr", {
            navigation: {
              nextEl: ".year-swiper-button-next",
              prevEl: ".year-swiper-button-prev",
            },
            slidesPerView: 4.1,
            spaceBetween: 0,
          });

    })

    return (
        <>
            <div className="history-section">
                <div className="main-container width-1150">
                    <h2 className='white'>Our History</h2>
                    <div className="history-pegination-arrow">
                                    <div className="year-swiper-button-next cursor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M12 20H28" stroke="#929292" strokeLinecap="round" /><path d="M21 12L29 20L21 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" transform="matrix(-1 0 0 1 41 0)" stroke="#929292"/></g></svg>
                                    </div>
                                    <div className="year-swiper-button-prev cursor hide">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><g opacity="0.7"><path d="M29 20H13" stroke="#929292" strokeLinecap="round"/><path d="M20 12L12 20L20 28" stroke="#929292" strokeLinecap="round"/>    <circle cx="20.5" cy="20.5" r="20" stroke="#929292"/></g></svg>                              
                                    </div>
                            </div>
                    <div className="swiper year-sldr">                            
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="history-bx">                                        
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2009</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2010</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2012</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2016</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2019</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>                                        
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2020</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="history-bx">
                                        <div className="history-content-dv">
                                            <div className='year'>
                                                <h3>2021</h3>
                                            </div>                                         
                                            <div className="inner-history-dv">
                                                <h2>ipsum dolor sit amet, consectetur </h2>
                                                <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit.</p>                                        
                                                
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