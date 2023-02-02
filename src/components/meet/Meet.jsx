import React from "react";
import "./meet.css";

const Meet = () => {
  return (
    <section className="meet">
      <div className="box">
        <div className="text">Meet our team</div>

        <div className="img1">
          <img src="image/meetImg.png" alt="" />
          <h1>Mel</h1>
          <h6>Founder & 1. Chairwoman</h6>
          <p>
            Mel went back to her German-Ethiopian roots and founded the idea of
            THE TOMORROW SCHOOL to honor her family story and to give back to
            her heritage. She’s a mother, a daughter, a sister, a traveller, a
            yogi. Strong-willed and driven she was last seen running her own
            company as a Digital Marketing Consultant and Project Manager for
            large brands, start-ups and agencies. Mel lives in Hamburg, Germany.
          </p>
        </div>
        <div className="img2">
          <img src="image/meetImg2.png" alt="" />
          <h1>Lasse</h1>
          <h6>Co-Founder, 2. Chairman & Legal Advisor</h6>
          <p>
            Lasse inspired by their joint travels to Africa, he was immediately
            excited by the project and didn’t hesitate to team up. Lasse is the
            source of constant encouragement and takes care of all things legal
            at THE TOMORROW SCHOOL when he is not writing laws at the Federal
            Ministry of Justice or ruling as a Judge at the Regional Court. He
            lives in Hamburg and Berlin, Germany.
          </p>
        </div>
        <div className="img3">
          <img src="image/meetImg3.png" alt="" />
          <h1>Alemayehu</h1>
          <h6>Member of Honor</h6>
          <p>
            Alex is Melanie’s father and source of heritage, family, vision and
            inspiration to THE TOMORROW SCHOOL. He encourages and supports the
            purpose and mission at all times. His story, experience and advice
            keeps THE TOMORROW SCHOOL always on track to create a better
            tomorrow with expanded opportunities for the children in Ethiopia.
            The organization would have never been founded if it wasn’t for him.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Meet;
