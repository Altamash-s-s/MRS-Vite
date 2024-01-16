import React from "react";
import Line from '../../../assets/img/home_img/Line.svg'

export default function aboutMissin () {
    return (
        <>
        <div className="mission-section">
            <div className="main-container width-1150 black flex">
                <div className="width-30">
                </div>
                <div className="width-70 overflow">
                    <div className="flex VMV-bx">
                        <h2 className="VMV-ttl txt-shadow">Vision</h2>
                        <p>To be amongst one of top Supply Chain & Industrial Infrastructure Company worldwide.</p>
                    </div>
                    <img src={Line} alt="Line" className="line-img"/>
                    <div className="flex VMV-bx">
                        <h2 className="VMV-ttl">Mission</h2>
                        <p>To build a robust network of Supply Chain & Industrial Infrastructure by adopting the technology and global standard.</p>
                    </div>
                    <img src={Line} alt="Line" className="line-img"/>
                    <div className="flex VMV-bx">
                        <h2 className="VMV-ttl">Values</h2>
                        <p>At MRS we believe delivering our commitments to our clients and stake holders by providing world class service of Logistics and Distribution by incorporating Global Standards of supply chain with local approach of execution of task.</p>
                        
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}