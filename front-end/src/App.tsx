import React from "react";
import { useSelector } from "react-redux";
import "./App.less";
import Router from "./router";
import "./assets/default.less";

interface AppProps {}

function App(props: AppProps) {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={`App ${webPattern === "Dark" ? "dark" : ""}`}>
      <Router />
    </div>
  );
}

export default App;
