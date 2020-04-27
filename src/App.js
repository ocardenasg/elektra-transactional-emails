import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "./views/Menu";
import menu from "./misc/menu";
import styles from "./index.module.sass";

export default function App() {
  const [resolution, setResolution] = useState(650);
  const [iframe, setIframe] = useState(menu[0].links[0].url);

  function handleChangeResolution(e) {
    setResolution(~~e.target.value);
  }

  return (
    <Router>
      <div className={styles.container}>
        <Menu iframe={iframe} handleIframe={setIframe} menu={menu} />
        <div className={styles.content}>
          <div className={styles.containerEmail}>
            <div>
              <select id={styles.devices} onChange={handleChangeResolution}>
                <option value="650">Selecciona una resolución</option>
                <option value="320">320 iPhone 5/SE</option>
                <option value="360">360 Galaxy S5</option>
                <option value="375">375 iPhone 6/7/8/X</option>
                <option value="411">411 Pixel 2</option>
                <option value="414">414 iPhone 6/7/8 Plus</option>
                <option value="768">768 iPad</option>
                <option value="650">650</option>
                <option value="414">414</option>
              </select>
            </div>
          </div>
          <div className={styles.cointainerIframe}>
            <iframe
              src={iframe}
              height="1400"
              title="render"
              frameBorder="0"
              width={`${resolution}px`}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}
