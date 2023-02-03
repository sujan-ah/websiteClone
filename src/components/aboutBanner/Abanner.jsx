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
            <h5>
              We want to help improve the education environment for children in
              Ethiopia. And the story starts with Alemayehu, my father.
            </h5>
          </div>
        </div>
        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>

        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>
        <div className="img">
          <div className="text2">
            <h6>
              While we strive to reach all school children in Ethiopia, we will
              kick-off our projects with the Woliso Primary School in Oromia,
              Ethiopia. And here is why:
            </h6>
            <p>
              To us, the Woliso Liben Primary School is not like any other
              school in Ethiopia. Over 60 years ago, my father Alemayehu
              Shifferaw, then a 7-year old shepherd boy, had his very first day
              of school in Woliso. On this day, Alemayehu’s life took an
              entirely new direction – and a foundation was built for
              uncountable dreams and opportunities.
            </p>
          </div>
        </div>

        <div className="img">
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

        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Abanner;
