import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import { transClasses } from "../../utils";

import "./index.less";

interface ResumeProps {}
interface FResumeProps extends ResumeProps {}

const Resume: FC<FResumeProps> = (props: FResumeProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  // TODO 读取PDF
  return (
    <div className={transClasses("resume-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="PAGE_WRAPPER_MAIN">here is resume</main>
    </div>
  );
};

export default Resume;
