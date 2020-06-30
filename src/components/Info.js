import React from "react";
import "../App.css";

class Info extends React.Component {
  render() {
    return (
      <div className="about" id="info">
        <div className="container">
          <div className="mt-2 d-flex justify-content-center" id="biography">
            <h1>
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
          
        </div>
      </div>
    );
  }
}

export default Info;
