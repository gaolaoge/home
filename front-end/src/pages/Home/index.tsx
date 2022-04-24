import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SolutionOutlined } from "@ant-design/icons";
import { getBannerBGI } from "./utils";
import LoglistItem, { LoglistItemProps } from "../../components/LoglistItem";
import UserInfo, { UserInfoProps } from "./components/UserInfo";

import { getLogList, getUserSignature } from "../../api";

const bgi = getBannerBGI();

interface HomeProps {}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const navigate = useNavigate();
  const webPattern = useSelector((state: any) => state.webPattern);
  const [newsList, setNewsList] = useState<LoglistItemProps[]>([]);
  const [userSignature, setUserSignature] = useState<UserInfoProps | undefined>(undefined);

  useEffect(() => {
    // 日志列表
    getLogList({ data: "data" }).then((data: LoglistItemProps[]) => {
      setNewsList(data);
    });
  }, []);

  useEffect(() => {
    // 用户信息
    getUserSignature().then((data: UserInfoProps) => {
      setUserSignature(data);
    });
  }, []);

  return (
    <div className={"home-page-wrapper"}>
      <div className="banner-wrapper" style={{ backgroundImage: `url(${bgi})` }}>
        <div className="user">
          <div className="avatar">
            <img src={userSignature && userSignature.avatar} alt="avatar" />
          </div>
          <div className="signature">
            <div className="title text">{userSignature && userSignature.title}</div>
            <div className="description text">{userSignature && userSignature.signature}</div>
          </div>
        </div>
      </div>
      <main>
        <div className="main-wrapper">
          <div className="log-list">
            {newsList.map((props, index) => (
              <LoglistItem {...props} key={`new-item-${index}`} />
            ))}
          </div>
          <aside>
            <UserInfo {...userSignature} />
            <div className={`resume ${webPattern}`} onClick={() => navigate("/resume")}>
              <SolutionOutlined />
              {"  职业履历"}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
