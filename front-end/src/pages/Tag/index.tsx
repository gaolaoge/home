import react, { FC } from "react";
import "./index.less";
import { Tag, Space } from "antd";
import { connect, useSelector } from "react-redux";
import { transClasses } from "../../utils";

interface TagProps {}
interface FTagProps extends TagProps {}

const Tags: FC<FTagProps> = (props: FTagProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={transClasses("tag-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="">
        <div className="allTags PAGE_WRAPPER_MAIN">
          <Space wrap={true}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>
        </div>
        <div className="content PAGE_WRAPPER_MAIN"></div>
      </main>
    </div>
  );
};

export default Tags;
