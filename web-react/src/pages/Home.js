// Home.js
import React from "react";
import HeroComponent from "../components/Hero/HeroComponent";
import PostList from "../components/Posts/PostList";
import TrialMode from "../components/TrialMode/TrialMode";
import ProcessComponent from "../components/Process/ProcessComponent";
import DesignStrategy from "../components/DesignStrategy/DesignStrategy";
import QuoteCarousel from "../components/QuoteComponent/QuoteCarousel";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <PostList />
      <TrialMode />
      <ProcessComponent />
      <DesignStrategy />
      <QuoteCarousel />
    </div>
  );
};

export default Home;
