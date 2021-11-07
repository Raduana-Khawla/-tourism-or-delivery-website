import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../../hooks/useAuth";

const Menubar = () => {
  const {user,logOut} = useAuth()||{};

      return (
       <div>
            <Navbar className="p-3 bg-dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <div className="d-flex">
    <img className="d-inline-block align-top rounded-circle"
          src="https://i.ibb.co/Ttx1xR1/car-travels-logo-tours-and-travels-logo-png.jpg"
      alt="First slide"
          width="100"
          height="60"
        />{' '}
   <div> <span className="design">Tour&Travel</span>
    </div> 
    </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home"><span id="color">Home</span></Nav.Link>
        <Nav.Link as={HashLink} to="/tour"><span id="color">Tour</span></Nav.Link>
        <Nav.Link as={HashLink} to="/services"><span id="color">Packages</span></Nav.Link>
        <Nav.Link as={HashLink} to="/blog"><span id="color">Blog</span></Nav.Link>
        <Nav.Link as={HashLink} to="/myOrders"><span id="color">MyOrders</span></Nav.Link>
        <Nav.Link as={HashLink} to="/adminDashboard"><span id="color"><button className="items btn btn-danger p-1 ">Admin</button></span></Nav.Link>
        {user?.email ?
        <button onClick={logOut} variant="light">Logout</button>
        :<Nav.Link as={Link} to="/login"><span id="color">Login</span></Nav.Link>}
        <Nav.Link as={HashLink} to="/notFound"><span id="color">NotFound</span></Nav.Link>
        <Navbar.Text><span id="color">Signed in as:</span>  <a href="#login">{user?.email}</a> </Navbar.Text> 
     </Navbar.Collapse>
    </Container>
  </Navbar>
       </div>
    );
};

export default Menubar;