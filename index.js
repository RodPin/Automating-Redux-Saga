import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/index";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/store/configStore";

const RNredux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNredux);
