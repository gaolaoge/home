import "./index.less";

interface GTagProps {
  type: string;
}

function G_Tag(props: GTagProps) {
  const { type } = props;
  let text;
  let icon;
  if (type === "top") {
    icon = <i className={"iconfont icon-ding-mianxing"} />;
    text = "置顶";
  }
  if (type === "life") text = "生活";
  if (type === "note") text = "笔记";
  if (type === "trip") text = "旅途";
  if (type === "log") text = "日志";

  return (
    <div className={`tag ${type}`}>
      {icon}
      {text}
    </div>
  );
}

export default G_Tag;
