import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
function Home(props) {
  const [content, setContent] = useState("");
  const user = useSelector(state=>state.auth.user);
  const navigate = useNavigate();

  if (user == null) {
    return (
      <div className="card" style={{"background-color":"transparent"}}>
        <h1>
          Welcome to Online Assessment PlatForm
        </h1>
        <h2>Login OR Register to Continue</h2>
        <Link className="btn btn-outline-primary m-2" style={{ width: 100 }} to="/login">Login</Link>
        <Link className='btn btn-outline-dark m-2' style={{ width: 100 }} to="/register">SignUp</Link>
      </div>
    );

  }
  else {
    if (user.roles.includes("INSTRUCTOR")) {
      navigate("/instructor")
    }
    if (user.roles.includes("STUDENT")) {
      navigate("/student")
    }
  }
}

export default Home;