import React,{useState} from "react";
import useAuth from '../../hooks/useAuth';
import { Link,useLocation, useHistory } from 'react-router-dom';
 
const Register = () => {
    const {signInUsingGoogle,createAccountWithGoogle,setUser , setIsLoading,updateName } = useAuth()||{}; 

    const location = useLocation()
    const history = 
    useHistory()
    const url=location.state?.from||"/home"
    
     const [name, setName]
     =useState("")
     const [email, setEmail]=useState("")
     const [password, setPassword]=useState("")
    
    const handleGetName=(e)=>{
        setName(e.target.value)
    }
    const handleGetEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleGetPassword=(e)=>{
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleRegister=(e)=>{
        e.preventDefault();
        createAccountWithGoogle(email,password)
        .then((res) => {
            setIsLoading(true)
             updateName(name)
            setUser(res.user)
            history.push(url);
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
          })
          .finally(()=> {
            setIsLoading(false)
          })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((res) => {
                    setIsLoading(true)
                    setUser(res.user)
                    history.push(url)
                  })
                .catch((err) => console.log(err))
                .finally(() => {
                  setIsLoading(false)
                })
    };
    return(
     <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-12 shadow p-5  bg-warning">
                    <h2>Register: Create Account</h2>
                    <form onSubmit={handleRegister}>
                        <input type="name" onBlur={handleGetName}
                        placeholder="Your Name" />
                        <br /><br />
                        <input type="email" onBlur={handleGetEmail} placeholder="Your Email" />
                        <br /><br />
                        <input type="password" onBlur={handleGetPassword} placeholder="Your Password" />
                        <br /><br />
                        <input className="btn-primary" type="submit" />
                    </form>
                    <p>Already have an Account?<Link to="/login"><span className="text-white">Login</span></Link></p>
                <button
                    className="btn-primary"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div></div>
            </div>
    );
};

export default Register;