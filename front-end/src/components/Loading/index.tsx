import { FC } from "react";
import "./index.less";

export interface LoadingProps {
  shutLoading: boolean;
}

const Loading: FC<LoadingProps> = (props: LoadingProps) => {
  const { shutLoading } = props;
  return (
    <div className={`loading-page ${shutLoading ? "shut" : null}`}>
      <div className="loading-box"></div>
      <p>没哭，就算胜利</p>
    </div>
  );
};

export default Loading;
