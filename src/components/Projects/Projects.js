import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/E-commerce.webp";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E commerce Application"
              description="This e-commerce application is built using React.js for the frontend and Node.js with Express.js for the backend, with PgAdmin (PostgreSQL) as the database. 
              The platform offers a seamless online shopping experience with a user-friendly interface, fast performance, and secure transactions."
              ghLink="https://github.com/Pradeep-ECE/MERN-Ecommerce" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
