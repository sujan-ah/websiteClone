import React from "react";
import "./sanitary.css";

const Sanitary = () => {
  return (
    <section className="whatsanitary">
      <div className="container">
        <div className="boxmain">
          <div className="box">
            <div className="text flex">
              <div>
                <img src="image/sanitarylogo.png" alt="" />
              </div>

              <div className="textsani">
                <h1>Sanitary</h1>
                <h2>and hygiene</h2>
              </div>
            </div>
            <div className="img">
              <img src="image/sanitary.jpg" alt="" />
            </div>
          </div>
          <p>
            For most of us, going to the bathroom is the most natural thing to
            do. We don’t think twice about it – we use the toilet, wash our
            hands, and that’s that. For children in developing countries,
            however, this routine is a whole different story: 39% of Primary
            Schools in Ethiopia only have limited sanitary services, 61% have
            none! And only 5% of these schools are able to provide hygiene
            facilities including water and soap. In numbers this means that 25
            million children are exposed to health-endangering bacteria and
            germs everyday. These circumstances lead to infections, illness and
            ultimately to absence and drop-outs of school or worse. Girls are
            particularly affected once a month.
            <br />
            <br />
            <span>
              Building well-functioning sanitary facilities, install a
              sustainable waste management system and providing hygiene
              education
            </span>{" "}
            to teachers and students are one of our top priorities to keep
            everyone fit for school.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sanitary;
