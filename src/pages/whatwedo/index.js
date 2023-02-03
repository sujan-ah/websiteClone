import React from "react";
import Food from "../../components/food/Food";
import Footer from "../../components/footer/Footer";
import Navvbar from "../../components/navbar/Navvbar";
import Sanitary from "../../components/sanitary/Sanitary";
import Study from "../../components/study/Study";
import Water from "../../components/water/Water";
import Whatbanner from "../../components/whatbanner/Whatbanner";

const Whatwedo = () => {
  return (
    <div>
      <Navvbar />
      <Whatbanner />
      <Water />
      <Sanitary />
      <Study />
      <Food />
      <Footer />
    </div>
  );
};

export default Whatwedo;
