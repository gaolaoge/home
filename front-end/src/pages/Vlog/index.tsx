import React, { FC } from "react";
import "./index.less";
import { connect } from "react-redux";
import { WebPatternProps } from "../../store/state/global";

interface VlogProps {}
interface FVlogProps extends VlogProps, WebPatternProps {}

const Vlog: FC<FVlogProps> = (props: FVlogProps) => {
  const { webPattern } = props;
  return (
    <div className={`vlog-page-wrapper ${webPattern}`}>
      <main></main>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});

export default connect(mapStateToProps)(Vlog);
