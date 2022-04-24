import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Home from "../pages/Home";
import Tag from "../pages/Tag";
import Login from "../pages/Login";
import Note from "../pages/Note";
import Log from "../pages/Log";
import Photo from "../pages/Photo";
import Trip from "../pages/Trip";
import Album from "../pages/Album";
import Resume from "../pages/Resume";
import Vlog from "../pages/Vlog";
import Log_Content from "../modules/Log-content";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Base />}>
          <Route path={"home"} element={<Home />} />
          <Route path={"note"} element={<Note />} />
          <Route path={"log"} element={<Log />} />
          <Route path={"photo"} element={<Photo />} />
          <Route path={"trip"} element={<Trip />} />
          <Route path={"tag"} element={<Tag />} />
          <Route path={"resume"} element={<Resume />} />
          <Route path={"vlog"} element={<Vlog />} />
          <Route path={"album/:name"} element={<Album />} />
          <Route path={"log-content/:name"} element={<Log_Content />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}
