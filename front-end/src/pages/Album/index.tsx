import react, { FC } from "react";
import { Empty, Space, PageHeader, Descriptions, Avatar, AvatarProps, Button, Tabs, Statistic, Pagination } from "antd";
import "./index.less";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Picture, { PictureProps } from "./components/Picture";

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
  total: 99,
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
  const webPattern = useSelector((state: any) => state.webPattern);
  const { albumUUID } = state;
  const avatarProps: AvatarProps = {
    src: AlbumInfo.coverSrc,
    shape: "square",
    size: 40
  };
  const pageHeaderProps = {
    avatar: avatarProps,
    subTitle: AlbumInfo.albumDescription,
    title: AlbumInfo.albumTitle,
    onBack: () => window.history.back(),
    extra: [
      <Button key="3">复制链接</Button>,
      <Button key="2">生成分享图</Button>,
      <Button key="1">生成分享二维码</Button>
    ],
    footer: (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1" />
        <TabPane tab="Rule" key="2" />
      </Tabs>
    )
  };
  const paginationProps = {
    total: AlbumInfo.total,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: any) => `共 ${total} 张图片`
  };
  return (
    <div className="album-page-wrapper">
      <main>
        <PageHeader {...pageHeaderProps}>
          <div style={{ display: "flex" }}>
            <Descriptions size="small" column={2}>
              <Item label="创建人">{AlbumInfo.created}</Item>
              <Item label="所属分类">{AlbumInfo.theCategory}</Item>
              <Item label="创建时间">{AlbumInfo.creationTime}</Item>
              <Item label="最近修改时间">{AlbumInfo.effectiveTime}</Item>
              <Item label="关键字">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Item>
            </Descriptions>
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
          </div>
        </PageHeader>
        <div className={`album-list-body ${pictureList.length && "empty"}`}>
          {pictureList.length && (
            <Space wrap>
              {pictureList.map((props, index) => (
                <Picture {...props} key={`picture-item-${index}`} />
              ))}
            </Space>
          )}
          {!pictureList.length && <Empty />}
        </div>
        <Pagination {...paginationProps} className={"pagination"} />
      </main>
    </div>
  );
};

export default Album;
