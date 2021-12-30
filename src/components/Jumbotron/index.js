import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark rounded-lg mt-4 p-4">
      <div className="container">
        <h1 className="display-4 text">Auxilia Vinnarasi.S</h1>
        <p className="lead">
        Hardworking and passionate job seeker with strong organizational skills eager to
        secure entry-level full stack developer position in IT environment. Ready to help team
        achieve company goals.
        Recent Full Stack developer with the passion for developing scalable web
        applications and working across the full stack.
        Ready to learn new technologies and willing to work on advanced techstack.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
