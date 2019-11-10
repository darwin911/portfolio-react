import React from 'react';

interface Props {
  title: string;
  styles: string;
}

export const ListItem: React.FC<Props> = ({ title, styles }) => {
  return (
    <li className='about__skill-item'>
      <i className={styles} title={title} />
    </li>
  );
};
