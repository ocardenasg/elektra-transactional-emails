import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";

const menu = [
  {
    name: "ENTREGA EN TIENDA",
    options: [
      {
        name: "Correo Creado BAZ",
        url: "/correocreadobaz"
      },
      {
        name: "Correo Confirmado TC/PayU",
        url: "/correocreadotiendaTC"
      },
      {
        name: "Correo Confirmado Tienda Crédito Elektra",
        url: "/confirmadotiendacredito"
      },
      {
        name: "Correo Confirmado Tienda Mercado Pago",
        url: "/pedidoConfirmadotiendamercadopago"
      },
      {
        name: "Correo Listo para Entrega en Tienda",
        url: "/entregaTienda"
      },
      {
        name: "Correo Entregado Tienda",
        url: "/correocreadoentregadotienda"
      }
    ]
  },
  {
    name: "ENVIO A DOMICILIO",
    options: []
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
