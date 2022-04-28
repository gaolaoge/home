import React, { FC, useState, useEffect } from "react";
import "./index.less";
import { connect, useSelector } from "react-redux";
import { Input, Button, DatePicker, Select, Space, Timeline, Divider, Spin, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import LoglistItem, { LoglistItemProps } from "../../components/LoglistItem";
import { transClasses, currentInnerWidth } from "../../utils";

import { getLogList } from "../../api";

const { Item } = Timeline;
const { Option } = Select;
const { RangePicker } = DatePicker;

const timelineList = ["2015-09-01", "2015-09-01", "2015-09-01", "2015-09-01"];

interface LogProps {}
interface FLogProps extends LogProps {}

const TagList = ["默认", "旅行", "笔记"];

const Log: FC<FLogProps> = (props: FLogProps) => {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState<LoglistItemProps[]>([]);
  const webPattern = useSelector(({ global }: any) => global.webPattern);

  const [windowInnerWidth] = currentInnerWidth();
  // 筛选组件size
  const FormItemSize = windowInnerWidth > 440 ? "middle" : "small";
  const SpaceSize = windowInnerWidth > 440 ? 16 : 10;

  useEffect(() => {
    // 日志列表滚动追加
    return;
    let lock = true;
    document.addEventListener("scroll", e => {
      if (!lock) return;
      lock = false;
      setTimeout(() => (lock = true), 400);
    });
  }, []);

  useEffect(() => {
    // 获取日志列表
    getLogList({}).then((data: LoglistItemProps[]) => setNewsList(data));
  }, []);

  return (
    <div className={transClasses("log-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main>
        <Row gutter={{ lg: 0 }} justify={"space-between"} style={{ width: " 100%", margin: "0px" }}>
          <Col md={24} lg={19}>
            {/* 视窗 */}
            <div className="list-wrapper PAGE_WRAPPER_MAIN">
              <div className="log-select-row">
                <Space size={SpaceSize} wrap>
                  <div>
                    <label className="item-label" htmlFor="input-logList">
                      关键字：
                    </label>
                    <Input size={FormItemSize} id={"input-logList"} placeholder={"检索关键字"} style={{ width: 120 }} />
                  </div>
                  <div>
                    <label className="item-label" htmlFor="date-logList">
                      日期区间：
                    </label>
                    <RangePicker size={FormItemSize} id={"date-logList"} />
                  </div>
                  <div>
                    <label className="item-label" htmlFor="tag-logList">
                      标签：
                    </label>
                    <Select
                      size={FormItemSize}
                      mode={"multiple"}
                      style={{ width: 134 }}
                      maxTagCount={1}
                      defaultValue={"默认"}
                      id={"tag-logList"}>
                      {TagList.map((tag, index) => (
                        <Option key={`tag-select-key=${index}`} value={tag}>
                          {tag}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Button size={FormItemSize} children={"复位"} type={"primary"} />
                  </div>
                </Space>
              </div>
              <Divider />
              <section>
                {newsList &&
                  newsList.map((props, index) => <LoglistItem line {...props} key={`logList-item-key=${index}`} />)}
              </section>
              {loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={5}>
            {/* 时间轴 */}
            <div className="timeline-wrapper PAGE_WRAPPER_MAIN">
              <Timeline>
                {timelineList.map((item, index) => (
                  <Item key={`timeline-item-key=${index}`}>{item}</Item>
                ))}
              </Timeline>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Log;
