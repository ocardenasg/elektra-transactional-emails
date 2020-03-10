import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";
import menu from "../misc/menu";

const Menu = () => {
  return (
    <div id={styles.container}>
      <div id={styles.menuLeft}>
        {menu.map((val, key) => {
          return (
            <ul id={styles.menuPrincipal} key={key}>
              <span>{val.name}</span>
              {val.options.map((option, unikey) => {
                return (
                  <Link to={option.url} key={unikey}>
                    {option.name}
                    <i className={`material-icons ${styles.icon}`}>
                      keyboard_arrow_right
                    </i>
                  </Link>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
