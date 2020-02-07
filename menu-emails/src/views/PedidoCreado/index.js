import React from "react";
import renderHTML from "react-render-html";

const someHTML = "<div></div>";
const PedidoCreado = () => {
  return <div>{renderHTML(someHTML)}</div>;
};
export default PedidoCreado;
