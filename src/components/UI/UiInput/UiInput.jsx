import styles from "./UiInput.module.css";
import propTypes from "prop-types";
import cn from "classnames";
import icon from "./img/icon.png";
import "../index.css";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && handleInputChange("")}
      src={icon}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt="Clear"
    />
  </div>
);

UiInput.propTypes = {
  value: propTypes.string,
  handleInputChange: propTypes.func,
  placeholder: propTypes.string,
  classes: propTypes.string,
};

export default UiInput;
