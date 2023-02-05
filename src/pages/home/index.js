import React from "react";
import Article from "../../components/article/Article";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Help from "../../components/help/Help";
import HomeModal from "../../components/homeModal/HomeModal";
import HomeNavbar from "../../components/homenavbar/HomeNavbar";
import School from "../../components/school/School";
import Touch from "../../components/touch/Touch";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Banner />
      <HomeModal />
      <School />
      <Help />
      <Article />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;
