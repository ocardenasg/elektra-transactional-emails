import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(800);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <Menu />
          </div>
        </Route>
        <Route path="/correocreado">
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
                  src="/pedidoCreadoBazTienda/index.html"
                  width={`${resolution}px`}
                  height="600px"
                >
                  {" "}
                </iframe>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
