import React from "react";
import Article from "../../components/article/Article";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Help from "../../components/help/Help";
import HomeNavbar from "../../components/homenavbar/HomeNavbar";
import Navvbar from "../../components/navbar/Navvbar";
import School from "../../components/school/School";
import Touch from "../../components/touch/Touch";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Banner />
      <School />
      <Help />
      <Article />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;
