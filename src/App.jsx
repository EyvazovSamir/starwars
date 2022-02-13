import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import PeoplePage from "./containers/PeoplePage/PeoplePage";
import HomePage from "./containers/HomePage/HomePage";
import { Routes } from "react-router-dom";
import routesConfig from "./routes/routesConfig";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element()}
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
