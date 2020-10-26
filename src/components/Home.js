import React from "react";
import img from "../img/user.png";
import "../App.css";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home text-center">
        <FadeIn delay="700">
          <div className="container peding">
            <div className="mt-4 d-flex justify-content-center">
              <img
                className="col-sm-3 rounded-circle"
                alt="user"
                src={img}
              ></img>
            </div>
            <div className="mt-4"></div>
            <h1 className="d-flex justify-content-center text-center">
              Amir Bajraktarević
            </h1>
            <div className="mt-4"></div>
            <div className="d-flex justify-content-center ">
              <h3>Web Developer</h3>
            </div>
            <div className="mt-4"></div>
            <div className="d-flex justify-content-center">
              <Link to="/About2">
                <button className="btn btn-dark">Learn more!</button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Home;
