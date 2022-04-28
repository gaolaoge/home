import React, { FC } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";
import { Divider } from "antd";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { transClasses } from "../../utils";

interface NoteProps {}

interface FNoteProps extends NoteProps {}

const Note: FC<FNoteProps> = (props: FNoteProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);

  return (
    <div className={transClasses("note-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="PAGE_WRAPPER_MAIN">
        <div>
          <BarsOutlined /> 分组
          <AppstoreOutlined /> 图标平铺
        </div>
        <Divider />
        搜索关键字/进入分组 得到详情列表
      </main>
    </div>
  );
};

export default Note;
