import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "./PersonPhoto.module.css";
import {
  setPersonToFavorite,
  removePersonToFavorite,
} from "../../store/actions";

import iconFavorite from "./img/favorite.png";
import iconFavoriteFill from "./img/favorite-fill.png";

const state = {
  1: {
    name: "",
    img: "",
  },
};

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          alt="Add to favorite"
          className={styles.favorite}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personId: propTypes.string,
  personPhoto: propTypes.string,
  personName: propTypes.string,
  personFavorite: propTypes.bool,
  setPersonFavorite: propTypes.func,
};

export default PersonPhoto;
