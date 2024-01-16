// import React from "react";
import '../../assets/css/home.css';
import '../../assets/img/home_img/Home_about.png'
import white_Arrow from '../../assets/img/home_img/white_Arrow.svg'
import React, { useEffect, useRef } from 'react';
import Proximity_Hazira from '../../assets/img/home_img/Proximity_Hazira.svg'


export default function HomeAdvantage () {

    // const stickyWrapperRef = useRef(null);

    // useEffect(() => {
    //     let scrollEnabled = false;
    
    //     const handleWheel = (event) => {
    //       if (scrollEnabled) {
    //         const delta = event.deltaY || event.deltaX || event.deltaZ;
    //         const scrollSpeed = 0.9; // Adjust the scroll speed as needed
    
    //         stickyWrapperRef.current && (stickyWrapperRef.current.scrollLeft += delta * scrollSpeed);
    //       }
    //     };
    
    //     const handleIntersection = (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           // Element is in viewport, enable horizontal scrolling
    //           scrollEnabled = true;
    //         } else {
    //           // Element is not in viewport, disable horizontal scrolling
    //           scrollEnabled = false;
    //         }
    //       });
    //     };
    
    //     const observer = new IntersectionObserver(handleIntersection, {
    //       root: null,
    //       rootMargin: '0px',
    //       threshold: 0.8, // Adjust threshold as needed
    //     });
    
    //     observer.observe(stickyWrapperRef.current);
    
    //     window.addEventListener('wheel', handleWheel);
    
    //     return () => {
    //       observer.disconnect();
    //       window.removeEventListener('wheel', handleWheel);
    //     };
    //   }, []);


    return (
        <>
        {/* <div className="advantg-sec">
                <div className="main-container width-1100 advantg-contnr flex">
                    <div className="clm-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="412" height="139" viewBox="0 0 412 139" fill="none">
                        <path d="M106.734 136.337H107.158L107.227 135.918L120.172 57.3816H120.512L120.512 135.837V136.337H121.012H164.029H164.529V135.837V3.52368V3.02368L164.029 3.02368L98.4198 3.02368H97.9906L97.9255 3.44783L84.2205 92.7382L69.0904 3.44016L69.0198 3.02368H68.5974L1 3.02368H0.5L0.5 3.52368L0.5 135.837V136.337H1H44.0165H44.5165V135.837L44.5165 57.2302L60.3353 135.935L60.416 136.337H60.8255H106.734ZM221.177 135.837V89.8289H224.859L243.529 136.024L243.656 136.337H243.993H292.07H292.839L292.527 135.634L269.039 82.7019C286.451 73.3294 288.594 56.6552 288.594 44.9842C288.594 33.1745 285.222 22.666 277.602 15.111C269.98 7.55552 258.179 3.02368 241.463 3.02368L174.95 3.02368H174.45V3.52368V135.837V136.337H174.95H220.677H221.177V135.837ZM409.9 38.6277L410.447 38.5384L410.302 38.0029C406.839 25.2781 400.083 15.8866 390.549 9.68417C381.024 3.48752 368.766 0.5 354.332 0.5C335.555 0.5 320.212 4.84156 309.549 12.7435C298.87 20.6573 292.922 32.1182 292.922 46.2461C292.922 61.8257 299.241 71.1755 308.124 77.0818C316.963 82.9589 328.311 85.4054 338.334 87.2966L338.335 87.2969C340.926 87.7754 343.413 88.1756 345.742 88.5505C346.71 88.7062 347.65 88.8575 348.559 89.0082C351.668 89.5236 354.416 90.0323 356.701 90.6883C358.993 91.3461 360.766 92.1378 361.963 93.1887C363.135 94.219 363.772 95.5136 363.772 97.2605C363.772 99.3556 362.945 100.77 361.537 101.686C360.095 102.624 357.994 103.07 355.416 103.07C349.653 103.07 345.564 101.305 342.651 98.9239C339.73 96.5362 337.964 93.5054 336.9 90.94L336.752 90.5831L336.369 90.6364L288.473 97.3061L287.931 97.3815L288.055 97.9143C291.153 111.274 297.863 121.443 308.584 128.26C319.29 135.067 333.945 138.5 352.886 138.5C368.495 138.5 382.891 134.971 393.398 127.203C403.926 119.419 410.5 107.413 410.5 90.5908C410.5 82.7219 408.835 76.5046 406.003 71.5502C403.172 66.5961 399.19 62.9337 394.603 60.1495C385.779 54.7945 374.659 52.6638 365.068 50.826C364.712 50.7577 364.357 50.6898 364.005 50.6221L364.001 50.6214C358.112 49.5371 352.886 48.5091 349.13 46.891C347.256 46.0839 345.788 45.1458 344.791 44.0143C343.805 42.8949 343.264 41.5695 343.264 39.9368C343.264 38.1246 344.036 36.8389 345.342 35.9838C346.676 35.1109 348.6 34.6684 350.897 34.6684C357.238 34.6684 361.101 40.1389 362.891 45.8548L363.021 46.2685L363.449 46.1987L409.9 38.6277ZM227.184 56.5618H221.177V38.8145H230.257C235.17 38.8145 237.949 39.8857 239.508 41.4199C241.061 42.9485 241.505 45.0369 241.505 47.3276C241.505 49.4676 241.067 51.086 240.328 52.3176C239.59 53.5468 238.53 54.4267 237.224 55.0567C234.583 56.3307 230.986 56.5618 227.184 56.5618Z" stroke="white"/>
                    </svg>
                    <h2 className="ttl-60px uppercase white">Powerhouse Advantage</h2>
                    </div>
                    <div className="clm-2 advtg-clm2">
                        <h4 className="white">Opting for MRS Group Solutions Near Major Ports</h4>
                        <button className="white">Explore the Advantage <img src={white_Arrow} alt="Arrow" /> </button>
                    </div>                    
                </div>
                

        </div> */}
        </>
    )
}