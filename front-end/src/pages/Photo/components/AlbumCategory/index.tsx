import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import "./index.less";
import Album, { AlbumProps } from "../Album";
import { transClasses } from "../../../../utils";

export interface AblumCategoryProps {
  classifyName: string;
  classifyUUID: string;
  albumList?: AlbumProps[];
}
interface FAblumCategoryProps extends AblumCategoryProps {}

const albumsList = Array(7).fill({
  coverSrc: "https://img1.baidu.com/it/u=678988919,1064696935&fm=26&fmt=auto",
  albumDescription: "here is description",
  albumName: "第二春",
  isLock: true,
  picTotal: 99,
  fromClassifyName: "string",
  fromClassifyUUID: "string",
  albumUUID: "here is album UUID"
});

const AblumCategory: FC<FAblumCategoryProps> = (props: FAblumCategoryProps) => {
  const { classifyName, classifyUUID, albumList } = props;
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={transClasses("ablumClassify", webPattern)}>
      <h4 className="classifyName">{classifyName}</h4>
      <div className="albumList">
        {albumsList.map((album, index) => (
          <Album {...album} key={`album-item-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default AblumCategory;
