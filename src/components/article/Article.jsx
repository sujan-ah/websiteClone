import React from "react";
import "./article.css";

const Article = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="box">
          <div className="text">
            <h1>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </h1>

            <h5>-Lao Tzu-</h5>
            <p>
              While our mission embraces to provide educational foundation for
              every child in Ethiopia, we’re kicking-off our first projects with
              the Woliso Liben Elementary School in the in the Oromia region,
              Ethiopia. Why?
              <span className="read"> Read our story here.</span>
            </p>
          </div>

          <div className="image"></div>
        </div>
      </div>
    </section>
  );
};

export default Article;
