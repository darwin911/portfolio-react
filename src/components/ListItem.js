import React from 'react';

const ListItem = ({ title, styles }) => {
  return (
    <li>
      <i className={styles}></i>
      <h4>{title}</h4>
    </li>
  );
};

export default ListItem;
