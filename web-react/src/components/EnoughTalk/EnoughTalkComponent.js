import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "../EnoughTalk/EnoughTalkComponent.css";

const EnoughTalkComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideLeftProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={slideLeftProps} className="enoughtalk">
      <div className="enoughtalk_container">
        <h3>Enough talk, let's get to work</h3>
        <button>Get in touch</button>
      </div>
    </animated.div>
  );
};

export default EnoughTalkComponent;
