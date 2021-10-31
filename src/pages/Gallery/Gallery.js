import React from "react";
import './Gallery.css';

const Gallery=()=>{
    return(
        <section className="container">
        <div className="row">
        <div className="col-md-4 mt-3">
            <h5 className="mt-3 highlight">OUR TOUR GALLERY</h5>
            <h1>BEST TRAVELER'S SHARED PHOTOS</h1>
            <p className="mt-5">Travel guides, tour plans, travelogues, trip reports - tourplanner blog is the solution for every single things you want to make your trravel better.</p>
        </div>
        <div className="col-md-4">
           <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/246646837_1398199277243145_5657771549290787788_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=NqL8ta5H7ToAX8A12Pw&_nc_ht=scontent.fdac27-1.fna&oh=f1fcf90f4b9ab39af5edbaeb4910aac4&oe=61A509D5" className="img-fluid item" alt="" />
        </div>
        <div className="col-md-4">
           <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/245967787_1394417480954658_4757977638059218724_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=pDCytfODZZgAX-h-fov&_nc_ht=scontent.fdac27-1.fna&oh=9061544d8ea39e221e9d0a279debf39a&oe=61A3F5F3" className="img-fluid item" alt="" />
        </div>
        </div>
        <div className="row mt-3">
        <div className="col-md-6 ps-2 item2">
           <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/242951344_1379742355755504_3476063412383975423_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=NOOQbzxZkyQAX8_w7H0&_nc_ht=scontent.fdac27-1.fna&oh=e1c3d9fbe69762ad60d7f2afb647ff6e&oe=61A2BD44" className="img-fluid item" alt="" />
        </div>
        <div className="col-md-6 item2">
            <img src="https://i.pinimg.com/564x/ab/85/f0/ab85f0b05917d6e2bd587f29722e0ff8.jpg" className="img-fluid item" alt="" />
        </div>
        </div>
        </section>
    )
}
export default Gallery;