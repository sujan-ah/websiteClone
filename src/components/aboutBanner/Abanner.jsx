import React from "react";
import "./aabout.css";

const Abanner = () => {
  return (
    <section className="abanner">
      <div className="bnr"></div>

      <div className="box">
        <div className="img">
          <div className="text">
            <h1>THE TOMORROW SCHOOL</h1>
            <p>
              We want to help improve the education environment for children in
              Ethiopia. And the story starts with Alemayehu, my father.
            </p>
          </div>
        </div>
        <div className="img2">
          <img src="image/9.jpg" alt="" />
        </div>
        <div className="img3">
          <img src="image/9.jpg" alt="" />
        </div>
        <div className="img4">
          <div className="text2">
            <h6>
              While we strive to reach all school children in Ethiopia, we will
              kick-off our projects with the Woliso Primary School in Oromia,
              Ethiopia. And here is why:
            </h6>
            <p>
              We want to help improve the education environment for children in
              Ethiopia. And the story starts with Alemayehu, my father.
            </p>
          </div>
        </div>

        <div className="img5">
          <div className="text3">
            <p>
              <span>Education made my father who he is today: </span>
              an academic, a self-starter, an entrepreneur, a thinker, a reader,
              a philosopher, a teacher, a traveller, a loving father and
              grandfather. He has truly lived up to the meaning of his name:
              Alemayehu – “he who has seen the world”.
              <br />
              <br />
              This is my father’s story – and it can be so many other kids’
              story as well. Without this school, my father would not have had a
              better tomorrow, a brighter future. Without this school, I would
              not be here – and have the chance today to help make the world a
              little bit better.
            </p>
          </div>
        </div>

        <div className="img6">
          <img src="image/9.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Abanner;
