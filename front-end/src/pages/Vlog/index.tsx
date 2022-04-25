import React, { FC } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";

interface VlogProps {}
interface FVlogProps extends VlogProps {}

const Vlog: FC<FVlogProps> = (props: FVlogProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={`vlog-page-wrapper ${webPattern}`}>
      <main></main>
    </div>
  );
};

export default Vlog;
