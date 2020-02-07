import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";

const Menu = () => {
  return (
    <div id={styles.container}>
      <div id={styles.menuLeft}>
        <ul id={styles.menuPrincipal}>
          <li>ENTREGA EN TIENDA</li>
          <li>
            <a href="/correocreado">Correo Creado </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
          <li>
            <a href="/">Correo Confirmado </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
          <li>
            <a href="/">Correo Listo para entrega </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
          <li>ENVIO A DOMICILIO</li>
          <li>
            <a href="/">Correo Creado </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
          <li>
            <a href="/">Correo Confirmado </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
          <li>
            <a href="/">Correo Listo para entrega </a>
            <i className={`material-icons ${styles.icon}`}>
              keyboard_arrow_right
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
