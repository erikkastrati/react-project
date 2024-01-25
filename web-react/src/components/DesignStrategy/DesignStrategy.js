import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../DesignStrategy/DesignStrategy.css";
import { useInView } from "react-intersection-observer";

const DesignStrategy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideDownProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50px)",
    config: { duration: 1000 }
  });

  return (
    <animated.div ref={ref} style={slideDownProps} className="strategy-container">
      <h2 className="bluetext">Design Strategy</h2>
      <div className="img-dsgstrategy">
        <div className="box-container-mobile">
          <div className="box-strategies">
            <div className="dsp-strategies">
              <h5>Category :</h5>
              <p>Cloud solution</p>
            </div>
          </div>
          <div className="box-strategies">
            <div className="dsp-strategies">
              <h5>Client :</h5>
              <p>BrightMedia Solutions </p>
            </div>
          </div>
          <div className="box-strategies">
            <div className="dsp-strategies">
              <h5>Date : </h5>
              <p>13 January, 2024</p>
            </div>
          </div>
          <div className="box-strategies">
            <div className="dsp-strategies">
              <h5>Location :</h5>
              <p>489 Depot Road Midland </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box-strategies">
          <div className="dsp-strategies">
            <h5>Category :</h5>
            <p>Cloud solution</p>
          </div>
        </div>
        <div className="box-strategies">
          <div className="dsp-strategies">
            <h5>Client :</h5>
            <p>BrightMedia Solutions </p>
          </div>
        </div>
        <div className="box-strategies">
          <div className="dsp-strategies">
            <h5>Date :</h5>
            <p>13 January , 2024</p>
          </div>
        </div>
        <div className="box-strategies">
          <div className="dsp-strategies">
            <h5>Location :</h5>
            <p>489 Depot Road Midland </p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default DesignStrategy;
