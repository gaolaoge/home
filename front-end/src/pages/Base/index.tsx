import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../../modules/Header";
import "./index.less";

interface BaseProps {}

export default function (props: BaseProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") navigate("/home");
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
