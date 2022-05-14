import React from "react";
import { connect, useSelector } from "react-redux";
import "./index.less";
import { GithubOutlined, AlipayCircleOutlined, QqOutlined, WechatOutlined, MailFilled } from "@ant-design/icons";
import Gitee from "../../../../assets/icons/Gitee";
import { notification, Popover } from "antd";
import WXIMG from "../../../../assets/images/WechatIMG.png";

export interface UserInfoProps {
  avatar?: string;
  title?: string;
  signature?: string;
  userName?: string;
  articlesNum?: number;
  tabsNum?: number;
  gitURL?: string;
  giteeURL?: string;
  ALiPay?: string;
  QQ?: string;
  WeChat?: string;
  Email?: string;
}
interface FUserInfoProps extends UserInfoProps {}

function UserInfo(props: FUserInfoProps) {
  const { avatar, userName, articlesNum, tabsNum, gitURL, giteeURL, ALiPay, QQ, WeChat, Email } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);

  // 加入书签
  const addBookmark = () => {};

  return (
    <div className={`userInfo-wrapper ${webPattern}`}>
      <div className="userHeader">
        <img className={"avatar"} src={avatar} alt="userAvatarSrc" />
        <span className="name">{userName}</span>
      </div>
      <div className="dynamic">
        <div className="statistics">
          <span className={"label"}>文章</span>
          <span className={"value"}>{articlesNum}</span>
        </div>
        <div className="statistics">
          <span className={"label"}>标签</span>
          <span className={"value"}>{tabsNum}</span>
        </div>
      </div>
      <div className="bookmark">
        <div className="bookmarkBtn" onClick={() => addBookmark()}>
          <i className={"iconfont icon-qizhi-"} />
          加入书签
        </div>
      </div>
      <div className="otherPlatform">
        {/* GitHub */}
        <div>
          <a href={gitURL} target="_blank">
            <GithubOutlined className={"icon"} />
          </a>
        </div>
        {/* Gitee */}
        <div>
          <a href={giteeURL} target="_blank">
            <Gitee className={"icon"} />
          </a>
        </div>
        {/* qq */}
        <Popover placement="bottom" content={QQ}>
          <QqOutlined className={"icon"} />
        </Popover>
        {/* 微信 */}
        <Popover placement="bottom" content={WeChat}>
          <WechatOutlined className={"icon"} />
        </Popover>
        {/* Email */}
        <a href={"mailto:" + Email}>
          <MailFilled className={"icon"} />
        </a>
      </div>
    </div>
  );
}

export default UserInfo;
