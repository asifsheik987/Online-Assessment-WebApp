import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationService from "../services/AuthenticationService"
import InstructorBoard from './InstructorBoard';
import StudentBoard from './StudentBoard';
function Home(props) {
    const[content , setContent] = useState("");
    const[user,setUser] = useState(null);
    const navigate = useNavigate();
    //let user = null;
    

    useEffect(()=>{
      setUser(AuthenticationService.getCurrentUser());
      console.log(user);
        // AuthenticationService.getCurrentUser().then(
        //     (response) => {
        //         console.log(response);
        //         setContent(response.data);
        //     }
            // (error) => {
            //     const content =
            //       (error.response && error.response.data) ||
            //       error.message ||
            //       error.toString();
        
            //     setContent(content);
            //   }
       // );
    },[]);
    if(user==null){
      return (
        <div className="card">
          <h1>
            Welcome to Online Assessment PlatForm
          </h1>
          <h2>Login OR Register to Continue</h2>
          <Link className="btn btn-outline-primary m-2" style={{width:100}} to="/login">Login</Link>
          <Link className='btn btn-outline-dark m-2' style={{width:100}} to="/register">SignUp</Link>
        </div>
        );
      
    }
    else{
      if(user.roles.includes("INSTRUCTOR")){
        navigate("/instructor")
      }
      if(user.roles.includes("STUDENT")){
        navigate("/student")
      }
    }
    // return (
    // <div className="card">
    //   <h1>
    //     Welcome to Online Assessment PlatForm
    //   </h1>
    // </div>
    // );
}

export default Home;