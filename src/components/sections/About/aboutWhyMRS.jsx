import React, { useEffect } from "react";
import Why from '../../../assets/img/about_img/why.svg'
import MRS_Van from '../../../assets/img/about_img/MRS_Van.png'


export default function aboutWhyMRS () {

    useEffect (() => {

        $('.tab-link').click( function() {
	
            var tabID = $(this).attr('data-tab');
            
            $(this).addClass('active').siblings().removeClass('active');
            
            $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
        }); 
       
     })

    return (
        <>
        <div className="whyMrs-section">
            <div className="main-container width-1100 black whyMRS-container1">
                <img src={Why} alt='AboutUs' />
                <div className='row'>
                    <div className='clm-2'>
                        <h3 className='grey why-mrs-txt'>Your trusted ally in Gujarat, providing end-to-end supply chain solutions for seamless operations.</h3>
                    </div>
                    <div className='clm-2'>
                        <img src={MRS_Van} alt='MRS_Van' />
                    </div>
                </div>
            </div>
            <div className="main-container width-1100 black whyMRS-container2">
                <div className="why-wrapper">		
                        <div className="tab-wrapper">
                            <ul className="tabs">
                                    <li className="tab-link active" data-tab="1">Technology</li>
                                    <li className="tab-link" data-tab="2">Quality</li>
                                    <li className="tab-link" data-tab="3">ESG</li>
                            </ul>
                        </div>
                    
                        <div className="content-wrapper">
                    
                            <div id="tab-1" className="tab-content active">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>                                 
                            </div>
                    
                            <div id="tab-2" className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 
                            </div>
                    
                            <div id="tab-3" className="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 
                            </div>                
                        </div>
            
                </div>
            </div>
        </div>
                
            
        </>
    )
}