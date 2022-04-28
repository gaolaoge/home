import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import Tag_ from "../Tag_";
import "./index.less";
import { getDateString } from "../../utils";
import { useNavigate } from "react-router-dom";
import { transClasses } from "../../utils";

export type TagProps = "top" | "life" | "note" | "trip" | "log";
export interface LoglistItemProps {
  title: string;
  date: number;
  line?: boolean;
  tagList: TagProps[];
  dispatch?: any;
  log_uuid: string;
}
interface FLoglistItemProps extends LoglistItemProps {}

const BottomLine = () => {
  return <div className="serialLine"></div>;
};

const LoglistItem: FC<FLoglistItemProps> = (props: FLoglistItemProps) => {
  const { title, date, line, tagList, log_uuid } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const { dispatch, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div className={transClasses("logListItem", "MODULE", webPattern)}>
      <div
        className="title"
        onClick={() =>
          navigate(`/log-content/${title}`, {
            replace: false,
            state: { title, date, line, tagList, log_uuid }
          })
        }>
        {title}
      </div>
      <div className="date">{getDateString(date)}</div>
      <div className="tagList">
        {tagList && tagList.map((tag, index) => <Tag_ key={`${title}-tag-${index}`} type={tag} />)}
      </div>
      {line && <BottomLine />}
    </div>
  );
};

export default LoglistItem;
