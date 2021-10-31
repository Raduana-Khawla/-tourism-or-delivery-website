import React from "react";
import "./Blog.css";

const Blog=()=>{
    return(
        <>
   <div className="title my-5">
            <h2><span className="my-3">Latest News</span></h2>
            <div className="row my-3 p-3">
                <div className="col-md-6">
                   <div className="row">
                        <div className="col-md-6">
                        <img className="img-fluid w-100 h-75" src="https://i.ibb.co/Tb8ChYX/corona.jpg" alt="corona" />
                       </div>
                        <div className="col-md-6">
                        <h3>Latest covid 19 travel rules in bangladesh</h3>
                            <p>All schedule/non-schedule domestic passenger flights and charter flights of Helicopter/General Aviation will remain suspended. Revised travel restrictions due COVID-19 pandemic. Mandatory 14 Days Institutional Quarantine for the Passengers Coming To Bangladesh.</p>
                         </div>
                    </div>
             </div>
             <div className="col-md-6">
             <div className="row">
                        <div className="col-md-6">
                        <img className="img-fluid w-100 h-75" src="https://i.pinimg.com/564x/fd/bb/93/fdbb93c63abca7028c3294e57410f98f.jpg" alt="" />
                       </div>
                        <div className="col-md-6">
                        <h3>Sundarbans mangrove forest in Bangladesh is in danger for the environment</h3>
                            <p>Sundarban is the biggest mangrove forest in the world. Sundarban is in South West part of Bangladesh, in the district of greater Khulna. India shares a bit of the forest with Bangladesh. The total area is about 38,000 square kilo meters.</p>
                         </div>
                    </div>
                </div>
             </div>
        </div>
         <div className="row title2">
         <div className="col-md-12 m-3">
            <h2><span className="text-white" >Blogs</span></h2>
         <div className="col-md-10 col-sm-6 m-5 p-3">
            <h1>1. Telluride, Colorado</h1>
            <p>The first site on our list is the official tourism guide to the city of Telluride, Colorado.</p>
                <img className="img-fluid w-75 h-75 mb-3" src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181232/image192.png" alt="" />
                <p>Right from the start, a prominent image gallery does a lot of the selling on the website for Telluride.</p>
                <p>Bymaking the images so large, the site makes sure the first thing you see is a beautiful landscape.</p>
                <p>This is an example of a site that relies less on copy. Instead of a detail-heavy approach, the design focuses more on the picturesque views and various activities in action.</p>
                <p>Once a visitor is drawn in by the photos, they can opt to click on the main call to action, “Plan Your Spring Trip” for more information.</p>
                <p>From there, visitors can read about the various activities they can do in the city, then purchase any necessary tickets, passes, or equipment rentals.</p>
                <p>This approach works, because it combines attention-grabbing imagery with a clear call to action.</p><br />
            </div>
            <div className="col-md-10 col-sm-6 p-3 m-5">
                 <h1>2.Visit Brasil</h1>
                 <p>Visit Brasil is the country’s official tourism site.</p>
                 <img src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181255/image222.png" alt="" />
                 <p>On the surface, you might think that arranging this site would be a simple process.</p>
                 <p>After all, how difficult could it be to persuade visitors to check out beautiful beaches and hikes through the Amazon?</p>
                 <p>But considering that Brazil is a huge country, making up almost half of the continent of South America, the site has a lot of information to cover.
                 </p>
                 <p>It does this by dividing the various regions into different “Experiences.”</p>
            </div>
            <div className="col-md-10 col-sm-6 p-3 m-5">
                <img className="img-fluid w-75 h-75 mb-3" src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/04/16181142/image123.png" alt="" />
                <p>By breaking the country into smaller, more manageable areas, the site aims to create a virtual travel experience that allows the user to explore the sights of Brazil right from their computer.</p>
                <p>This can help visitors decide where they want to go within this massive country. If they’re looking for a relaxed beach trip, for example, they’ll have very different options from travelers looking for hiking trips or adventure tours.</p>
                <p>Then, once a visitor has selected a destination, the breakdowns on the site will give them an accurate idea of what they can hope to see within the span of their trip.</p>
            </div>
          </div>
         </div>
        </>
    );
}

export default Blog;
