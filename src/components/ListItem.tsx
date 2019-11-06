import React from 'react';

interface Props {
  title: string;
  styles: string;
}

export const ListItem: React.FC<Props> = ({ title, styles }) => {
  return (
    <li>
      <i className={styles} title={title} />
    </li>
  );
};
