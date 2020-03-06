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
        name: "Pedido Creado TC/PayU",
        url: "/correocreadotiendaTC"
      },
      {
        name: "Pedido Creado Crédito Elektra",
        url: "/confirmadotiendacredito"
      },
      {
        name: "Pedido Creado Mercado Pago",
        url: "/pedidoConfirmadotiendamercadopago"
      },
      {
        name: "Pedido Creado PayPal",
        url: "/pedidoConfirmadotiendapaypal"
      },
      {
        name: "Pedido Creado PayU",
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
        name: "Pedido Entregado",
        url: "/correoentregadotienda"
      },
      {
        name: "Aprobación de Crédito Elektra",
        url: "/aprobacioncreditotienda"
      }
    ]
  },
  {
    name: "ENVIO A DOMICILIO",
    options: [
      {
        name: "Pedido Creado OneClic",
        url: "/confirmadOneClic"
      },
      {
        name: "Pedido Creado PayPal",
        url: "/pedidoConfirmadoPayPal"
      },
      {
        name: "Pedido Enviado OneClic",
        url: "/enviadOneClic"
      },
      {
        name: "Pedido Enviado PayPal",
        url: "/pedidoEnviadoPayPal"
      },
      {
        name: "Pedido Entregado OneClic",
        url: "/pedidoEntregadoOneClic"
      },
      {
        name: "Pedido Entregado PayPal",
        url: "/pedidoEntregadoPayPal"
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
