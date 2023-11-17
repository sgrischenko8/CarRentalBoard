import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import Loader from "./components/Loader/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="/CarRentalBoard">
          <App />
        </HashRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// persistor.purge();
