import React, { useEffect } from "react";
import Header from "../components/global/header";
import AboutSpotlight from "../components/sections/About/aboutSpotlight"
import AboutAboutus from "../components/sections/About/aboutAboutUs"
import AboutMission from "../components/sections/About/aboutMission"
import AboutHistory from "../components/sections/About/aboutHistory"
import AboutTeam from "../components/sections/About/aboutTeam"
import AboutWhyMRS from "../components/sections/About/aboutWhyMRS"
import Awards from '../components/sections/About/aboutAwards'
import Cta from "../components/sections/About/aboutCTA"
import Footer from "../components/global/footer"

export default function Aboutpage () {

    useEffect (() => {
        // gsap.registerPlugin(ScrollTrigger);

        // const locoScroll = new LocomotiveScroll({
        // el: document.querySelector(".pg-body"),
        // smooth: true        
        // });

        // ScrollTrigger.scrollerProxy(".pg-body", {
        // scrollTop(value) {
        //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        // }, 
        // getBoundingClientRect() {
        //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        // },
        // });

        // locoScroll.on("scroll", ScrollTrigger.update);
        // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // ScrollTrigger.refresh();
    })
    
    return (
        <>
        <div className="pg-body">
            <Header />
            <AboutSpotlight />
            <AboutAboutus />
            <AboutMission />
            <AboutHistory />
            <AboutTeam />
            <AboutWhyMRS />
            <Awards />
            <Cta />
            <Footer />
        </div>
        </>
    )
}