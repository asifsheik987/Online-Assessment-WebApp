import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
function Home(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigate = useNavigate();

  if (user === null) {
    return (
      // <div className="container-fluid" style={{
      //     "background-image": "url('./exam.jpg')",
      //     "background-size": "100% 100%"
      //   }}>
      //   <div className='row'>
      //     <div className='col-12 '>
      //       <h1 className='mbr-section-title mbr-fonts-style mb-3 display-1'>
      //         <strong>Online Assessment PlatForm</strong>
      //       </h1>
      //       <p className='mbr-text mbr-fonts-style display-5'>" Here you can attempt the exam and see your performance !!! "</p>
      //       <div className='mbr-section-btn mt-3 text-center'>
      //       <Link className="btn btn-lg btn-primary display-7 m-3" to="/login">Login</Link>
      //       <Link className='btn btn-lg btn-success display-7 m-3' to="/register">SignUp</Link>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div class="container-fluid" style={{
        "background-image": "url('./exam.jpg')",
        "background-size": "100% 100%"
      }}>
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="mbr-section-title mb-3 display-1">
              <strong>Online Assessment Platform</strong>
            </h1>
            <p class="mbr-text mb-5 lead">
              "Here you can attempt the exam and see your performance!"
            </p>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary btn-lg m-3" href="/login" role="button">Login</a>
              <a class="btn btn-success btn-lg m-3" href="/register" role="button">SignUp</a>
            </div>
          </div>
        </div>
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