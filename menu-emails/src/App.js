import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(650);
  const [desktop, setdesktop] = useState(false);
  const [movil, setmovil] = useState(false);

  const path = [
    {
      src: "/pedidoCreadoBazTienda/index.html",
      url: "/correocreadobaz"
    },
    {
      src: "/pedidoListoEntregaTienda/index.html",
      url: "/entregaTienda"
    },
    {
      src: "/pedidoCreadoTienda/index.html",
      url: "/correocreadotiendaTC"
    },
    {
      src: "/pedidoEntregadoTienda/index.html",
      url: "/correocreadoentregadotienda"
    }
  ];

  const [tabActive, setTabActive] = useState(2);

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
                        setdesktop(!desktop);
                        setTabActive(3);
                        {
                          movil && setmovil(!movil);
                        }
                      }}
                      className={`material-icons ${styles.icon}
                        ${(tabActive === 3 && styles.tab_active) || styles.tab}
                      `}
                    >
                      desktop_mac
                    </div>

                    <div
                      onClick={() => {
                        setresolution(414);
                        setTabActive(2);
                      }}
                      className={`material-icons ${styles.icon}
                      ${(tabActive === 2 && styles.tab_active) || styles.tab}
                    `}
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
