import React from "react";
import "./food.css";

const Food = () => {
  return (
    <section className="food">
      <div className="box">
        <div className="text flex">
          <div>
            <img src="image/foodlogo.png" alt="" />
          </div>

          <div className="textsani">
            <h1>Food</h1>
          </div>
        </div>
        <div className="img">
          <img src="image/foodimg.jpg" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="boxmain">
          <p>
            A well-balanced diet is the basis for health and development of a
            child.
            <br />
            <br />
            But not even half of all children in Ethiopian rural areas are fed
            at least three times a day. As a consequence, malnutrition is a
            common issue resulting in underweight, anaemia and deficiency of
            vital minerals and vitamins.
            <br />
            <br />
            Well-nourished children are more likely to be healthy, productive,
            and ready to learn.
            <br />
            <br />
            Therefore, we are{" "}
            <span>
              introducing a school food program involving the children to cook
              for each other.
            </span>{" "}
            For this purpose, we will build a brand-new cafeteria for students
            and teachers including a well-equipped kitchen to prepare the meals.
            Of course, we seek to provide all necessary ingredients and
            workforce locally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Food;
