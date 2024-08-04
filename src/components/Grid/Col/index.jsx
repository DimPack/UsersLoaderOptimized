import React from 'react';
import cx from 'classnames';
import styles from './Col.module.scss';

const Col = ({ children, colClass }) => {
  const arrayClassNames = Object.entries(colClass).map(
    ([key, val]) => styles[`col-${key}-${val}`]
  );
  const classNames = cx(arrayClassNames);
  return <div className={classNames}>{children}</div>;
};

export default Col;
