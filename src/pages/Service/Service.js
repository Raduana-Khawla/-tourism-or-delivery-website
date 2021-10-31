import React from "react";
import { faEnvelope, faPhoneAlt,faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Service.css';

const Service=(props)=>{
    const { name, time, imageURL, description, id,price } = props.service;
    return(
            <>   
            <div className="col-md-3 mb-2">
                <img src={imageURL} className="img-fluid rounded h-100" alt="" />
            </div>
            <div className="col-md-9 mb-2 demo">
                <h5 className="text-dark">{name}</h5>
                <p className="text-light">{description}</p>
                <div className="d-flex px-3 space-between">
                    <div className="mx-3 px-3"><Link to="/" style={{ textDecoration: 'none' }} className="text-light">
                        <FontAwesomeIcon icon={faClock} />
                        <span>{time}</span>
                    </Link></div>
                    <div><h3 className="bg-warning mx-3 px-3 fw-bold">Price: {price}</h3>
                    </div>
                </div>
                <div>
                <div className="mx-3 px-3">
                        <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faPhoneAlt} /> <span>0151-22222</span>
                        </Link>
                    </div>
                <div className="mx-3 px-3">
                        <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="ms-3">Envelop</span>
                        </Link>
                    </div>
                    <div className="design">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
               </div>
            </>
);
};

export default Service;




//         <div className="d-flex justify-content-between mx-3 list-unstyled">
//             <div>
//                 <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
//                     <FontAwesomeIcon icon={faPhoneAlt} /> <span>01682-683811</span>
//                 </Link>
//             </div>
//             <div>
//                 <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
//                     <FontAwesomeIcon icon={faEnvelope} />
//                     <span className="ms-3">Envelop</span>
//                 </Link>
//             </div>
//         </div>
//     </div>
//     <div className="d-flex align-items-center justify-content-between">
//         <h3 className="text-dark px-3 fw-bold">Time: {time}</h3>
//         <h3 className="text-dark px-3 fw-bold">Price: {price}</h3>
//     </div>
//     <div className="mb-2">
//         <Link to={`/bookService/${id}`}>
//             <button className="btn px-3 btn-success">Booking Now</button>
//         </Link>
//     </div>
// </div>
// </div>