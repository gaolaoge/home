import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.less";
import "@/assets/style/iconfont.css";
import { Menu, Input, Dropdown, DropDownProps } from "antd";
import { SearchOutlined, CaretDownOutlined, MenuOutlined } from "@ant-design/icons";
import { transClasses } from "../../utils";

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

const gitOutreach = [
  { name: "仓库地址", path: "https://www.antgroup.com", target: "_blank" },
  { name: "项目地址", path: "https://www.antgroup.com", target: "_blank" }
];

function Header(props: HeaderProps) {
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
      <Menu theme={webPattern.toLowerCase()}>
        {gitOutreach.map(({ name, path, target }, index) => (
          <Item key={`Menu-Item-${index}`}>
            <a target={target} href={path}>
              {name}
            </a>
          </Item>
        ))}
      </Menu>
    ),
    arrow: true,
    placement: "bottomRight",
    trigger: ["click"],
    overlayClassName: "header_navs_dropdown"
  };
  const miniScreenDropdownProps: DropDownProps = {
    overlay: (
      <Menu theme={webPattern.toLowerCase()}>
        {navs.map(({ name, path, active }, index) => (
          <Item key={`Menu-Item-mini-${index}`}>
            <div key={"mini-nav-key-" + name} onClick={() => checkNav(path)}>
              {name}
            </div>
          </Item>
        ))}
        {gitOutreach.map(({ name, path, target }, index) => (
          <Item key={`Menu-Item-${index}`}>
            <a target={target} href={path}>
              {name}
            </a>
          </Item>
        ))}
      </Menu>
    ),
    arrow: true,
    placement: "bottomRight",
    trigger: ["click", "hover"]
  };
  return (
    <div className="occupied">
      <div className={transClasses("headerWrapper", webPattern)}>
        <div className="L">
          {/* 纵向导航 */}
          <div>
            <Dropdown {...miniScreenDropdownProps} className={"nav-column"}>
              <MenuOutlined style={{ fontSize: "20px", color: webPattern === "Dark" ? "#fff" : "#222" }} />
            </Dropdown>
          </div>
          {/* LOGO */}
          <div id="logo">
            <span className={`LogoText ${webPattern}`} onClick={() => navigate("/home")}>
              HERE IS LOGO
            </span>
          </div>
        </div>
        <div className={"operation"}>
          {/* 切换 */}
          <div className="pattern" onClick={() => triggerPatter()}>
            {webPattern === "Dark" && <i className={"iconfont icon-tianqitaiyangqichuang"} />}
            {webPattern === "Light" && <i className={"iconfont icon-yueliang"} />}
          </div>
          {/* 检索框 */}
          <Input className={`searchInput`} prefix={<SearchOutlined />} />
          {/* 导航-横向 */}
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
