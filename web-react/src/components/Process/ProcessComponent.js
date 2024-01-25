import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../Process/ProcessComponent.css";
import CardComponent from "../Cards/CardComponent";
import CreateIcon from "../../assets/image/icons/CreateIcon";
import LightIcon from "../../assets/image/icons/LightIcon";
import ResearchIcon from "../../assets/image/icons/ResearchIcon";
import { useInView } from "react-intersection-observer";

const ProcessComponent = () => {
  const cardData = [
    {
      title: (
        <>
          <div className="img-txt">
            <LightIcon />
            <h3>Ideate</h3>
          </div>
        </>
      ),
      content: (
        <p>
          The ideation process is <br />a crucial phase in the design process
          <br />
          where creative
          <br /> thinking and brainstorming
        </p>
      ),
    },
    {
      title: (
        <>
          <div className="img-txt">
            <CreateIcon />
            <h3>CreateIcon</h3>
          </div>
        </>
      ),
      content: (
        <p>
          Designing a process involves <br /> several key steps to ensure
          clarity,
          <br /> efficiency, successful implementation
        </p>
      ),
    },
    {
      title: (
        <>
          <div className="img-txt">
            <ResearchIcon />
            <h3>Research</h3>
          </div>
        </>
      ),
      content: (
        <p>
          Research is a critical component
          <br /> of the design process,
          <br />
          helping designers understand the problem
        </p>
      ),
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideLeftProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50px)",
     config: { duration: 1000 }
  });

  return (
    <animated.div ref={ref} style={slideLeftProps} className="process-container">
      <h2 className="bluetext">Process</h2>
      <h1>
        Process that moves <br />
        things forward
      </h1>
      <div className="card-process">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </animated.div>
  );
};

export default ProcessComponent;
