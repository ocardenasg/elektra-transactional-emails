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
        name: "Pedido Confirmado Crédito Elektra",
        url: "/confirmadotiendacredito"
      },
      {
        name: "Pedido Confirmado Mercado Pago",
        url: "/pedidoConfirmadotiendamercadopago"
      },
      {
        name: "Pedido Confirmado PayPal",
        url: "/pedidoConfirmadotiendapaypal"
      },
      {
        name: "Pedido Confirmado PayU",
        url: "/pedidoConfirmadotiendapayu"
      },
      {
        name: "Pedido Listo para Entrega",
        url: "/entregaTienda"
      },
      {
        name: "Pedido Listo para Entrega Crédito Elektra Engache",
        url: "/entregaTiendaCreditoEktEnganche"
      },
      {
        name: "Pedido Entregado Tienda",
        url: "/correoentregadotienda"
      }
    ]
  },
  {
    name: "ENVIO A DOMICILIO",
    options: [
      {
        name: "Pedido Confirmado OneClic",
        url: "/confirmadOneClic"
      },
      {
        name: "Pedido Enviado OneClic",
        url: "/enviadOneClic"
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
