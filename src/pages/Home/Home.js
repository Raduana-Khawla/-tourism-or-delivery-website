import React from "react";
import Banner from "../../components/Shared/Banner/Banner";
import Contacts from "../Contact/Contacts";
import Gallery from "../Gallery/Gallery";
import Places from "../Services/Places/Places";
import BookingSpot from "./BookingSpot/BookingSpot";
import Services from "../Services/Services";
import './Home.css';

const Home=()=>{
    return(
   <div>
      <Banner></Banner>
      <Services></Services>
      <Places></Places>
      <section className="container display p-3 m-5">
       <div>
           <h3 className="text-light">"Join, Let's Go To Bangladesh" !Group</h3>
           <p className="text-light">Stay Updated about Bangladesh, see stunning photos of Bangladesh, meet numerous travelers from around the world who have already visited Bangladesh, and ask Bangladesh travel questions.</p>
           <a href=""><span className="text-light">!join now</span></a>
       </div>
      </section>
      <Gallery></Gallery>
      <Contacts></Contacts>
      <BookingSpot></BookingSpot>
   </div>
    )
}

export default Home;