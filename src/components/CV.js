import React from "react";
import "../App.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class CV extends React.Component {
  render() {
    return (
      <div className="about" id="cv">
        <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="d-flex justify-content-center">
            <h1 id="naslov"><i class="far fa-address-card"></i> CV</h1>
          </div>
          <div className="mt-4 d-flex justify-content-start">
            <p>
              <strong>Name</strong>: Amir Bajraktarevic <br />
              <strong>DoB</strong>: 10.6.1998 <br />
              <strong>E-mail</strong>: amir.bajraktarevic98@gmail.com <br />
              <strong>Phone</strong>: 38762178222 <br />
            </p>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <h3>
              <i class="fas fa-school"></i> Education
            </h3>
          </div>

          <div className="mt-4 d-flex justify-content-start">
            <p>
              <strong>
                <i class="fas fa-chalkboard"></i> Primary school:
              </strong>{" "}
              <em>Musa Cazim Catic</em> , Sarajevo 2004-2013
              <br />
              <strong>
                <i class="fas fa-book-reader"></i> High school:
              </strong>{" "}
              <em>Druga gimnazija</em> , Sarajevo 2013-2017
              <br />
              <strong>
                <i class="fas fa-user-graduate"></i>
                University:
              </strong>{" "}
              <em> International University of Sarajevo</em> , Computer Science
              Major, 2017-present <br />
            </p>
          </div>

          <div>
            <div className="mt-4 d-flex justify-content-center">
              <h3><i class='fas fa-wrench'></i> Skills</h3>
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
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <br />
                <br />
                <h6>
                  <i class="fab fa-css3-alt"></i> CSS
                </h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <br />
                <br />
                <h6>
                  <i class="fab fa-js-square"></i> JavaScript
                </h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <br />
                <br />
                <h6>
                  <i class="fab fa-react"></i> ReactJS
                </h6>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <br />
                <hr />
                <h5>Characteristics:</h5>
                <br />
                <p>
                  Friendly <br />
                  Team-player <br />
                  Motivated to learn <br />
                </p>
                <hr />
                <h5>Hobbies:</h5>
                <br />
                <p>
                  <i class="far fa-futbol"></i> Football <br />
                  <i class="fas fa-gamepad"></i> Video-games <br />
                  <i class="fa fa-car"></i> Car enthusiast <br />
                </p>
                <hr/>
                <h5>Awards:</h5>
                <p>
                    Altera Lingua School of English Language certificates <br/>
                    Cambridge School of English Language certificates <br/>
                    Various sport certificates <br/>
                    React + Redux SoloLearn <a className="a-link" href="https://www.sololearn.com/Certificate/1097-18874987/pdf/"><strong>certificate</strong></a><br/>
                </p>
              </p>
            </div>

            <div className="mt-4 d-flex justify-content-center">
              <h3>
                <i class="fas fa-briefcase"></i> Previous Work Experience
              </h3>
            </div>
            <div className="mt-4 d-flex justify-content-start">
              <p>None.</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default CV;
