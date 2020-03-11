import React from "react";
import { NavLink } from "react-router-dom";

import menu from "../misc/menu";

import styles from "./index.module.sass";

export default function Menu() {
  return (
    <div id={styles.container}>
      <div id={styles.menuLeft}>
        {menu.map((val, key) => {
          return (
            <ul id={styles.menuPrincipal} key={key}>
              <span>{val.name}</span>
              {val.links.map((option, index) => {
                return (
                  <NavLink
                    key={index}
                    to={option.url}
                    activeClassName={styles.active}
                  >
                    {option.name}
                    <i className={`material-icons ${styles.icon}`}>
                      keyboard_arrow_right
                    </i>
                  </NavLink>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
