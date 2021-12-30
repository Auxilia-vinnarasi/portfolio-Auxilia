import React from "react";
import Container from "../../components/Container/index"
import Navbar from "../../components/Navbar/index"
import Footer from "../../components/Footer/index"
import resume from "../../img/resume.pdf"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Resume() {
  return (
  
    <Container>
    <Navbar/>
    <h1>Auxilia Vinnarasi Resume</h1>
    <iframe src={resume} width="100%" height="500px" title = 'resume'>
        </iframe>
        <Footer/> 
    </Container>
 
  );
}

export default Resume;
