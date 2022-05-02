import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { Provider } from "react-redux";
import store from "../src/store";

test("entry file test", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
