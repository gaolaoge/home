import React, { FC, useState, useCallback } from "react";
import "./index.less";
import { Input, Avatar, Button, Form, Comment, Tooltip } from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/zh-cn";

export interface GCommentProps {
  avatar: string;
  name: string;
  date: string;
  to: string | undefined;
  content: string;
  comment_uuid: string;
  children?: GCommentProps[];
}
interface FGCommentProps extends GCommentProps {}

const G_Comment: FC<FGCommentProps> = (props: FGCommentProps) => {
  const { avatar, name, date, to, content, children } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<"liked" | "disliked" | null>(null);
  const [replying, setReplying] = useState(false);
  const [replyVal, setReplyVal] = useState("");

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const getBtnStatus = useCallback(() => {
    return String(replyVal.trim()).length > 0 ? "" : "ant-btn-loading";
  }, [replyVal]);

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {action === "liked" ? <LikeFilled /> : <LikeOutlined />}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {action === "disliked" ? <DislikeFilled /> : <DislikeOutlined />}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={() => setReplying(!replying)}>
      {replying ? "取消回复" : "回复"}
    </span>,
    <div key="comment-basic-input" className={`reply-basic-input ${replying && "show"}`}>
      <Input
        type="text"
        placeholder={to ? `回复给${to}` : "写下你的评论..."}
        value={replyVal}
        onChange={({ target }) => {
          setReplyVal(target.value);
        }}
      />
      <Button type={"primary"} className={`reply-basic-input-btn ${getBtnStatus()}`}>
        发布
      </Button>
    </div>
  ];

  return (
    <>
      <Comment
        avatar={avatar}
        author={
          <>
            <span>{name}</span>
            {to && <span> @{to}</span>}
          </>
        }
        content={content}
        actions={actions}
        datetime={
          <Tooltip title={moment(Number(date)).format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(Number(date)).fromNow()}</span>
          </Tooltip>
        }
        className={`${replying ? "openReplyInput" : ""}`}>
        {children && children.map(child => <G_Comment {...child} key={`G_Comment-key:${child.comment_uuid}`} />)}
      </Comment>
    </>
  );
};

export default G_Comment;
