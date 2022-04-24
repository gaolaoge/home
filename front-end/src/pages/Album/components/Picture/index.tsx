import react, { FC } from "react";
import "./index.less";
import { connect } from "react-redux";
import { Image } from "antd";
import { WebPatternProps } from "../../../../store/state/global";

export interface PictureProps {
  imgSrc: string;
  imgTitle: string;
  imgDescription?: string;
  imgUUid: string;
}
interface FPictureProps extends PictureProps, WebPatternProps {}

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

const mapStateToProps = (state: any) => ({
  webPattern: state.webPattern,
});
export default connect(mapStateToProps)(Picture);
