import React from "react";
import Abanner from "../../components/aboutBanner/Abanner";
import Footer from "../../components/footer/Footer";
import Meet from "../../components/meet/Meet";
import Navvbar from "../../components/navbar/Navvbar";
import Partner from "../../components/partner/Partner";

const Aboutus = () => {
  return (
    <>
      <Navvbar />
      <Abanner />
      <Meet />
      <Partner />
      <Footer />
    </>
  );
};

export default Aboutus;
