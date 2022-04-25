import React, { FC } from "react";
import { connect, useSelector } from "react-redux";

import "./index.less";

interface ResumeProps {}
interface FResumeProps extends ResumeProps {}

const Resume: FC<FResumeProps> = (props: FResumeProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  // TODO 读取PDF
  return (
    <div className={`resume-page-wrapper ${webPattern}`}>
      <main>here is resume</main>
    </div>
  );
};

export default Resume;
