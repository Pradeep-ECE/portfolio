import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradeep M </span>
            from <span className="purple"> Tirunelveli, India.</span>
            <br />
            I am currently employed as a software Engineer at Centizen Inc.
            <br />
            I have completed my Bachelor's in Electronics and Communication Engineering from
            E.G.S. Pillay Engineering College, Nagapattinam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, innovate with impact.!"{" "}
          </p>
          <footer className="blockquote-footer">Pradeep M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
