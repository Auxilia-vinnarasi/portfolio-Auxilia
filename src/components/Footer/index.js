import React from "react";
import "./style.css";
import Col from "../Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <footer id="sticky-footer" className=" bg-dark rounded-lg">
        <Col size="12">
        <a
            href="https://github.com/Auxilia-vinnarasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
          </a>
        </Col>
      </footer>
    </div>
  );
}

export default Footer;
