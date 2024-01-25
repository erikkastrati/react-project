import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import CardComponent from "../Cards/CardComponent";
import "../Members/MemberComponent.css";
import EstherHowards from "../../assets/image/EstherHowards.png";
import CameronWilliams from "../../assets/image/CameronWilliamson.png";
import LiamCooper from "../../assets/image/LiamCooper.png";

const MemberComponent = () => {
  const membersData = [
    {
      title: "Esther Howards",
      content: "Founder & CEO",
      imageSrc: EstherHowards,
    },
    {
      title: "Cameron Williams",
      content: "Marketing Head",
      imageSrc: CameronWilliams,
    },
    {
      title: "Liam Cooper",
      content: "Marketing Head",
      imageSrc: LiamCooper,
    },
  ];

  const props = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 2000 },
  });

  return (
    <div className="members">
      <h3 className="bluetext">Our Member</h3>
      <div className="members-container">
        <animated.div className="cards-wrapper" style={props}>
          {membersData.map((member, index) => (
            <CardComponent
              key={index}
              title={member.title}
              content={member.content}
              imageSrc={member.imageSrc}
            />
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default MemberComponent;
