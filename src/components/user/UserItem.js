import React from "react";
import styles from "../../styles/UserItem.module.css";
function UserItem({ name, image }) {
  return (
    <div className={styles.user}>
      <img className={styles.userImage} src={image} alt="user-image" />
      <h2 className={styles.userName}>{name}</h2>
    </div>
  );
}

export default UserItem;
