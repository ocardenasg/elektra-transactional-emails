import React from "react";
import styles from "./index.module.sass";

export default function Menu({ iframe, handleIframe, menu }) {
  return (
    <div id={styles.container}>
      <div id={styles.menuLeft}>
        {menu.map((val, key) => {
          return (
            <ul id={styles.menuPrincipal} key={key}>
              <span>{val.name}</span>
              {val.links.map((option, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => handleIframe(option.url)}
                    className={(iframe === option.url && styles.active) || ""}
                  >
                    {option.name}
                    <i className={`material-icons ${styles.icon}`}>
                      keyboard_arrow_right
                    </i>
                  </span>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
