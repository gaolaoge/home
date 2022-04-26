import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.less";
import Router from "./router";
import "./assets/default.less";
import Loading from "./components/Loading";

interface AppProps {}

function App(props: AppProps) {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const [shutLoading, setShutLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShutLoading(true);
      setTimeout(() => setDeleteLoading(true), 500);
    }, 2000);
  }, []);
  return (
    <div className={`App ${webPattern === "Dark" ? "dark" : ""}`}>
      {!deleteLoading && <Loading shutLoading={shutLoading} />}
      <Router />
    </div>
  );
}

export default App;
