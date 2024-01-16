import React from 'react';
import { useEffect } from 'react';
import Team1 from '../../../assets/img/about_img/team1.jpg'
import Linkdien from '../../../assets/img/about_img/linkdien.svg'
import TeamArrow from '../../../assets/img/about_img/TeamArrow.svg'



export default function aboutTeam () {

    useEffect(() => {

        $(document).ready(function() {
            var $imgGallery = $(".team-container1");
            var originalHeight = $imgGallery.height(); // Store the original height
            
            $('.see-all').click(function() {
                $imgGallery.stop().animate({
                    maxHeight: $imgGallery.height() === originalHeight ? $imgGallery[0].scrollHeight : originalHeight
                }, 500, function() {
                    $('.team-arrow').toggleClass('rotate');
                    // console.log("rotate class toggled");

                    if($('.for-opacity').hasClass('opacity-30')){
                        $('.for-opacity').removeClass('opacity-30')
                     }else{
                       $('.for-opacity').toggleClass('opacity-30')
                     }
                });
            });
        });
        
        

    })

    return (
        <>
            <div className="team-section">
                <div className="main-container width-1150 black team-container1">
                    <h2 className='team-ttl'>Team</h2>
                    <div className='team-container'>
                        <div className='team-bx'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                        <div className='team-bx for-opacity opacity-30'>
                            <img src={Team1} alt='team1' />
                            <h4 className='tPosition'>Co-founder & CEO</h4>
                            <div className='flex name-bx'>
                                <h3 className='tNAme'>Kalmesh Gupta</h3>
                                <img src={Linkdien} alt='Linkdien' />
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div className="main-container width-1150 black team-container2">
                    <a className="btn center see-all">See All Team members <img className="team-arrow" src={TeamArrow} alt='TeamArrow' /></a>
                </div>                
            </div>
        </>
    )
}