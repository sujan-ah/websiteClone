import React from "react";
import "./donation.css";

const Donation = () => {
  return (
    <section className="donation">
      <h6>
        100% of your gift helps and provides school kids in Ethiopia with an
        adequate learning
        <br />
        environment.
        <br />
        We work closely with the schools and local communities to assign
        <br />
        your donation to the most pressing projects.
      </h6>
      <div className="logo">
        <img src="image/donatelogo.png" alt="" />
      </div>

      <div className="container">
        <div className="box">
          <div className="img">
            <img src="image/donateimg.jpg" alt="" />
          </div>
          <div className="text">
            <h1>Online Donation</h1>
            <p>
              You can choose any of the online payment options below or wire
              transfer your donation directly to:
              <br />
              <span>
                The Tomorrow School e.V. | IBAN: DE50 8306 5408 0004 1798 46 |
                BIC: GENO DEF1 SLR
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
