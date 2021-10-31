import React from "react";
import aboutImage from "../../images/about-tour.jpg";
import Guider from "../Guider/Guider";
import './Tour.css';

const Tour=()=>{
    return(
        <>
        <section>
            <hr />
            <p>Editorial Note: A large number of people view this post regularly in search of Bangladesh travel advice and information about travel in Bangladesh. We try to keep it as up to date as possible (we last updated it in January 2020) – to help us do this please let us know about your experiences travelling in <span className="text-danger">Bangladesh that may help fellow travellers</span>. Please comment below or get in touch via our contact page. Thanks! </p>
            <hr />
            <div className="d-flex">
                <div className="col-md-3 m-3">
                <h1>Bangladesh Travel:Know Before you Go.</h1>
                </div>
                <div className="col-md-7 m-3">
                    <p>My time in Bangladesh was a whirlwind and full of surprises (both good and occasionally uncomfortable). It was all the more full of surprises because of the lack of information available online about travel in Bangladesh – many Bangladesh travel blogs were written several years ago, pre 2015 when already low international tourist numbers decreased. And of course, Bangladesh is a country which (sadly) not many foreign travellers make it to…Yet.</p>
                </div>
            </div>
            <hr />
        </section>
        <section className="my-5 container colorfull">
        <div className="row">
            <div className="col-md-5 m-3">
                <img className="img-fluid rounded w-100 h-100" src={aboutImage} alt="" />
            </div>
            <div className="col-md-6 mb-2 mt-5 ms-5">
                <h4><span className="me-5 text-white">Welcome to Tour & Travel agency.</span></h4>
                <br />
                <h3 className="fw-bolder w-50 ms-5">We tour the whole of Bangladesh</h3>
                <br />
                <p className="text-white">Travel to Bangladesh is one of the last opportunities in South East Asia to experience travel with a true sense of adventure: Heading off the beaten track and into a country that does not have an established tourism infrastructure, especially not for foreign tourists. Bangladesh travel is still, in many ways, a journey into the lesser known.</p>
                </div>
        </div>
    </section>
    <Guider></Guider>
    </>
);
};
export default Tour;