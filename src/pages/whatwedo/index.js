import React from "react";
import Sanitary from "../../components/sanitary/Sanitary";
import Water from "../../components/water/Water";
import Whatbanner from "../../components/whatbanner/Whatbanner";

const Whatwedo = () => {
  return (
    <div>
      <Whatbanner />
      <Water />
      <Sanitary />
    </div>
  );
};

export default Whatwedo;
