import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "~/index.css";
import rootReducer from "~/reducers";
import routes from "~/routes";
import * as firebase from "firebase/app";
import firebaseConfig from "~/config/firebase";
firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(function() {
    console.log("Service Worker Registered");
  });
} else {
  console.log("navigator", navigator);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
