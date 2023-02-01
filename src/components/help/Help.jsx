import React from "react";
import "./help.css";

const Help = () => {
  return (
    <section className="help">
      <div className="container">
        <div className="box">
          <div className="left">
            <h3>How can you help?</h3>
          </div>

          <div className="right">
            <div className="wt"></div>
            <h4>
              Make <br />a donation
            </h4>

            <div className="wt"></div>
            <h4>
              Donate
              <br />
              your Birthday
            </h4>

            <div className="wt"></div>
            <h4>
              Sponsor
              <br />a project
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
