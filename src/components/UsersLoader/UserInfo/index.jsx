import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = ({ user, index }) => {
  return (
    <li key={user.login.uuid} className={styles.blockInfo}>
        <h3>User {index}</h3>
      {<p className={styles.item}>firstname:</p>}
      {<p className={styles.info}>{user.name.first};</p>}
      {<p className={styles.item}>lastname:</p>}
      {<p className={styles.info}>{user.name.last};</p>}
      {<p className={styles.item}>address:</p>}
      <p className={styles.info}>
        {user.location.street.name} {user.location.street.number};
      </p>
      <p className={styles.item}>city:</p>
      <p className={styles.info}>{user.location.city};</p>
      <p className={styles.item}>email:</p>
      <p className={styles.info}>{user.email};</p>
    </li>
  );
};

export default UserInfo;
