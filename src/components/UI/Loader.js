import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../../styles/UserItem.module.css";
import loaderStyles from "./Loader.module.css";
function Loader({ count }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <div key={i} className={styles.user}>
        <span className={loaderStyles.userImage}>
          <Skeleton className={loaderStyles.skeletonImage}></Skeleton>
        </span>
        <h2 className={loaderStyles.userName}>
          <Skeleton></Skeleton>
        </h2>
      </div>
    );
  }
  return <div>{items}</div>;
}

export default Loader;
