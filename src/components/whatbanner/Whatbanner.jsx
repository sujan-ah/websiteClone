import React from "react";
import "./whatbanner.css";

const Whatbanner = () => {
  return (
    <section className="wbanner">
      <div className="box">
        <div className="img">
          <div className="board">
            <p>
              {" "}
              <span>Water</span> <br /> Safe and clean drinking water.
            </p>
            <a href="#">Deep-dive.</a>
          </div>
          <img src="image/Library.png" alt="" />
        </div>

        <div className="img2">
          <img src="image/class.png" alt="" />{" "}
          <div className="board">
            <p>
              <span>Study material and books</span> <br />
              and study material accessible for every student.
            </p>
            <a href="#">Read on.</a>
          </div>
        </div>

        <div className="img3">
          <img src="image/Kitchen.png" alt="" />{" "}
          <div className="board">
            <p>
              <span>Food</span> <br />A school food program for students.{" "}
              <a href="#">Learn more.</a>
            </p>
          </div>
        </div>

        <div className="img4">
          <img src="image/WC.png" alt="" />{" "}
          <div className="board">
            <p>
              <span>Sanitary and hygiene</span> <br />
              Basic toilets and washing hands.
            </p>
            <a href="#">Why it’s important.</a>
          </div>
        </div>

        <div className="img5">
          <img src="image/tree.gif" alt="" />{" "}
        </div>
      </div>
    </section>
  );
};

export default Whatbanner;
