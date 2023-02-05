import React from "react";
import "./school.css";

const School = () => {
  return (
    <section className="school">
      <div className="container">
        <div className="box">
          <div className="vedio">
            <img src="" alt="" />
          </div>

          <div className="right">
            <h2>The Tomorrow School e.V. What we do</h2>
            <p className="flex flex-col">
              <span className="mb-2">
                s a German non-profit organization with the purpose of improving
                the education environment of children in Ethiopia.
              </span>
              <span className="mb-2">
                {" "}
                To empower the children to pursue their dreams, we want to give
                them a headstart on the basis of their education built on four
                initial programs.
              </span>
              <span className="p-0">
                {" "}
                <span className="read">Read more</span> about each of our
                programs.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
