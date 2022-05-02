import React, { Suspense, lazy, FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Spin } from "antd";

const LazyBase = lazy(() => import("../pages/Base"));
const LazyHome = lazy(() => import("../pages/Home"));
const LazyTag = lazy(() => import("../pages/Tag"));
const LazyLogin = lazy(() => import("../pages/Login"));
const LazyNote = lazy(() => import("../pages/Note"));
const LazyLog = lazy(() => import("../pages/Log"));
const LazyPhoto = lazy(() => import("../pages/Photo"));
const LazyTrip = lazy(() => import("../pages/Trip"));
const LazyAlbum = lazy(() => import("../pages/Album"));
const LazyResume = lazy(() => import("../pages/Resume"));
const LazyVlog = lazy(() => import("../pages/Vlog"));
const LazyLog_Content = lazy(() => import("../modules/Log-content"));

const SuspenseLazyBase = () => (
  <Suspense
    fallback={
      <div style={{ width: "100%", display: "flex" }}>
        <Spin />
      </div>
    }>
    <LazyBase />
  </Suspense>
);

const CreateSuspense = (Component: React.ReactNode) => <Suspense fallback={<Spin />}>{Component}</Suspense>;

const element = [
  {
    path: "/",
    element: <SuspenseLazyBase />,
    children: [
      {
        path: "home",
        element: CreateSuspense(<LazyHome />)
      },
      {
        path: "note",
        element: CreateSuspense(<LazyNote />)
      },
      {
        path: "log",
        element: CreateSuspense(<LazyLog />)
      },
      {
        path: "photo",
        element: CreateSuspense(<LazyPhoto />)
      },
      {
        path: "trip",
        element: CreateSuspense(<LazyTrip />)
      },
      {
        path: "tag",
        element: CreateSuspense(<LazyTag />)
      },
      {
        path: "resume",
        element: CreateSuspense(<LazyResume />)
      },
      {
        path: "vlog",
        element: CreateSuspense(<LazyVlog />)
      },
      {
        path: "album/:name",
        element: CreateSuspense(<LazyAlbum />)
      },
      {
        path: "log-content/:name",
        element: CreateSuspense(<LazyLog_Content />)
      }
    ]
  },
  {
    path: "/login",
    element: CreateSuspense(<LazyLogin />)
  },
  {
    path: "*",
    element: <Navigate to={"/"} />
  }
];

function Routes() {
  return useRoutes(element);
}

export default Routes;
