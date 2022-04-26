import react, { FC } from "react";
import "./index.less";
import { connect } from "react-redux";
import { Image } from "antd";

export interface PictureProps {
  imgSrc: string;
  imgTitle: string;
  imgDescription?: string;
  imgUUid: string;
}
interface FPictureProps extends PictureProps {}

const Picture: FC<FPictureProps> = (props: FPictureProps) => {
  const { imgSrc, imgTitle, imgDescription } = props;
  return (
    <div className={`picture-wrapper`}>
      <Image src={imgSrc} preview={{}} />
      <div className="picture-title">
        <p title={imgTitle}>{imgTitle}</p>
      </div>
    </div>
  );
};

export default Picture;
