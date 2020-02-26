import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.sass";

const menu = [
  {
    name: "ENTREGA EN TIENDA",
    options: [
      {
        name: "Pedido Creado BAZ",
        url: "/correocreadobaz"
      },
      {
        name: "Pedido Confirmado TC/PayU",
        url: "/correocreadotiendaTC"
      },
      {
        name: "Pedido Confirmado Tienda Crédito Elektra",
        url: "/confirmadotiendacredito"
      },
      {
        name: "Pedido Confirmado Tienda Mercado Pago",
        url: "/pedidoConfirmadotiendamercadopago"
      },
      {
        name: "Pedido Confirmado Tienda PayPal",
        url: "/pedidoConfirmadotiendapaypal"
      },
      {
        name: "Pedido Listo para Entrega en Tienda",
        url: "/entregaTienda"
      },
      {
        name: "Pedido Entregado Tienda",
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
