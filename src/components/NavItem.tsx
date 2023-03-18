import { Link } from "react-scroll";
import React from "react";

interface Props {
  section: string;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const NavItem: React.FC<Props> = ({ section, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen((prevVal) => !prevVal);
  };
  return (
    <Link
      onClick={toggleMenu}
      activeClass="active"
      to={section.toLowerCase()}
      smooth={true}
      duration={500}
      offset={-64}
    >
      <p className="list-item-text">{section}</p>
      <hr className="horizontal-rule" />
    </Link>
  );
};
