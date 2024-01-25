import React from "react";
import { useSpring, animated } from "@react-spring/web";
import CardComponent from "../Cards/CardComponent";
import "../Marketing/MarketingComponent.css";
import { useInView } from "react-intersection-observer";

const MarketingComponent = () => {
  const cardData = [
    {
      title: "200+",
      content: "We’re a family",
    },
    {
      title: "99%",
      content: "Graphic Design",
    },
    {
      title: "1.5M+",
      content: "Digital Marketing ",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
      config: { duration: 1000 }
  });

  return (
    <animated.div ref={ref} style={slideInProps} className="marketing">
      {cardData.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          content={card.content}
          className="marketing-card"
        />
      ))}
    </animated.div>
  );
};

export default MarketingComponent;
