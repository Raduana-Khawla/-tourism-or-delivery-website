// import React, { useState } from "react";
// import { useEffect } from "react";
// import useAuth from "../../hooks/useAuth";

// const MyEvents = () => {
//   const { user,email } = useAuth();
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:8000/myEvents/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setEvents(data));
//   }, [user.email]);

//   console.log(events);
//   return (
//     <div>
//       <h1>My evtns : {events.length}</h1>
//     </div>
//   );
// };

// export default MyEvents;