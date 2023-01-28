import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../UI/Loader.js";
import UserItem from "./UserItem.js";
import { useAlert, transitions, positions } from "react-alert";
import styles from "../../styles/UserList.module.css";
function UserList({ setUserDetails }) {
  const [data, setData] = useState([]);
  const [listCount, setListCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=500");
    setData(response.data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const displayItems = (data) => {
    const list = [];
    for (let i = 0; i < listCount; i++) {
      list.push(
        <UserItem
          key={i}
          name={`${data[i].name.title} ${data[i].name.first} ${data[i].name.last}`}
          image={data[i].picture.large}
        ></UserItem>
      );
    }
    return list;
  };
  const loadMore = () => {
    if (listCount === data.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setListCount((previousListCount) => previousListCount + 10);
      }, 1000);
    }
  };
  const showAlert = useAlert();

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: "30px",
    transition: transitions.SCALE,
  };
  const logoutHandler = () => {
    setUserDetails({ username: "", password: "" });
    showAlert.success("logged out successfully", { ...options });
  };
  return (
    <div>
      <button className={styles.button} onClick={logoutHandler}>
        LOGOUT
      </button>
      <h1 className={styles.h1}>YOUR CONTACT LIST : </h1>
      {data.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<Loader count={2}></Loader>}
          useWindow={true}
        >
          {displayItems(data)}
        </InfiniteScroll>
      ) : (
        <Loader count={10}></Loader>
      )}
    </div>
  );
}

export default UserList;
