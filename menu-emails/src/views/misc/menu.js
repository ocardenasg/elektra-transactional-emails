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
        name: "Pedido Creado Crédito Elektra S/E",
        url: "/confirmadotiendacredito"
      },
      {
        name: "Pedido Creado Crédito Elektra C/E",
        url: "/confirmadotiendacreditoCE"
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
        name: "Pedido Listo para Entrega Crédito Elektra S/E",
        url: "/entregaTiendaCreditoEktSE"
      },
      {
        name: "Pedido Listo para Entrega Crédito Elektra C/E",
        url: "/entregaTiendaCreditoEktCE"
      },
      {
        name: "Pedido Entregado",
        url: "/correoentregadotienda"
      },
      {
        name: "Pedido Entregado Crédito Elektra S/E",
        url: "/correoentregadoCreditoSE"
      },
      {
        name: "Pedido Entregado Crédito Elektra C/E",
        url: "/correoentregadoCreditoCE"
      }
    ]
  },
  {
    name: "CRÉDITO ELEKTRA",
    options: [
      {
        name: "Aprobación de Crédito Elektra",
        url: "/aprobacioncreditotienda"
      },
      {
        name: "Cancelación de Crédito Elektra Antes de Entrega CE",
        url: "/canceladoEngancheAntesdeEntrega"
      },
      {
        name: "Cancelación de Crédito Elektra Antes de Entrega SE",
        url: "/canceladoEngancheAntesdeEntregaSE"
      },
      {
        name: "Cancelación Crédito CE",
        url: "/cancelacionCreditoCE"
      },
      {
        name: "Cancelación Crédito sin Abono y Enganche",
        url: "/cancelacionCreditoSASE"
      },
      {
        name: "Pedido Cancelado con Abono",
        url: "/pedidoCanceladoAbono"
      },
      {
        name: "Pedido Cancelado con Abono y Enganche",
        url: "/pedidoCanceladoAbonoEnganche"
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
        name: "Pedido Creado Baz Referenciado",
        url: "/pedidoCreadoBazRef"
      },
      {
        name: "Pedido Creado Italika TDD/TDC",
        url: "/pedidoCreadoItalika"
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
        name: "Pedido Enviado Baz Referenciado",
        url: "/pedidoEnviadoBazRef"
      },
      {
        name: "Pedido Enviado Italika TDD/TDC",
        url: "/pedidoEnviadoItalika"
      },
      {
        name: "Pedido Entregado OneClic",
        url: "/pedidoEntregadoOneClic"
      },
      {
        name: "Pedido Entregado PayPal",
        url: "/pedidoEntregadoPayPal"
      },
      {
        name: "Pedido Entregado Baz Referenciado",
        url: "/pedidoEntregadoBazDomRef"
      },
      {
        name: "Pedido Entregado Italika TDD/TDC",
        url: "/pedidoEntregadoItalika"
      }
    ]
  },
  {
    name: "ARTÍCULO DIGITAL",
    options: [
      {
        name: "Pedido creado TDD/TDC",
        url: "/confirmadoDigitalTDDTDC"
      },
      {
        name: "Pedido listo TDD/TDC",
        url: "/listoDigitalTDDTDC"
      }
    ]
  }
];
export default menu;
