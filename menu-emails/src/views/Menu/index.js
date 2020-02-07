import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";

const menu = [
  {
    name: "ENTREGA EN TIENDA",
    options: [
      {
        name: "Correo Creado",
        url: "/correocreado"
      },
      {
        name: "Correo Confirmado",
        url: "/correocreado2"
      },
      {
        name: "Correo Listo para entrega",
        url: "/xdck2"
      }
    ]
  },
  {
    name: "ENVIO A DOMICILIO",
    options: [
      {
        name: "Correo Creado",
        url: "/correocreado"
      },
      {
        name: "Correo Confirmado",
        url: "/xdck2"
      },
      {
        name: "Correo Listo para entrega",
        url: "/xdck2"
      }
    ]
  }
];
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
                  <li key={unikey}>
                    <Link to={option.url}>{option.name}</Link>
                    <i className={`material-icons ${styles.icon}`}>
                      keyboard_arrow_right
                    </i>
                  </li>
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
