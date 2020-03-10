import React, { useState } from "react";
import Menu from "./views/Menu";
import styles from "./index.module.sass";
import path from "../src/views/misc/path";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [resolution, setresolution] = useState(650);

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
                      height="1400"
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
