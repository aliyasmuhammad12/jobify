import React from "react";
import "./homebody.css";
import side from "../assets/side-image.svg"
import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <>
      <div className="main">
        <div className="text">
          <div className="heading">
            <h1 className="job">
              Job
              <span className="blue"> Tracking </span>
               App
            </h1>
          </div>
          <div className="para">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </div>

         
          <div className="buttons">
                <button className="btn home-btn">Register</button>
                <Link to='/login'>
                <button className="btn home-btn">Login/Demon User</button>
                </Link>
        </div>
        </div>


        <div className="side-image">
            <img src={side} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeBody;
