import react, { FC } from "react";
import {
  Row,
  Col,
  Empty,
  Space,
  PageHeader,
  Descriptions,
  Avatar,
  AvatarProps,
  Button,
  Tabs,
  Statistic,
  Pagination,
  PaginationProps
} from "antd";
import "./index.less";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Picture, { PictureProps } from "./components/Picture";
import { getDateText, transClasses, currentInnerWidth } from "../../utils";

const { Item } = Descriptions;
const { TabPane } = Tabs;

const pictureList: PictureProps[] = [
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2568893028,2417732315&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2568893028,2417732315&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2568893028,2417732315&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2568893028,2417732315&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2285567582,1185119578&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img1.baidu.com/it/u=4095057498,403099720&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=2394303781,1797253216&fm=26&fmt=auto",
    imgTitle: "2021年最新微信女生头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img0.baidu.com/it/u=3685606617,2489289181&fm=26&fmt=auto",
    imgTitle: "2021迪士尼简约可爱头像",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  },
  {
    imgSrc: "https://img2.baidu.com/it/u=2568893028,2417732315&fm=26&fmt=auto",
    imgTitle: "有哪些适合女生的微信头像?",
    imgDescription: "string",
    imgUUid: "asdasdwkjcefkh2q3q"
  }
];
const AlbumInfo = {
  albumUUID: "",
  coverSrc: "https://img1.baidu.com/it/u=1267606119,3082182009&fm=26&fmt=auto",
  albumTitle: "here is title2",
  created: "gaoge",
  creationTime: Date.now(),
  effectiveTime: Date.now(),
  albumDescription: "here is description",
  theCategory: "某一个",
  total: 999,
  pageSize: 21,
  current: 1,
  caller: 125,
  comment: 12,
  praise: 9
};

export interface AlbumProps {}
interface FAlbumProps extends AlbumProps {}

const Album: FC<FAlbumProps> = (props: FAlbumProps) => {
  const { hash, search, state } = useLocation();
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  // const { albumUUID } = state;
  const [windowInnerWidth] = currentInnerWidth();

  // 页脚是否为简单模式
  const SimplePagination = windowInnerWidth > 440 ? false : true;
  // 按钮是否为mini模式
  const ButtonSize = windowInnerWidth > 440 ? "middle" : "small";
  // 按钮fontSize
  const ButtonFontSize = windowInnerWidth > 440 ? "14px" : "12px";

  const avatarProps: AvatarProps = {
    src: AlbumInfo.coverSrc,
    shape: "square",
    size: 40
  };
  const paginationProps: PaginationProps = {
    simple: SimplePagination,
    size: "small",
    total: AlbumInfo.total,
    showTotal: (total: any) => `共 ${total} 张图片`
  };
  const getAlburNode = () => {
    const havePic = pictureList.length > 0;
    if (havePic) {
      return (
        <Space wrap>
          {pictureList.map((props, index) => (
            <Picture {...props} key={`picture-item-${index}`} />
          ))}
        </Space>
      );
    } else {
      return (
        <div className="emptyAlburWrapper">
          <Empty />
        </div>
      );
    }
  };
  const pageHeaderProps = {
    avatar: avatarProps,
    subTitle: AlbumInfo.albumDescription,
    title: AlbumInfo.albumTitle,
    onBack: () => window.history.back(),
    extra: [
      <Button size={ButtonSize} style={{ fontSize: ButtonFontSize }} key="3">
        复制链接
      </Button>,
      <Button size={ButtonSize} style={{ fontSize: ButtonFontSize }} key="2">
        生成分享图
      </Button>,
      <Button size={ButtonSize} style={{ fontSize: ButtonFontSize }} key="1">
        生成分享二维码
      </Button>
    ],
    footer: (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1">
          <div className={`album-list-body`}>{getAlburNode()}</div>
          <Space>
            <Pagination {...paginationProps} className={"pagination"} />
          </Space>
        </TabPane>
        <TabPane tab="Rule" key="2">
          here is rule
        </TabPane>
      </Tabs>
    )
  };

  const siteMode = webPattern === "Dark" ? "dark" : "light";
  return (
    <div className={transClasses("album-page-wrapper", "PAGE_WRAPPER", siteMode)}>
      <main className="PAGE_WRAPPER_MAIN">
        <PageHeader {...pageHeaderProps} ghost={false}>
          <Row justify="space-between">
            <Col md={24} lg={22}>
              {/* 相册信息 */}
              <Descriptions size="small" column={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
                <Item label="创建人">{AlbumInfo.created}</Item>
                <Item label="所属分类">{AlbumInfo.theCategory}</Item>
                <Item label="创建时间">{getDateText(AlbumInfo.creationTime)}</Item>
                <Item label="最近修改时间">{getDateText(AlbumInfo.effectiveTime)}</Item>
                <Item label="关键字">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Item>
              </Descriptions>
            </Col>
            <Col lg={2}>
              {/* 相册互动记录 */}
              <div
                style={{
                  display: "flex",
                  width: "max-content",
                  justifyContent: "flex-end"
                }}>
                <Statistic
                  title="访客"
                  value={27}
                  style={{
                    marginRight: 32
                  }}
                />
                <Statistic title="点赞" value={16} />
              </div>
            </Col>
          </Row>
        </PageHeader>
      </main>
    </div>
  );
};

export default Album;
