import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../HeroAbout/HeroAbout.css";
import ReviewProfile from "../../assets/image/profile-pic2.jpg";
import BannerAboutImg from "../../assets/image/Rectangle 29.png";
import { useInView } from "react-intersection-observer";

const HeroAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50px)",
      config: { duration: 1000 }
  });

  return (
    <animated.div ref={ref} style={slideInProps} className="hero-about-container">
      <div className="left-partabout">
        <p>Pleasure and so read the was hope.</p>
        <h1>
          Ready to take <br />
          <span className="bluetext">your business</span>
          <br /> to the next level?
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut <br />
          massa libero egestas malesuada viverra gravida libero cursus
          <br /> nulla leo pulvinar.
        </p>
        <div className="rating">
          <div className="image-with-rating">
            <img src={ReviewProfile} alt="Description" />
          </div>
          <div className="rating-info">
            <h4>Rated 4.9/5 stars</h4>
            <div className="rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="right-partabout">
        <div className="big-image">
          <img src={BannerAboutImg} alt="Description" />
        </div>
      </div>
    </animated.div>
  );
};

export default HeroAbout;
