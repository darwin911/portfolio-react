import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  styles: string;
}

export const ListItem: React.FC<Props> = ({ title, styles }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <motion.li
      tabIndex={0}
      animate={{ transform: `scale(${isHovered ? 1.4 : 1})` }}
      className='about__skill-item'
      onMouseEnter={() => setHovered(prevVal => !prevVal)}
      onMouseLeave={() => setHovered(prevVal => !prevVal)}>
      <i className={styles} title={title} />
    </motion.li>
  );
};
