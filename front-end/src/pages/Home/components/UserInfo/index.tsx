import { connect } from "react-redux";
import "./index.less";
import { WebPatternProps } from "../../../../store/state/global";
import { GithubOutlined, AlipayCircleOutlined, QqOutlined, WechatOutlined, MailFilled } from "@ant-design/icons";

export interface UserInfoProps {
  avatar?: string;
  title?: string;
  signature?: string;
  userName?: string;
  articlesNum?: number;
  tabsNum?: number;
  gitURL?: string;
  ALiPay?: string;
  QQ?: string;
  WeChat?: string;
  Email?: string;
}
interface FUserInfoProps extends UserInfoProps, WebPatternProps {}

function UserInfo(props: FUserInfoProps) {
  const { avatar, userName, articlesNum, tabsNum, gitURL, ALiPay, QQ, WeChat, Email } = props;
  const { webPattern } = props;
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
        <div className="bookmarkBtn">
          <i className={"iconfont icon-qizhi-"} />
          加入书签
        </div>
      </div>
      <div className="otherPlatform">
        <div>
          <GithubOutlined className={"accountLogo"} />
        </div>
        <div>
          <AlipayCircleOutlined className={"accountLogo"} />
        </div>
        <div>
          <QqOutlined className={"accountLogo"} />
        </div>
        <div>
          <WechatOutlined className={"accountLogo"} />
        </div>
        <div>
          <MailFilled className={"accountLogo"} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern
});
export default connect(mapStateToProps)(UserInfo);
