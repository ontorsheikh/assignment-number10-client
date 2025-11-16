import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedReviews from "../components/FeaturedReviews";
import PopularCategories from "../components/PopularCategories";
import CommunitySpotlight from "../components/CommunitySpotlight";

const Home = () => {
  return (
    <div className="mt-10">
      <title>Foods Lovers | Real foodies share their favorite dishes</title>
      <HeroSlider />
      <FeaturedReviews />
      <PopularCategories />
      <CommunitySpotlight />
    </div>
  );
};

export default Home;
