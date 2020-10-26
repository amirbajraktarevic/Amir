import React from "react";
import mcc from "../img/mcc.jpg";
import dgs from "../img/dgs.png";
import ius from "../img/ius.jpg";
import "../App.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class CV extends React.Component {
  render() {
    return (
      <div className="about" id="cv">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <div className="d-flex justify-content-center">
              <h1 id="naslov">
                <i class="far fa-address-card"></i> CV
              </h1>
            </div>
            <div className="mt-4 d-flex justify-content-start">
              <p>
                <strong><i className="fas fa-signature"></i></strong>: Amir Bajraktarevic <br />
                <strong><i className="fas fa-calendar-day"></i></strong>: 10.6.1998 <br />
                <strong><i className="fas fa-envelope-open"> </i></strong>: amir.bajraktarevic98@gmail.com <br />
                <strong><i className="fas fa-phone-alt"></i></strong>: +387 62 178 222 <br />
              </p>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <h3>
                <i class="fas fa-school"></i> Education
              </h3>
            </div>

            <div className="row d-flex justify-content-center text-center mt-5 mb-5">
              <div className="mt-4 col-md-4">
                <h5><strong>Primary School:</strong></h5>
                <br/>
                <em><a href="http://osmccsa.edu.ba/v2/">Musa Cazim Catic</a></em>, Sarajevo
                <br/>
                <img className="skole mb-2 mt-2" src={mcc} alt="" srcset=""/>
                <br/>
                <span>2004-2013</span>
              </div>
              <div className="mt-4 col-md-4">
              <h5><strong>High School:</strong></h5>
                <br/>
                <em><a href="https://www.2gimnazija.edu.ba/bs/">Druga gimnazija</a></em>, Sarajevo
                <br/>
                <img className="skole mb-2 mt-2" src={dgs} alt="" srcset=""/>
                <br/>
                <span>2013-2017</span>
              </div>
              <div className="mt-4 col-md-4 text-center">
              <h5><strong>University:</strong></h5>
                <br/>
                <em><a href="https://www.ius.edu.ba/">International University of Sarajevo</a></em>, Sarajevo
                <br/>
                <img className="skole mb-2 mt-2" src={ius} alt="" srcset=""/>
                <br/>
                <span>2017-present</span>
              </div>
            </div>
            <div>
              <div className="mt-4 d-flex justify-content-center">
                <h3>
                  <i class="fas fa-wrench"></i> Skills
                </h3>
              </div>
              <div className="mt-4 d-flex justify-content-start">
                <p>
                  <h5>Languages:</h5>
                  <br />
                  <h6>Bosnian</h6>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br />
                  <br />
                  <h6>English</h6>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br />
                  <br />
                  <h6>German</h6>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <br />
                  <br />
                  <h6>Turkish</h6>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <hr />
                  <h5>Programming languages:</h5>
                  <br />
                  <h6>
                    <i class="fab fa-html5"></i> HTML
                  </h6>

                  <br />
                  <h6>
                    <i class="fab fa-css3-alt"></i> CSS
                  </h6>

                  <br />
                  <h6>
                    <i class="fab fa-js-square"></i> JavaScript
                  </h6>

                  <br />
                  <h6>
                    <i class="fab fa-react"></i> ReactJS
                  </h6>
                  <br />

                  <h6>
                    <i className="fas fa-database"></i> MySQL
                  </h6>
                  <br/>

                  <h6>
                    <i className="fab fa-java"></i> Java
                  </h6>
                  <br/>

                  <h6>
                    <i className="fab fa-cuttlefish"></i> C++
                  </h6>
                  <hr />
                  <h5>Characteristics:</h5>
                  <br />
                    <span><i className="fas fa-smile"></i> Friendly </span>
                    <br />
                    <span><i className="fas fa-users"></i> Team-player </span>
                    <br />
                    <span><i className="fas fa-book-reader"></i> Motivated to learn{" "}</span>
                    <br />

                  <hr />
                  <h5>Hobbies:</h5>
                  <br />
                  <p>
                    <i class="far fa-futbol"></i> Football <br />
                    <i class="fas fa-gamepad"></i> Video-games <br />
                    <i class="fa fa-car"></i> Car enthusiast <br />
                  </p>
                  <hr />
                  <h5>Awards:</h5>
                  <p>
                    Altera Lingua School of English Language certificates <br />
                    Cambridge School of English Language certificates <br />
                    Various sport certificates <br />
                    React + Redux SoloLearn{" "}
                    <a
                      className="a-link"
                      href="https://www.sololearn.com/Certificate/1097-18874987/pdf/"
                    >
                      <strong>certificate</strong>
                    </a>
                    <br />
                  </p>
                </p>
              </div>

              <div className="mt-4 d-flex justify-content-center text-center mt-5 ">
                <h3>
                  <i class="fas fa-briefcase"></i> Previous Work Experience
                </h3>
              </div>
              <div className="mt-4 d-flex justify-content-start">
                <ul>
                  <li>Presidental Elections 2018 vote counter</li>
                  <li></li>
                </ul>
              </div>
            </div>


          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default CV;
