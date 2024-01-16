import React, { useEffect } from "react";
import '../../assets/css/home.css';
import blog1 from '../../assets/img/home_img/blog1.png'
import blog2 from '../../assets/img/home_img/blog2.png'
import blog3 from '../../assets/img/home_img/blog3.png'
import blog4 from '../../assets/img/home_img/blog4.png'
import Blog_close_icon from '../../assets/img/home_img/Blog_close_icon.svg'
import $ from 'jquery';

export default function HomeBlog () {

    useEffect (() =>  {
        var swiper = new Swiper(".blog-sldr", {
            slidesPerView: 3.1,
            spaceBetween: 70,
            autoplay: {
                delay: 3000,
              },
            breakpoints: {
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3.1,
                },
            }
          });

          
        
        $('.Blog_close_icon').off('click').on('click', function () {
            var $blogBx = $(this).closest('.blog-bx');
                $(this).toggleClass('rotate');
                $('.Blog_close_icon').not(this).removeClass('rotate');

            // Remove the 'test' class from all elements with the class 'blg-inner-dv'
            $('.blg-inner-dv').not($blogBx.find('.blg-inner-dv')).removeClass('test');
            
            // Toggle the 'test' class on the clicked element
            $blogBx.find('.blg-inner-dv').toggleClass('test');
        }); 
              
    })

    return (
        <>
        <div className="blog-sec section-padd-LR">
                <div className="main-container"> 
                <div className="blg-ttl-bx">
                    <h2 className="blog-hdng">News & Blog</h2>
                    <a className="btn grey" href="#">View All</a>
                </div>                    
                        <div className="swiper blog-sldr">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">MRS presents new data hub</h2>
                                                <div className="blg-inner-dv test">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog1} alt="blog1" />                                            
                                        </div>                                        
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">New dimension reached in mobile invoicing</h2>
                                                <div className="blg-inner-dv">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog2} alt="blog2" />                                           
                                        </div>                                        
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">MetaSource Adds European Partner inovoo</h2>
                                                <div className="blg-inner-dv">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog3} alt="blog3" />                                            
                                        </div>                                        
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">Inovoo invests in growth–  management expanded</h2>
                                                <div className="blg-inner-dv">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog4} alt="blog4" />                                            
                                        </div>                                        
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">Inovoo invests in growth–  management expanded</h2>
                                                <div className="blg-inner-dv">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog4} alt="blog4" />                                            
                                        </div>                                        
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="blog-bx">
                                            <div className="blg-content-dv">
                                                <div className="date-box">
                                                    <p>News  ·  22/07/2021 </p>
                                                    <img className="Blog_close_icon" src={Blog_close_icon} alt="Blog_close_icon" />
                                                </div>
                                                <h2 className="post-ttl">Inovoo invests in growth–  management expanded</h2>
                                                <div className="blg-inner-dv">
                                                    <p>Headquartered in Austin, Texas, Gel Blaster Inc. is the original and leading water ball blasting brand and is the fastest growing toy company in the US according to NPD. The company has sold more than 2 million blasters since their launch on Kickstarter.</p>                                        
                                                    <a className="btn grey" href="#">Read more</a>
                                                </div>
                                            </div>
                                            <img className="featur-img" src={blog4} alt="blog4" />                                            
                                        </div>                                        
                                    </div>
                                </div>
                        </div>
                </div>
        </div>
        </>
    )
}