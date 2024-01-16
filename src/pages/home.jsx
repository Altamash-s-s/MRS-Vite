import React from "react";
import Header from "../components/global/header";
import HomeAbout from "../components/sections/homeAbout"
import Homeadvantage from "../components/sections/homeAdvantage"
import HomeSpotlight from "../components/sections/homeSpotlight"
import Homesolution from "../components/sections/homeSolution"
import HomeSolutionSticky from "../components/sections/homeSolutionSticky"
import HomeSector from "../components/sections/homeSector"
import HomeClients from "../components/sections/homeClients"
import HomeSuccStory from "../components/sections/homeSuccStory"
import HomeTestimonial from "../components/sections/homeTestimonial"
import HomeBlog from "../components/sections/homeBlog"
import Footer from "../components/global/footer"
import Test from "../components/sections/test"
 
export default function Homepage() {
    return (
        <>
          <Header />
          <HomeSpotlight />
          <HomeAbout />
          <Homeadvantage /> 
          <Test />         
          <Homesolution />
          <HomeSolutionSticky />
          <HomeSector />
          <HomeClients />
          <HomeSuccStory />
          <HomeTestimonial />
          <HomeBlog />
          <Footer />
          
        </>
    )
    }   