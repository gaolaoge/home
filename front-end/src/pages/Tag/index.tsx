import react, { FC } from "react";
import "./index.less";
import { Tag, Divider } from "antd";
import { connect, useSelector } from "react-redux";

interface TagProps {}
interface FTagProps extends TagProps {}

const Tags: FC<FTagProps> = (props: FTagProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={`tag-page-wrapper ${webPattern}`}>
      <main>
        <div className="allTags">
          <div>
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
          </div>
        </div>
        <div className="content"></div>
      </main>
    </div>
  );
};

export default Tags;
