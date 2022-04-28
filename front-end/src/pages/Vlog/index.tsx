import React, { FC } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";
import { transClasses } from "../../utils";

interface VlogProps {}
interface FVlogProps extends VlogProps {}

const Vlog: FC<FVlogProps> = (props: FVlogProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={transClasses("vlog-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="PAGE_WRAPPER_MAIN"></main>
    </div>
  );
};

export default Vlog;
