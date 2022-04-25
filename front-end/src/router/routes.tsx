import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

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

const element = [
  {
    path: "/",
    element: (
      <Suspense fallback={"loading..."}>
        <LazyBase />
      </Suspense>
    ),
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyHome />
          </Suspense>
        )
      },
      {
        path: "note",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyNote />
          </Suspense>
        )
      },
      {
        path: "log",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyLog />
          </Suspense>
        )
      },
      {
        path: "photo",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyPhoto />
          </Suspense>
        )
      },
      {
        path: "trip",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyTrip />
          </Suspense>
        )
      },
      {
        path: "tag",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyTag />
          </Suspense>
        )
      },
      {
        path: "resume",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyResume />
          </Suspense>
        )
      },
      {
        path: "vlog",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyVlog />
          </Suspense>
        )
      },
      {
        path: "album/:name",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyAlbum />
          </Suspense>
        )
      },
      {
        path: "log-content/:name",
        element: (
          <Suspense fallback={"loading..."}>
            <LazyLog_Content />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={"loading..."}>
        <LazyLogin />
      </Suspense>
    )
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
