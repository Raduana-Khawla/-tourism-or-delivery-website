import React from "react";
import aboutImage from '../../images/Guider-sakib.jpg';
import './Guider.css';

const Guider=()=>{
    return(
        <div className="my-5 design1">
            <h2 className="mt-3 text-light">Our Guider</h2>
        <div className="">
                <img className="img-fluid w-75 rounded" src={aboutImage} alt="" />
            </div>
        </div>       
           
    )
}

export default Guider;