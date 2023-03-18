import { Github } from "./Github";
import React from "react";
import { SkillsAndTools } from "./SkillsAndTools";
import { data } from "../../assets/data.js";
import profilePicture from "../../assets/images/profilepic_white-bg.jpg";

export const About: React.FC = () => {
  return (
    <section className="about container-md">
      <div className="about__layout-wrapper">
        <h2 className="section-heading">About</h2>
        <div className="about__card">
          <div className="about__card-inner-container">
            <img
              src={profilePicture}
              alt="Darwin Smith's profile"
              className="about__avatar"
            />
            <h6 className="about__avatar-headline">Darwin Smith</h6>
          </div>

          <p className="about__blurb">{data.blurb}</p>
        </div>

        <Github />
        <SkillsAndTools />
      </div>
    </section>
  );
};
