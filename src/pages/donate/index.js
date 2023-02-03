import React from "react";
import Donation from "../../components/donation/Donation";
import Footer from "../../components/footer/Footer";
import Navvbar from "../../components/navbar/Navvbar";

const Donate = () => {
  return (
    <div>
      <Navvbar />
      <Donation />
      <Footer />
    </div>
  );
};

export default Donate;
