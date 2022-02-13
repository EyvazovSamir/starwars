import { useParams } from "react-router";
import styles from "./PersonPage.module.css";
import React, { useState, useEffect, Suspense } from "react";
import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleImage } from "./../../services/getPeopleData";
import { useSelector } from "react-redux";
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading/UiLoading";
import propTypes from "prop-types";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: propTypes.object,
  setErrorApi: propTypes.func,
};

export default withErrorApi(PersonPage);
