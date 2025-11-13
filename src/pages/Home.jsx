import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedReviews from "../components/FeaturedReviews";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FeaturedReviews />
      <PopularCategories />
    </div>
  );
};

export default Home;
