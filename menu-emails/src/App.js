import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(650);
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
                <div className={styles.content}>
                  <div className={styles.containerEmail}>
                    <div
                      onClick={() => {
                        setresolution(650);
                      }}
                      className={`material-icons ${styles.icon}`}
                    >
                      desktop_mac
                    </div>

                    <div
                      onClick={() => {
                        setresolution(414);
                      }}
                      className={`material-icons ${styles.icon}`}
                    >
                      mobile_friendly
                    </div>
                  </div>
                  <div className={styles.cointainerIframe}>
                    <iframe
                      src={val.src}
                      width={`${resolution}px`}
                      height="1000"
                      frameBorder="0"
                      title="render"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
