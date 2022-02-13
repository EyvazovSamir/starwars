import styles from "./UiLoading.module.css";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import cn from "classnames";
import loaderIcon from "./img/loaderIcon.png";

const UiLoading = ({ isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  );
};

UiLoading.propTypes = {
  theme: propTypes.string,
  isShadow: propTypes.bool,
  classes: propTypes.string,
};

export default UiLoading;
