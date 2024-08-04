import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyLink.module.scss';

const MyLink = ({href="#", content='text'}) => {
  return (
    <a className={styles.link} href={href}>
      {content}
    </a>
  );
};


MyLink.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default MyLink;
