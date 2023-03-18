import React, { useState } from "react";

import { motion } from "framer-motion";

interface ListProps {
  item: {
    title: string;
    styles: string;
  };
}

export function ListItem({ item: { title, styles } }: ListProps) {
  const [isHovered, setHovered] = useState(false);
  const toggle = () => setHovered((hovered) => !hovered);
  return (
    <motion.li
      tabIndex={0}
      animate={{ transform: `scale(${isHovered ? 1.25 : 1})` }}
      className="about__skill-item"
      onMouseEnter={toggle}
      onFocus={toggle}
      onMouseLeave={toggle}
      onBlur={toggle}
    >
      <i className={styles} title={title} />
    </motion.li>
  );
}
