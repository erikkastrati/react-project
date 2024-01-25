import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "../Hero/HeroComponent.css";
import ImageBanner from "../../assets/image/Ellipse 10.png";
import ButtonDiscover from "../Buttons/ButtonDiscover";
import FirstIcon from "../../assets/image/icons/FirstIcon";
import SecondIcon from "../../assets/image/icons/SecondIcon";
import ThirdIcon from "../../assets/image/icons/ThirdIcon";

const HeroComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideLeftProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={slideLeftProps} className="hero">
      <div className="hero-content">
        <div className="left-section">
          <h2>
            Ready to take your <br />{" "}
            <span className="bluetext">Business Growth</span> <br /> to the next
            level?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <div className="brands-icon">
            <div className="brand-trusted">
              <span className="bluetext">Trusted by Leading Brands</span>
            </div>
            <div className="icon-container">
              <FirstIcon />
              <SecondIcon />
              <ThirdIcon />
            </div>
            <div className="disover-banner-button">
              <ButtonDiscover />
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={ImageBanner} alt="Your Image" />
        </div>
        <div className="icon-container-right">
          <FirstIcon />
          <SecondIcon />
          <ThirdIcon />
        </div>
      </div>
    </animated.div>
  );
};

export default HeroComponent;
