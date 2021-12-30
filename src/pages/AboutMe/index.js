import React from "react";
import Container from "../../components/Container/index";
import "./style.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import me from "../../img/me.jpg"
const AboutMe = () => {
  return (
    <Container>
      <Navbar />
      <section>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={me}
                className="card-img"
                alt="me"
              ></img>
            </div>
            <div className="col-md-8 bg-dark p-2">
              <div className="card-body contact">
                <h1 className="card-title ">Auxilia Vinnarasi.S</h1>
                <h2 className="card-text contact">
                  Electronics and Communication Engineering
                </h2>
                <h2 className="card-text contact">Full Stack Developer</h2>
                <h2 className="card-text contact">Chennai,Tamil Nadu</h2>
                <h2 className="card-text contact">
                Skills:JavaScript,HTML 5,CSS,React JS,Node JS,Express JS,Mongo DB,SQL database.
                </h2>
                <h2 className="card-text contact">auxiliavinnarasi@gmail.com</h2>
                <h2 className="card-text contact">91-9500425264</h2>
              </div>
            </div>
          </div>
        </div> 
      </section>
      <Footer />
    </Container>
  );
};
export default AboutMe;
