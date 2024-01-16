import React from 'react';
import AboutUs from '../../../assets/img/about_img/about_us.png'

export default function aboutAboutUs () {
    return (
        <>
        <div className="abt_us-section">
            <div className="main-container width-1100 black">
                <h2 className='ttl-45px abt-ttl'>MRS Group: Pioneering Progress, Inspiring Futures</h2>
                <div className='row'>
                    <div className='clm-2 contnt-clm'>
                        <h3 className='grey'>Customizing supply chain solutions for diverse industries and unique requirements.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                    </div>
                    <div className='clm-2 img-clm'>
                        <img src={AboutUs} alt='AboutUs' />
                    </div>
                </div>
            </div>
        </div>
                
            
        </>
    )
}