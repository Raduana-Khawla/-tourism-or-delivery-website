import React,{useState} from 'react';
import BannerImage from '../../images/hill.jpg';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    const {signInUsingGoogle,LoginWithEmailAndPassword,setUser,setIsLoading} = useAuth()||{}; 
    const location = useLocation();
    const history = useHistory();
    const url=location.state?.from||"/home"

    const [email, setEmail]=useState("")
     const [password, setPassword]=useState("")

     const handleGetEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleGetPassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault();

         LoginWithEmailAndPassword(email, password)
        .then((res) => 
        {
        setIsLoading(true)
        setUser(res.user);
        history.push(url)
        })
       .catch((error) => {
        })
        .finally(() => {
            setIsLoading(false)
          })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) =>
             {
                setIsLoading(true)
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
                history.push(url);
            })
           .catch((err) => console.log(err))
            .finally(() => {
             setIsLoading(false)
              })
    } ;
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
              <div className="col-md-6 col-sm-12 shadow p-5 bg-danger">
                <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <h6>User Name</h6>
                        <input type="email" onBlur={handleGetEmail} placeholder="Your Email" />
                        <h6>Password</h6>
                        <input type="password" onBlur={handleGetPassword}
                        placeholder="Your Password" />
                    <br /><br />
                        <input className="bg-danger" type="submit"  value="login" />
                    </form>
                    <p className="mt-3">new to dental-clinic?<Link to="/register"><span className="text-white">Create Account</span></Link></p>
                    <br />
                    <button
                    className="btn-primary"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
                </div>
                <div className="col-md-6"style={{ height: "100vh" }} >
                    <img className="img-fluid item" src={BannerImage} alt="" />
                </div>
              </div>
            </div>
    );
};

export default Login;