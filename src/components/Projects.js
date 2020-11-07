import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../App.css";
import chatally from "../img/chatally.jpg";
import gaming from "../img/gaming.png";
import kapodaster from "../img/kapodaster.png";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="d-flex justify-content-center">
          <h1 className="mt-5">My projects:</h1>
        </div>
        <div className="m-auto container d-flex justify-content-center">
          <div className="mt-5 col-sm-10 align-items-center">
            <div className="row">
              <div className="col-sm">
                <Card>
                  <CardImg top width="100%" src={gaming} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>
                      <strong>Gaming Page</strong>
                    </CardTitle>
                    <CardText>A webpage deditacated to video games.</CardText>
                    <Button>
                      <a
                        className="project-link"
                        href="https://github.com/Amir106/Web-App/tree/master/project1"
                      >
                        Repo
                      </a>
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={kapodaster}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Kapodaster</strong>
                    </CardTitle>
                    <CardSubtitle>
                      <em>Band webpage</em>
                    </CardSubtitle>
                    <CardText>
                      Official webpage of the band Kapodaster.
                    </CardText>
                    <Button>
                      <a
                        className="project-link"
                        href="https://github.com/Amir106/Web-App/tree/master/project2"
                      >
                        Repo
                      </a>
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={chatally}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>Chatally</strong>
                    </CardTitle>
                    <CardSubtitle>
                      <em>Chatting application</em>
                    </CardSubtitle>
                    <CardText>
                      Real time chatting application made in ReactJS and
                      Socket.io
                    </CardText>
                    <Button>
                      <a
                        className="project-link"
                        href="https://github.com/cj2612/Chatally"
                      >
                        Repo
                      </a>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
