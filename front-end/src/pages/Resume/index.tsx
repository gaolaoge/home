import React, { FC } from "react";
import { connect } from "react-redux";

import "./index.less";
import { WebPatternProps } from "../../store/state/global";

interface ResumeProps {}
interface FResumeProps extends ResumeProps, WebPatternProps {}

const Resume: FC<FResumeProps> = (props: FResumeProps) => {
  const { webPattern } = props;
  // TODO 读取PDF
  return (
    <div className={`resume-page-wrapper ${webPattern}`}>
      <main>here is resume</main>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});

export default connect(mapStateToProps)(Resume);
