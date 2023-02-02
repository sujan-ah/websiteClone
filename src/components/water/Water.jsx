import React from "react";
import "./water.css";

const Water = () => {
  return (
    <section className="whatwater">
      <div className="container">
        <div className="boxmain">
          <div className="box">
            <div className="img">
              <img src="image/water.jpg" alt="" />
            </div>
            <div className="text">
              <h1>Water</h1>

              <img src="image/water2.png" alt="" />
            </div>
          </div>
          <p>
            The No. 1 of the basic need requirements for a healthy life is
            clean, fresh water. And as simple as it sounds, it is not.
            Worldwide,{" "}
            <span className="text-[#FAB811] text-sm !font-thin">
              2.1 billion
            </span>{" "}
            people lack access to safe drinking water – 61 million people in
            Ethiopia. In rural areas, the children or women of a family walk up
            to three hours to find a water source; often to collect from
            contaminated surface or stagnant water which they share with
            animals. This kind of water is the main cause for illnesses like
            diarrhoea, bilharzia or typhoid fever – especially life-threatening
            to children.
            <br />
            <br />
            We want to make it{" "}
            <span>
              our responsibility to help the school getting access to safe water
            </span>{" "}
            by financing the build and maintenance of an appropriate water
            resource to ensure that clean, fresh water is always available for
            students and teachers. The water will supply the sanitary
            facilities, ensure a higher hygiene practice and support the school
            food program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Water;
