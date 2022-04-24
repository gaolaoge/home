import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { Input, Avatar, Button, Form, Comment } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  ForkOutlined,
  SwitcherOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { WebPatternProps } from "../../store/state/global";
import G_Comment, { GCommentProps } from "../../components/G_Comment";
import articleContent from "./content";
import { getDateString } from "../../utils";

interface LogInfoProps {
  liked: number;
  commended: number;
  readed: number;
  previousLog: any;
  nextLog: any;
}
interface ArticleCommentListProps extends WebPatternProps {
  commentList: GCommentProps[];
}
interface LogContentProps {}
interface FLogContentProps extends LogContentProps, WebPatternProps {}

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
        avatar:
          "https://img0.baidu.com/it/u=4103234006,2191795794&fm=26&fmt=auto",
        name: "地瓜",
        to: "高歌",
        date: "1638369278091",
        content:
          "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
        comment_uuid: "4563453456567345234541",
        children: [],
      },
      {
        avatar:
          "https://img0.baidu.com/it/u=4103234006,2191795794&fm=26&fmt=auto",
        name: "刘方园",
        to: "高歌",
        date: "1638369278092",
        content:
          "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
        comment_uuid: "4563453456567345234542",
        children: [],
      },
    ],
  },
  {
    avatar: "https://img0.baidu.com/it/u=3584329929,793623514&fm=26&fmt=auto",
    name: "方腚",
    to: "",
    date: "1638369278093",
    content: "2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234543",
    children: [],
  },
  {
    avatar: "https://img0.baidu.com/it/u=2678556952,717575309&fm=26&fmt=auto",
    name: "蟹晨",
    to: "",
    date: "1638369278094",
    content:
      "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234544",
    children: [],
  },
  {
    avatar: "https://img0.baidu.com/it/u=2145573694,3776460983&fm=26&fmt=auto",
    name: "于淇",
    to: "",
    date: "1638369278095",
    content:
      "2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！2021的最后要快乐每一天！12月加油！",
    comment_uuid: "4563453456567345234545",
    children: [],
  },
];

const Editor: FC = (props) => {
  return (
    <div className={`editor-wrapper`}>
      <TextArea rows={4} />
      <Button type={"primary"} loading={true} className={`comment-btn`}>
        提交
      </Button>
    </div>
  );
};

const ArticleCommentList: FC<ArticleCommentListProps> = (
  props: ArticleCommentListProps
) => {
  const { commentList, webPattern } = props;
  const getCommentNodeList = () =>
    commentList.map((comment) => (
      <G_Comment key={`G_Comment-key:${comment.comment_uuid}`} {...comment} />
    ));
  return (
    <div className={`ArticleComment`}>
      <Comment
        avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
        content={<Editor />}
      />
      {getCommentNodeList()}
    </div>
  );
};

const Log_Content: FC<FLogContentProps> = (props: FLogContentProps) => {
  const { webPattern } = props;
  const { state } = useLocation();
  const { title, date, tagList, log_uuid } = state;
  const [loading, setLoading] = useState(true);
  const [logInfo, setLogInfo] = useState<LogInfoProps>({
    liked: 0,
    commended: 0,
    readed: 0,
    previousLog: null,
    nextLog: null,
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
          log_name: "7个最简单的蛋糕方子，拯救没有烤箱的童鞋！！",
        },
      });
      setLoading(false);
    }, 2000);
  }, []);

  // 操作列
  const getOperateList = () => {
    return (
      <>
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
      </>
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
            onClick={() => checkLog(logInfo.previousLog.log_uuid)}
          >
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
            onClick={() => checkLog(logInfo.nextLog.log_uuid)}
          >
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
    <div className={`logContent-page-wrapper ${webPattern}`}>
      <main>
        <div className="art-header">
          <div className="row">
            <div className="art-type">[顶]</div>
            <div className="art-title">{title}</div>
            <div className="art-date-time">{getDateString(date)}</div>
            <div className="art-page-views">阅读({logInfo.readed})</div>
          </div>
          <div className="row o">
            <div className="operate">{getOperateList()}</div>
            <div className="page-turn">{getPageTurn()}</div>
          </div>
        </div>
        <article>
          <div className="article-title">{title}</div>
          {articleContent}
        </article>
        <div className="art-footer">
          <div className="row o">
            <div className="operate">{getOperateList()}</div>
            <div className="page-turn">{getPageTurn()}</div>
          </div>
        </div>
        <ArticleCommentList commentList={commentList} webPattern={webPattern} />
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});
export default connect(mapStateToProps)(Log_Content);
