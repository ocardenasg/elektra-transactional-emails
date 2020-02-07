import React from "react";
import Menu from "./views/Menu";
import Correos from "./views/Correos";
import styles from "./index.module.sass";
import PedidoCreado from "./views/PedidoCreado";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <Menu />
          </div>
        </Route>
        <Route path="/correocreado">
          <div className={styles.container}>
            <Menu />
            <iframe
              src="/pedidoCreadoBazTienda/index.html"
              width="60%"
              height="auto"
            >
              {" "}
            </iframe>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
