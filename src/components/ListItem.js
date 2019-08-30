import React from 'react';

const ListItem = ({ title, styles }) => {
  return (
    <li>
      <i className={styles} title={title} />
    </li>
  );
};

export default ListItem;
