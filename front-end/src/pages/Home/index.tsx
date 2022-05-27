import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SolutionOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { getBannerBGI } from "./utils";
import LoglistItem, { LoglistItemProps } from "../../components/LoglistItem";
import UserInfo, { UserInfoProps } from "./components/UserInfo";
import { transClasses } from "../../utils";
import { getLogList, getUserSignature } from "../../api";

const bgi = getBannerBGI();

interface HomeProps {}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const navigate = useNavigate();
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const store_UserInfo = useSelector(({ home }: any) => home.userInfo);
  const dispatch = useDispatch();
  const [newsList, setNewsList] = useState<LoglistItemProps[]>([]);
  const [userSignature, setUserSignature] = useState<UserInfoProps>(store_UserInfo);

  useEffect(() => {
    // 日志列表
    getLogList({ data: "data" }).then(({ code, message, data }: any) => {
      if (code === 200) {
        setNewsList(data);
      }
    });
  }, []);

  useEffect(() => {
    // 用户信息
    getUserSignature().then(({ code, message, data }: any) => {
      if (code === 200) {
        setUserSignature(data);
        dispatch({ type: "setUserInfo", userInfo: data });
      }
    });
  }, []);

  const jump = () => {
    // navigate("/resume");
    const w: any = window.open("about:blank");
    w.location.href = "http://45.77.247.127/resume/";
  };

  return (
    <div className={"home-page-wrapper"}>
      {/* BANNER */}
      <div className="banner-wrapper" style={{ backgroundImage: `url(${bgi})` }}>
        <div className="user">
          <div className="avatar">
            <img src={userSignature.avatar} alt="avatar" />
          </div>
          <div className="signature">
            <div className="title text">{userSignature.title}</div>
            <div className="description text">{userSignature.signature}</div>
          </div>
        </div>
      </div>
      <main>
        <div className="main-wrapper">
          <Row gutter={{ xs: 8, sm: 16, md: 18, lg: 20 }}>
            <Col xs={24} sm={14} md={16} lg={18}>
              <div className="log-list">
                {newsList.map((props, index) => (
                  <LoglistItem {...props} key={`new-item-${index}`} />
                ))}
              </div>
            </Col>
            <Col xs={24} sm={10} md={8} lg={6}>
              <aside>
                <UserInfo {...userSignature} />
                <div className={transClasses("resume", "MODULE", webPattern)} onClick={() => jump()}>
                  <SolutionOutlined />
                  {"  职业履历"}
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default Home;
