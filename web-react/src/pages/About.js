import React from "react";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import MarketingComponent from "../components/Marketing/MarketingComponent";
import OurMissionComponent from "../components/OurMission/OurMissionComponent";
import MemberComponent from "../components/Members/MemberComponent";
import EnoughTalkComponent from "../components/EnoughTalk/EnoughTalkComponent";

const About = () => {
  return (
    <>
      <HeroAbout />
      <MarketingComponent />
      <OurMissionComponent />
      <MemberComponent />
      <EnoughTalkComponent />
    </>
  );
};

export default About;
