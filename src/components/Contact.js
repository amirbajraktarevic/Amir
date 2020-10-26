import React from "react";
import "../App.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="contact">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <h1>Get in contact!</h1>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <form>
              <h4>Your name and surname:</h4>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="col-md-12"
                type="text"
                placeholder="Your name."
                required
              ></input>
              <br />
              <br />
              <h4>Your e-mail:</h4>
              <input className="mb-4 col-md-12" type="text"/>
              <br/>
              <h4>Your question/proposal:</h4>
              <textarea
                className="col-md-12"
                placeholder="Your question/proposal."
                required
              ></textarea>
              <button className="btn btn-dark" type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="mt-5 d-flex justify-content-center">
            <span>Thank you for your feedback {this.state.value} !</span>
          </div>

          <div className="mt-5 d-flex justify-content-center">
            <h5>Socials:</h5>
            <div className="spacing">
              <a
                href="https://www.facebook.com/amir.bajraktarevic.69/"
                rel="noopner noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/amir_bajraktarevic/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/amirbajraktarevic">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-5 footer-copyright text-center py-3">
          &#169; 2020 Copyright: Amir Bajraktarevic
        </footer>
      </div>
    );
  }
}

export default Contact;
