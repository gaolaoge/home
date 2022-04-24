import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.less";
import Logo from "../../assets/logo_header.png";
import "../../assets/iconfont.css";
import { Menu, Input, Dropdown, DropDownProps, Button } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";

const { Item } = Menu;

interface HeaderProps {}

const navs = ["首页", "笔记", "日志", "相册", "标签", "旅途", "vlog"];

function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const dispatch = useDispatch();
  const [navIndex, changeNavIndex] = useState(0);
  useEffect(() => {
    switch (pathname) {
      case "/home":
        changeNavIndex(0);
        break;
      case "/note":
        changeNavIndex(1);
        break;
      case "/log":
        changeNavIndex(2);
        break;
      case "/photo":
        changeNavIndex(3);
        break;
      case "/tag":
        changeNavIndex(5);
        break;
      case "/trip":
        changeNavIndex(6);
        break;
      case "/vlog":
        changeNavIndex(7);
        break;
    }
  }, []);
  // 切换路由
  const checkNav = (index: number, nav: string) => {
    changeNavIndex(index);
    switch (nav) {
      case "首页":
        navigate("/home");
        break;
      case "笔记":
        navigate("/note");
        break;
      case "日志":
        navigate("/log");
        break;
      case "相册":
        navigate("/photo");
        break;
      case "旅途":
        navigate("/trip");
        break;
      case "标签":
        navigate("/tag");
        break;
      case "vlog":
        navigate("/vlog");
        break;
    }
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
          {navs.map((nav, index) => (
            <div
              className={`navItem ${navIndex == index ? "active" : null} ${webPattern}`}
              key={"nav-" + index}
              onClick={() => checkNav(index, nav)}>
              {nav}
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
  );
}

export default Header;
