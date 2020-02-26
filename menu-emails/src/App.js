import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(650);
  const [activeTab, setActiveTab] = useState(true);

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
    },
    {
      src: "pedidoConfirmadoTiendaOriginacionCredito/index.html",
      url: "/confirmadotiendacredito"
    },
    {
      src: "pedidoConfirmadoTiendaMercadoPago/index.html",
      url: "/pedidoConfirmadotiendamercadopago"
    },
    {
      src: "pedidoConfirmadoTiendaPaypal/index.html",
      url: "/pedidoConfirmadotiendapaypal"
    },
    {
      src: "pedidoConfirmadoTiendaPayU/index.html",
      url: "/pedidoConfirmadotiendapayu"
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
                      className={`material-icons ${styles.icon}
                        ${(activeTab && styles.tab_active) || styles.tab}
                      `}
                    >
                      desktop_mac
                    </div>

                    <div
                      onClick={() => {
                        setresolution(414);
                        setActiveTab(false);
                      }}
                      className={`material-icons ${styles.icon}
                      ${(!activeTab && styles.tab_active) || styles.tab}
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
