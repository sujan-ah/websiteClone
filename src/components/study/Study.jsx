import React from "react";
import "./study.css";

const Study = () => {
  return (
    <section className="study">
      <div className="container">
        <div className="boxmain">
          <div className="box">
            <div className="img">
              <img src="image/studyimg.jpg" alt="" />
            </div>
            <div>
              <img className="logo" src="image/studylogo.png" alt="" />
            </div>

            <div className="textsani">
              <h1>Study</h1>
              <h2>material</h2>
            </div>
          </div>
          <p>
            The essentials for an adequate learning environment are more than
            often missing. Only 7.5% of all Primary School students pass the
            National exam (NLA) by the end of the 8th grade with a score of{" "}
            <span className="text-[#FAB811] text-sm !font-thin">50%</span> or
            above, which allow them to commence to the Secondary School Program.
            And part of the issue is posed by the huge lack of study material
            like textbooks, pens and paper that help students prepare properly
            for the exam.
            <br />
            <br />
            Hence, we made it one of our missions to provide the school with the
            means{" "}
            <span>
              to acquire the basic must-haves of learning and teaching supplies.
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Study;
