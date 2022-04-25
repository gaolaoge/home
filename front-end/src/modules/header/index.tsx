import React, { useEffect, useReducer, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.less";
import Logo from "@/assets/logo_header.png";
import "@/assets/iconfont.css";
import { Menu, Input, Dropdown, DropDownProps, Button } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";

const { Item } = Menu;

interface HeaderProps {}

const navs = [
  { name: "首页", path: "/home", active: false },
  { name: "笔记", path: "/note", active: false },
  { name: "日志", path: "/log", active: false },
  { name: "相册", path: "/photo", active: false },
  { name: "标签", path: "/tag", active: false },
  { name: "旅途", path: "/trip", active: false },
  { name: "vlog", path: "/vlog", active: false }
];

function Header(props: HeaderProps) {
  console.log("render");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const dispatch = useDispatch();
  const [, refresh] = useReducer(num => (num += 1), 0);
  useEffect(() => {
    // 预判刷新动作
    changeNavActive({ type: "path", value: pathname });
  }, []);
  const changeNavActive = (obj: { type: "path" | "name"; value: string }) => {
    const { type, value } = obj;
    navs.forEach(nav => {
      let navVal;
      type === "path" && (navVal = nav.path);
      type === "name" && (navVal = nav.name);
      if (navVal === value) nav.active = true;
      else nav.active = false;
    });
    refresh();
  };
  // 切换路由
  const checkNav = (path: string) => {
    changeNavActive({ type: "path", value: path });
    navigate(path);
  };
  const triggerPatter = () => {
    webPattern === "Dark" ? dispatch({ type: "setWebPatter" }) : dispatch({ type: "setWebPatter" });
  };
  const dropdownProps: DropDownProps = {
    overlay: (
      <Menu>
        <Item key={`Menu-Item-${0}`}>
          <a target="_blank" href="https://www.antgroup.com">
            仓库地址
          </a>
        </Item>
        <Item key={`Menu-Item-${1}`}>
          <a target="_blank" href="https://www.antgroup.com">
            项目地址
          </a>
        </Item>
      </Menu>
    ),
    arrow: true,
    placement: "bottomRight"
  };
  return (
    <div className="occupied">
      <div className={`headerWrapper ${webPattern}`}>
        {webPattern === "Dark" && (
          <span className={"LogoText"} onClick={() => navigate("/home")}>
            HERE IS LOGO
          </span>
        )}
        {webPattern === "Light" && <img src={Logo} alt="logo" className={"logo"} onClick={() => navigate("/home")} />}
        <div className={"operation"}>
          <div className="pattern" onClick={() => triggerPatter()}>
            {webPattern === "Dark" && <i className={"iconfont icon-tianqitaiyangqichuang"} />}
            {webPattern === "Light" && <i className={"iconfont icon-yueliang"} />}
          </div>
          <Input className={"searchInput"} prefix={<SearchOutlined />} />
          <div className="nav">
            {navs.map(({ name, path, active }) => (
              <div
                className={`navItem ${active ? "active" : null} ${webPattern}`}
                key={"nav-key-" + name}
                onClick={() => checkNav(path)}>
                {name}
              </div>
            ))}

            <Dropdown {...dropdownProps}>
              <div className={`navItem ${webPattern}`}>
                GitHub <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
