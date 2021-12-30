import React from "react";
import Container from "../Container"
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Resume() {
  return (
  
    <Container>
    <Navbar/>
    <h1>Auxilia Vinnarasi Resume</h1>
    <iframe src="../../assets/resume.pdf" width="100%" height="500px">
        </iframe>
    </Container>
 
  );
}

export default Resume;
