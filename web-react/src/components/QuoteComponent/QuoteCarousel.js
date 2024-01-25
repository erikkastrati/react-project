import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../QuoteComponent/QuoteCarousel.css";
import Erik from "../../assets/image/Ellipse 16.png";
import Person2 from "../../assets/image/profile-pic1.png";
import Person3 from "../../assets/image/profile-pic2.jpg";
import { useInView } from "react-intersection-observer";

const QuoteCarousel = () => {
  const quotesAndImages = [
    {
      name: "Jacqueline Miller",
      role: "Designer",
      quote: "The only way to do great work is to love what you do.",
      image: Erik,
    },
    {
      name: "Filan Fisteku",
      role: "Developer",
      quote: "In the middle of difficulty lies opportunity.",
      image: Person2,
    },
    {
      name: "Cameron Williamson",
      role: "Manager",
      quote: "Believe you can and you're halfway there. ",
      image: Person3,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideRightProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
      config: { duration: 1000 }
  });

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleSwipe = () => {
    setCurrentItemIndex(
      (prevIndex) => (prevIndex + 1) % quotesAndImages.length
    );
  };

  const currentQuoteAndImage = quotesAndImages[currentItemIndex];

  return (
    <animated.div ref={ref} style={slideRightProps} id="quote-container">
      <div className="quote-div">
        <div id="quote-image">
          <img src={currentQuoteAndImage.image} alt="Profile" />
        </div>
        <div id="quote-text">
          <p>{currentQuoteAndImage.quote}</p>
          <h2 className="quote-name">{currentQuoteAndImage.name}</h2>
          <p className="quote-role">{currentQuoteAndImage.role}</p>
        </div>
        <button onClick={handleSwipe}>Swipe Quotes</button>
      </div>
    </animated.div>
  );
};

export default QuoteCarousel
