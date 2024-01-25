import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../TrialMode/TrialMode.css";
import TrialImage from "../../assets/image/Rectangle 26.png";
import ButtonDiscover from "../Buttons/ButtonDiscover";
import { useInView } from "react-intersection-observer";

const TrialMode = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideUpProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 2000 },
  });

  return (
    <animated.div
      ref={ref}
      style={slideUpProps}
      className="trial-mode-container">
      <div className="left-column">
        <img src={TrialImage} alt="trial-image" />
      </div>

      <div className="right-column">
        <h2 className="bluetext">About Us </h2>
        <h1>
          The core mission <br /> behind all our work
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
          tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
        </p>
        <ButtonDiscover />
        <div className="icon"></div>
      </div>
    </animated.div>
  );
};

export default TrialMode;
