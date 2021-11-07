import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    //loading data
    useEffect(() => {
         fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    },[])

   return(
    <><section className="container my-5 color">
           <p className="text-center fw-bolder">travel Packeges</p>
           <h2 className="text-center fw-bolder">Our <span style={{ color: '#ff4d30' }}>Packeges</span></h2>
           <p className="text-center text-black">"Book tour packages & holidays to travel India or abroad with EaseMyTrip.com. Excellent domestic tours & international travel packages are available."</p>

           {/* render Packages from server side */}
           <div className="row">
               {services.map(service => <Service key={service.id}
                   service={service}></Service>)
                   }
           </div>
       </section></>
   )
}

export default Services;