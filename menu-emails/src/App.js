import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(650);

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
      url: "/correoentregadotienda"
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
    },
    {
      src: "pedidoListoEntregaTiendaEktEnganche/index.html",
      url: "/entregaTiendaCreditoEktEnganche"
    },
    {
      src: "confirmadoDomOneClic/index.html",
      url: "/confirmadOneClic"
    },
    {
      src: "enviadoOneClic/index.html",
      url: "/enviadOneClic"
    },
    {
      src: "pedidoEntregadoOneClic/index.html",
      url: "/pedidoEntregadoOneClic"
    },
    {
      src: "engancheCreditoEktTienda/index.html",
      url: "/aprobacioncreditotienda"
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
                <Menu keyMenu={key} />
                <div className={styles.content}>
                  <div className={styles.containerEmail}>
                    <div
                      onClick={() => {
                        setresolution(650);
                      }}
                      className={`material-icons ${styles.icon}
                        ${(resolution === 650 && styles.tab_active) ||
                          styles.tab}
                      `}
                    >
                      desktop_mac
                    </div>

                    <div
                      onClick={() => {
                        setresolution(414);
                      }}
                      className={`material-icons ${styles.icon}
                      ${(resolution === 414 && styles.tab_active) || styles.tab}
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
