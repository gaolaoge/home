import React, { FC } from "react";
import { connect } from "react-redux";
import "./index.less";
import { WebPatternProps } from "../../../../store/state/global";
import Album, { AlbumProps } from "../Album";

export interface AblumCategoryProps {
  classifyName: string;
  classifyUUID: string;
  albumList?: AlbumProps[];
}
interface FAblumCategoryProps extends AblumCategoryProps, WebPatternProps {}

const albumsList = [
  {
    coverSrc: "https://img1.baidu.com/it/u=678988919,1064696935&fm=26&fmt=auto",
    albumDescription: "here is description",
    albumName: "第二春",
    isLock: true,
    picTotal: 99,
    fromClassifyName: "string",
    fromClassifyUUID: "string",
    albumUUID: "here is album UUID",
  },
];

const AblumCategory: FC<FAblumCategoryProps> = (props: FAblumCategoryProps) => {
  const { classifyName, classifyUUID, albumList } = props;
  const { webPattern } = props;
  return (
    <div className={`ablumClassify ${webPattern}`}>
      <h4 className="classifyName">{classifyName}</h4>
      <div className="albumList">
        {albumsList.map((album, index) => (
          <Album {...album} key={`album-item-${index}`} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});
export default connect(mapStateToProps)(AblumCategory);
