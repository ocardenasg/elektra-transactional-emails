import React from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const path = [
    {
      src: "/pedidoCreadoBazTienda/index.html",
      url: "/correocreado"
    },
    {
      src: "/pedidoCreadoTienda/index.html",
      url: "/correocreado2"
    },
    {
      src: "/pedidoCreadoBazTienda/index.html",
      url: "/correocreado"
    }
  ];
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <Menu />
          </div>
        </Route>
        {path.map((val, key) => {
          return (
            <Route path={val.url} key={key}>
              <div className={styles.container}>
                <Menu />
                <iframe
                  src={val.src}
                  width="60%"
                  height="1000"
                  frameBorder="0"
                  title="render"
                ></iframe>
              </div>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
