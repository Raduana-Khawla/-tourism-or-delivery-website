import React from "react";
import './Places.css';

const Places=()=>{
    return(
        <><section>
        <div className="d-flex">
            <div className="col-md-5 p-3">
                <h5>POPULAR DESTINATION</h5>
                <h1>TOP NOTCH DESTINATION</h1>
            </div>
            <div className="col-md-5  ms-5">
                <p>Trip and Travel Blog is the best place to find interesting news, stories and reviews about destinations from all over the world.</p>
            </div>
        </div>
        </section><section className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                    <div className="col-md-6">
                    <div className="card1">
                        <button className="mt-3 me-5 btn-primary">Cox's Bazar</button>
                        <div className="design">
                            <h3 className="text-white">Longest-sea-beach</h3>
                            {/* rating */}
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                   <div className="card2">
                    <button className="mt-3 me-5 btn-primary">Bandarban</button>
                    <div className="design">
                        <h3 className="text-white">Amiakhum</h3>
                {/* rating */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            </div>   
     </div>

                    </div>
                </div> 
                
                <div className="col-md-6">
                   
                {/* </div>
                <div className="col-md-6"> */}
                    <div className="row">
                        <div className="col-md-12 mb-2">
                        <div className="card3">
                        <button className="mt-3 me-5 btn-primary">Cox's Bazar</button>
                        <div className="design">
                            <h3 className="text-white">Longest-sea-beach</h3>
                            {/* rating */}
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* <div className="row"> */}
                        <div className="col-md-12">
                        <div className="card3">
                        <button className="mt-3 me-5 btn-primary">Cox's Bazar</button>
                        <div className="design">
                            <h3 className="text-white">Longest-sea-beach</h3>
                            {/* rating */}
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>

        </section></>
    )
};

export default Places;


