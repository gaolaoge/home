import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { transClasses } from "../../../../utils";
import "./index.less";

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
interface FAlbumProps extends AlbumProps {}

const Album: FC<FAlbumProps> = (props: FAlbumProps) => {
  const { coverSrc, albumDescription = "", albumName, isLock = true, picTotal, albumUUID } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/album/${albumName}`, { replace: false, state: { albumUUID } });
  };
  return (
    <div className={transClasses("Album-wrapper", webPattern)} onClick={() => handleClick()}>
      <div className="cover" style={{ backgroundImage: `url(${coverSrc})` }} />
      <div className="albumInfo">
        <span className="albumName">{albumName}</span>
        {isLock && <i className={transClasses("iconfont", "icon-suoding")} />}
        {!isLock && <i className={transClasses("iconfont", "icon-jiesuo")} />}
        <span className="total">{picTotal}</span>
      </div>
    </div>
  );
};

export default Album;
