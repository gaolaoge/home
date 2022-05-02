import React from "react";
import Header from "../../../src/modules/Header";
import { Provider } from "react-redux";
import store from "../../../src/store";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";

const Component = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={"/"} element={<Header />} />
      </Routes>
    </Router>
  </Provider>
);

describe("Header component test", () => {
  beforeEach(() => {
    cleanup();
  });

  it("render component", () => {
    render(<Component />);
    const Node = screen.getByTestId("header-wrapper");
    expect(Node).toBeInTheDocument();
    expect(Node).toHaveTextContent("HERE IS LOGO");
  });
});
