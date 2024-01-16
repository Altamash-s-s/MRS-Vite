import React, { useEffect, useRef } from 'react';
import '../../assets/css/home.css';
import Solu_Supply_Chain from '../../assets/img/home_img/Solu_Supply_Chain.jpg'
import Logistics_and_Industrial from '../../assets/img/home_img/Logistics_and_Industrial.jpg'
import Compliance_and_Documentation from '../../assets/img/home_img/Compliance_and_Documentation.jpg'


export default function test() {

  useEffect(() => {
    
  
  })

  return (
    <>
      <div className='main-stck-sec'>
          <div className="container">
            <div className="sticky-section width-1200">
            <div className="solu-clm-3 sticky-solution">
                    <div className="solu-img solu-img1"><img src={Solu_Supply_Chain} alt="Solu_Supply_Chain" /></div>
                    <p className="solu-numbers">01</p>
                    <div className="solu-content">
                      <h2 className="white ttl-45px">End-to-End Supply Chain Management</h2>
                      <ul className="white">
                        <li>Warehousing Solutions</li>
                        <li>Free Trade Zone, Mundra SEZ</li>
                        <li>Surface & Rail Transport</li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className="sticky-section width-1200">
            <div className="solu-clm-3">
                    <div className="solu-img solu-img2"><img src={Logistics_and_Industrial} alt="Logistics_and_Industrial" /></div>
                    <p className="solu-numbers">02</p>
                    <div className="solu-content">
                      <h2 className="white ttl-45px">Regulatory Compliance and Documentation </h2>
                      <ul className="white">
                        <li>Warehousing Solutions</li>
                        <li>Free Trade Zone, Mundra SEZ</li>
                        <li>Surface & Rail Transport</li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className="sticky-section width-1200 section-three">
            <div className="solu-clm-3">
                    <div className="solu-img solu-img3"><img src={Compliance_and_Documentation} alt="Compliance_and_Documentation" /></div>
                    <p className="solu-numbers">03</p>
                    <div className="solu-content">
                      <h2 className="white ttl-45px">Innovative Logistics and Industrial Solutions</h2>
                      <ul className="white">
                        <li>Warehousing Solutions</li>
                        <li>Free Trade Zone, Mundra SEZ</li>
                        <li>Surface & Rail Transport</li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
      </div>
    </>
  );
}