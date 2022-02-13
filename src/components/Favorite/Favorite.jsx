import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.css";
import icon from "./img/bookmark.png";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [count, setCount] = useState();

  const storeDate = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeDate).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img src={icon} className={styles.icon} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
