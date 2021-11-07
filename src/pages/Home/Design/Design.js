import React from "react";
import Facebook from "../../../video/Facebook.mp4";

const Design=()=>{
    return(
        <div className="App">
            <video autoPlay loop muted
            style = {{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }}
             >
             <source src={Facebook} type="video/mp4" />
             </video>
             <h2>Features</h2>
             <div className="grid">
             <div className="box box1"></div>
             <div className="box box2"></div>
             <div className="box box3"></div>
             <div className="box box4"></div>
             </div>
        </div>
    )
}

export default Design;