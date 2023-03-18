import { ListItem } from "../ListItem";
import React from "react";
import { data } from "../../assets/data.js";

export const SkillsAndTools = () => {
  return (
    <div className="about__skills-and-tools">
      <h3 className="about__sub-heading">Skills and Tools</h3>
      <ul className="about__skill-list">
        {data.skills.map((item) => (
          <ListItem item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};
