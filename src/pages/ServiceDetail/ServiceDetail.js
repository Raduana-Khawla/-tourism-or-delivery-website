import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/spot')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  const Details = data.filter(detail => detail.id === id); 
    return (
        <>
        <h2>Package Details</h2>
        <div className="m-5 d-flex justify-content-center align-items-center">
        <div className="card w-50 h-75 text-center rounded title">
          <div className="d-flex justify-content-center align-items-center h-50 p-2">
                <img src={Details[0]?.imageURL} className="card-img-top h-50 w-50" alt="" />
            </div>
       <div className="text-dark">
       <h3>Name : {Details[0]?.name}</h3>
        <h5>time : {Details[0]?.time}</h5>
        <p>description : {Details[0]?.description}</p>
       </div>
    </div>
    </div>
    </>
    );
};

export default ServiceDetail;