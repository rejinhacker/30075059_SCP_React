// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./../Home.css"; // Import the Home.css file

const Home = () => {
  return (
    <>
      {/* Landing Page */}
      <div className="container-fluid mt-5 pt-5">
        <div className="jumbotron jumbotron-fluid text-center bg-light">
          <div className="container">
            <h1 className="display-4">Welcome to SCP Foundation</h1>
            <p className="lead">Special containment Procedures</p>
          </div>
        </div>

        {/* SCP Sections */}
        {["scp2", "scp3", "scp4", "scp5", "scp6"].map((scp, index) => (
          <section key={index} id={scp} className="section">
            <div className="container">
              <h2 className="mt-4">{scp.toUpperCase()}</h2>
              <p>Description of {scp.toUpperCase()} goes here....<Link to={`/${scp}`}><i>Read more</i></Link></p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
