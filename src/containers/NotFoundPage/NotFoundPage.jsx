import styles from "./NotFoundPage.module.css";
import { useLocation } from "react-router";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} alt="Not Found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
