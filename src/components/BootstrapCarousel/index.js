import React, { Component } from "react";

import img1 from "../../img/codeImg1.jpg"
import img2 from "../../img/codeImg2.png"
import img3 from "../../img/codeImg3.jpeg"
import Carousel from "react-bootstrap/Carousel";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div className="bg-dark rounded-lg m-2">
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "5px" }}>
            <div className="col-sm-12 btn btn-info p-2"></div>
          </div>
        </div>

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={img1}
                alt="Code_1"
              />

              <Carousel.Caption>
                <h3>Code</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={img2}
                alt="Code_1"
              />

              <Carousel.Caption>
                <h3>TEST</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={img3}
                alt="Code_1"
              />

              <Carousel.Caption>
                <h3>DEPLOY</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
