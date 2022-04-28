import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { Row, Col, Input, Avatar, Button, Form, Comment } from "antd";
import { MessageOutlined, LikeOutlined, ForkOutlined, SwitcherOutlined, CaretDownOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Comment_, { GCommentProps } from "../../components/Comment_";
import articleContent from "./content";
import { getDateString, transClasses } from "../../utils";

interface LogInfoProps {
  liked: number;
  commended: number;
  readed: number;
  previousLog: any;
  nextLog: any;
}
interface ArticleCommentListProps {
  commentList: GCommentProps[];
}
interface LogContentProps {}
interface FLogContentProps extends LogContentProps {}

const { TextArea } = Input;
const { Item } = Form;

const commentList: GCommentProps[] = [
  {
    avatar: "https://img0.baidu.com/it/u=4103234006,2191795794&fm=26&fmt=auto",
    name: "高歌",
    to: "",
    date: "1638319278090",
    content:
      "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234540",
    children: [
      {
        avatar: "https://img0.baidu.com/it/u=4103234006,2191795794&fm=26&fmt=auto",
        name: "地瓜",
        to: "高歌",
        date: "1638369278091",
        content: "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
        comment_uuid: "4563453456567345234541",
        children: []
      },
      {
        avatar: "https://img0.baidu.com/it/u=4103234006,2191795794&fm=26&fmt=auto",
        name: "刘方园",
        to: "高歌",
        date: "1638369278092",
        content: "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
        comment_uuid: "4563453456567345234542",
        children: []
      }
    ]
  },
  {
    avatar: "https://img0.baidu.com/it/u=3584329929,793623514&fm=26&fmt=auto",
    name: "方腚",
    to: "",
    date: "1638369278093",
    content: "2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234543",
    children: []
  },
  {
    avatar: "https://img0.baidu.com/it/u=2678556952,717575309&fm=26&fmt=auto",
    name: "蟹晨",
    to: "",
    date: "1638369278094",
    content:
      "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234544",
    children: []
  },
  {
    avatar: "https://img0.baidu.com/it/u=2145573694,3776460983&fm=26&fmt=auto",
    name: "于淇",
    to: "",
    date: "1638369278095",
    content:
      "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234545",
    children: []
  }
];

const Editor: FC = props => {
  return (
    <div className={`editor-wrapper`}>
      <TextArea rows={4} />
      <Button type={"primary"} loading={true} className={`comment-btn`}>
        提交
      </Button>
    </div>
  );
};

const ArticleCommentList: FC<ArticleCommentListProps> = (props: ArticleCommentListProps) => {
  const { commentList } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const getCommentNodeList = () =>
    commentList.map(comment => <Comment_ key={`comment+component-key:${comment.comment_uuid}`} {...comment} />);
  return (
    <div className={`ArticleComment`}>
      <Comment avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />} content={<Editor />} />
      {getCommentNodeList()}
    </div>
  );
};

const Log_Content: FC<FLogContentProps> = (props: FLogContentProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const { state } = useLocation();
  const { title, date, tagList, log_uuid } = state;
  const [loading, setLoading] = useState(true);
  const siteMode = webPattern === "Dark" ? "dark" : "light";
  const [logInfo, setLogInfo] = useState<LogInfoProps>({
    liked: 0,
    commended: 0,
    readed: 0,
    previousLog: null,
    nextLog: null
  });

  useEffect(() => {
    // 获取日志信息
    setTimeout(() => {
      // log_uuid
      setLogInfo({
        liked: 8,
        commended: 12,
        readed: 95,
        previousLog: null,
        nextLog: {
          log_uuid: "8766876786746777",
          log_name: "7个最简单的蛋糕方子，拯救没有烤箱的童鞋！！"
        }
      });
      setLoading(false);
    }, 2000);
  }, []);

  // 操作列
  const getOperateList = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className={"item"}>
          <LikeOutlined />
          赞({logInfo.liked})
        </div>
        <div className={"item"}>
          <MessageOutlined />
          评论({logInfo.commended})
        </div>
        <div className={"item"}>
          <ForkOutlined />
          分享
        </div>
        <div className={"item"}>
          <SwitcherOutlined />
          复制地址
        </div>
        <div className={"item"}>
          更多
          <CaretDownOutlined />
        </div>
      </div>
    );
  };

  // 翻页
  const getPageTurn = () => {
    return (
      <>
        {logInfo.previousLog ? (
          <span
            className={"checkLog"}
            title={logInfo.previousLog.log_name}
            onClick={() => checkLog(logInfo.previousLog.log_uuid)}>
            上一篇：{logInfo.previousLog.log_name}
          </span>
        ) : (
          "已经是第一篇"
        )}
        <span className={"cut-off"}>{"|"}</span>
        {logInfo.nextLog ? (
          <span
            className={"checkLog"}
            title={logInfo.nextLog.log_name}
            onClick={() => checkLog(logInfo.nextLog.log_uuid)}>
            下一篇：{logInfo.nextLog.log_name}
          </span>
        ) : (
          "已经是最后一篇"
        )}
      </>
    );
  };

  // 切换日志
  const checkLog = (log_uuid: number) => {};

  return (
    <div className={transClasses("logContent-page-wrapper", "PAGE_WRAPPER", siteMode)}>
      <main className="PAGE_WRAPPER_MAIN">
        <div className="art-header">
          <div className="title">
            <span className="art-type">[顶]</span>
            <span className="art-title">{title}</span>
          </div>
          <div className="date">
            <span className="art-date-time">{getDateString(date)}</span>
            <span className="art-page-views">阅读({logInfo.readed})</span>
          </div>
          <Row className="logOperate" justify={"space-between"}>
            <Col className="operate">{getOperateList()}</Col>
            <Col className="page-turn">{getPageTurn()}</Col>
          </Row>
        </div>
        {/* 内容 */}
        <article>
          <div className="article-title">{title}</div>
          {articleContent}
        </article>
        <div className="art-footer">
          <Row className="logOperate" justify={"space-between"}>
            <Col className="operate">{getOperateList()}</Col>
            <Col className="page-turn">{getPageTurn()}</Col>
          </Row>
        </div>
        <ArticleCommentList commentList={commentList} />
      </main>
    </div>
  );
};

export default Log_Content;
