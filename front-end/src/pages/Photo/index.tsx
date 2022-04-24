import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import "./index.less";
import AblumCategory, { AblumCategoryProps } from "./components/AlbumCategory";
import Album, { AlbumProps } from "./components/Album";

interface PhotoPageProps {}
interface FPhotoPageProps extends PhotoPageProps {}

const AblumClassifyList = [
  {
    classifyName: "string2",
    classifyUUID: "string"
  },
  {
    classifyName: "string",
    classifyUUID: "string"
  }
];

const PhotoPage: FC<FPhotoPageProps> = (props: FPhotoPageProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  return (
    <div className={`photo-page-wrapper ${webPattern}`}>
      <main>
        {AblumClassifyList.map((props, index) => (
          <AblumCategory {...props} key={`AblumCategory-item-${index}`} />
        ))}
      </main>
    </div>
  );
};

export default PhotoPage;
