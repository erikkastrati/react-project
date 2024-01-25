import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../OurMission/OurMissionComponent.css";
import Team from "../../assets/image/Rectangle 32.png";
import Teamwork from "..//..//assets/image/Rectangle 34.png";
import { useInView } from "react-intersection-observer";

const OurMissionComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
        config: { duration: 1000 }

  });

  return (
    <animated.div ref={ref} style={slideInProps} className="our-mission">
      <div className="ourmission-container">
        <div className="first-mission">
          <h4 className="bluetext">Our Mission</h4>
          <h2>
            Boost your with <br />
            your business.
          </h2>
          <p>
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy.
          </p>
        </div>
        <div className="second-mission">
          <img src={Team} alt="Team" />
          <div className="projects_conversation">
            <div className="conversation">
              <span>10K</span>
              <p>Great conversation per month</p>
            </div>
            <div className="projects">
              <span>95+</span>
              <p>
                Project <br /> Complete
              </p>
            </div>
          </div>
        </div>
        <div className="third-mission">
          <img src={Teamwork} alt="Team" />
        </div>
      </div>
    </animated.div>
  );
};

export default OurMissionComponent;
