import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class About2 extends React.Component {
  render() {
    return (
      <div>
        <div className="mac">
          <div className="h-100 row align-content-center w-100">
            <div className="d-flex justify-content-center col-md-12">
              <div>
                <Link className="about-link" to="/About">
                  <h1 className="white-text">About</h1>
                </Link>
                <hr className="white-line" />
                <Link className="about-link" to="/CV">
                  <h1 className="white-text"> CV</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About2;
