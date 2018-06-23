import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "~/reducers";

import "~/index.css";
import routes from "~/routes";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
