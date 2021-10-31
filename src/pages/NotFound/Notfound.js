import React from "react";
import notFound from "../../images/error.jpg";

const NotFound=()=>{
    return(
   <div>
       <img src={notFound} alt=""
          className="d-inline-block w-100"
        />
   </div>
   );
}

export default NotFound;