import { useState, useEffect } from "react";
import styles from "./PersonFilms.module.css";
import propTypes from "prop-types";
import { makeConcurrentRequest, changeHTTP } from "../../utils/network";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);

      setFilmsName(response);
    })();
  }, []);

  return (
    <div>
      <ul>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episide}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  text: propTypes.array,
};

export default PersonFilms;
