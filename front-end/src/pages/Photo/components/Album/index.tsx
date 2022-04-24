import React, { FC } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./index.less";
import { WebPatternProps } from "../../../../store/state/global";

export interface AlbumProps {
  coverSrc: string;
  albumDescription?: string;
  albumName: string;
  isLock?: boolean;
  picTotal: number;
  fromClassifyName: string;
  fromClassifyUUID: string;
  albumUUID: string;
}
interface FAlbumProps extends AlbumProps, WebPatternProps {}

const Album: FC<FAlbumProps> = (props: FAlbumProps) => {
  const {
    coverSrc,
    albumDescription = "",
    albumName,
    isLock = true,
    picTotal,
    albumUUID,
  } = props;
  const { webPattern } = props;
  const navigate = useNavigate();
  const handleClick: () => void = () => {
    navigate(`/album/${albumName}`, { replace: false, state: { albumUUID } });
  };
  return (
    <div
      className={`Album-wrapper ${webPattern}`}
      onClick={() => handleClick()}
    >
      <div className="cover" style={{ backgroundImage: `url(${coverSrc})` }} />
      <div className="albumInfo">
        <span className="albumName">{albumName}</span>
        {isLock && <i className={`iconfont icon-suoding`} />}
        {!isLock && <i className={`iconfont icon-jiesuo`} />}
        <span className="total">{picTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});
export default connect(mapStateToProps)(Album);
