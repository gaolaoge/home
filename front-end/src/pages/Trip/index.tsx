import React, { FC, useState } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";
import { Modal, Drawer, Tree, Input } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Map, Markers } from "react-amap";
import { transClasses } from "../../utils";

const { Search } = Input;

interface TripProps {}
interface FTripProps extends TripProps {}

interface TripedCityesListProps {
  openModal?: () => void;
}
interface FTripedCityesListProps extends TripedCityesListProps {}

interface TravelNotesProps {}
interface FTravelNotesProps extends TravelNotesProps {}

const center = { longitude: 125, latitude: 30 };
const markers = [
  { position: { longitude: 121, latitude: 34 } },
  { position: { longitude: 130, latitude: 44 } },
  { position: { longitude: 111, latitude: 21 } }
];
const treeData = [
  {
    title: <span>here is title1</span>,
    key: 1,
    children: [
      {
        title: <span>here is title4</span>,
        key: 4
      },
      {
        title: <span>here is title5</span>,
        key: 5
      }
    ]
  },
  {
    title: <span>here is title2</span>,
    key: 2
  },
  {
    title: <span>here is title3</span>,
    key: 3
  }
];

const TripedCityesList: FC<FTripedCityesListProps> = (props: FTripedCityesListProps) => {
  const { openModal } = props;
  const handleInputChange = () => {};
  return (
    <div className="tripedCityesList">
      <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={() => handleInputChange()} />
      <Tree treeData={treeData} onSelect={() => openModal && openModal()} />
    </div>
  );
};

const TravelNotes: FC<FTravelNotesProps> = (props: FTravelNotesProps) => {
  return <div>TravelNotes</div>;
};

const Trip = (props: FTripProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);
  const [listVisible, setListVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={transClasses("trip-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="PAGE_WRAPPER_MAIN">
        {!listVisible && (
          <UnorderedListOutlined className={"showListBTN PAGE_WRAPPER_MAIN"} onClick={() => setListVisible(true)} />
        )}
        <Drawer
          title="足迹列表"
          placement="right"
          closable={false}
          onClose={() => setListVisible(false)}
          visible={listVisible}
          getContainer={false}
          className={"drawer"}>
          <TripedCityesList openModal={() => setModalVisible(true)} />
        </Drawer>
        <Modal title="游记" centered visible={modalVisible} onCancel={() => setModalVisible(false)} width={1000}>
          <TravelNotes />
        </Modal>
        <Map center={center} zoom={5} mapStyle={webPattern === "Light" ? "fresh" : "dark"}>
          <Markers markers={markers} />
        </Map>
      </main>
    </div>
  );
};

export default Trip;
