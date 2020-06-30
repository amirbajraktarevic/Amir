import React from "react";
import '../App.css';

class About extends React.Component {
  render() {
    return (
      <div className="about" id="info">
        <div className="container">
          <div className="d-flex justify-content-center" id="biography">
            <h1 className="mt-5">
              <i class="fa fa-info-circle"></i> About
            </h1>
          </div>
          <div className="mt-4 d-flex justify-content-start">
            <p>
              Hello, my name is Amir and I am a senior at{" "}
              <em>
                <a href="https://www.ius.edu.ba/bs">
                  International University of Sarajevo
                </a>
              </em>
              . I have always been interested in computers and programming.
              Currently I am in the process of finishing my studies and I hope
              that I can persue my dreams and become a full stack web developer
              in the future. This portfolio will contain my CV and previous
              experiences.
            </p>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <h1>
              <a className="nodecoration" href="/CV">
                <i class="far fa-address-card"></i>
                CV
              </a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
