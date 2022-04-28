import React, { FC, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { transClasses } from "../../utils";
import { Spin, Tooltip, Input } from "antd";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined
} from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import PDF from "./work.pdf";
import { getResume } from "../../api";
import "./index.less";

interface ResumeProps {}
interface FResumeProps extends ResumeProps {}

const Resume: FC<FResumeProps> = (props: FResumeProps) => {
  const webPattern = useSelector(({ global }: any) => global.webPattern);

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [pageNumberInput, setPageNumberInput] = useState(1);
  const [pageNumberFocus, setPageNumberFocus] = useState(false);
  const [pageWidth, setPageWidth] = useState(600);
  const [fullscreen, setFullscreen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const lastPage = () => {
    if (pageNumber == 1) {
      return;
    }
    const page = pageNumber - 1;
    setPageNumber(page);
    setPageNumberInput(page);
  };

  const nextPage = () => {
    if (pageNumber == numPages) {
      return;
    }
    const page = pageNumber + 1;
    setPageNumber(page);
    setPageNumberInput(page);
  };
  const onPageNumberFocus = (e: any) => {
    setPageNumberFocus(true);
  };
  const onPageNumberBlur = (e: any) => {
    setPageNumberFocus(false);
    setPageNumberInput(pageNumber);
  };
  const onPageNumberChange = (e: any) => {
    let value = e.target.value;
    value = value <= 0 ? 1 : value;
    value = value >= numPages ? numPages : value;
    setPageNumberInput(value);
  };
  const toPage = (e: any) => {
    setPageNumber(Number(e.target.value));
  };

  const pageZoomOut = () => {
    if (pageWidth <= 600) {
      return;
    }
    const pageWidth_ = pageWidth * 0.8;
    setPageWidth(pageWidth_);
  };
  const pageZoomIn = () => {
    const pageWidth_ = pageWidth * 1.2;
    setPageWidth(pageWidth_);
  };

  const pageFullscreen = () => {
    if (fullscreen) {
      setFullscreen(false);
      setPageWidth(600);
    } else {
      setFullscreen(true);
      setPageWidth(window.screen.width - 40);
    }
  };

  return (
    <div className={transClasses("resume-page-wrapper", "PAGE_WRAPPER", webPattern)}>
      <main className="PAGE_WRAPPER_MAIN">
        <Document
          file={PDF}
          onLoadError={e => console.log(e)}
          onLoadSuccess={e => onDocumentLoadSuccess(e)}
          loading={<Spin size="large" />}>
          <Page pageNumber={pageNumber} width={pageWidth} loading={<Spin size="large" />} />
        </Document>

        <div className={"pageTool"}>
          <Tooltip title={pageNumber == 1 ? "已是第一页" : "上一页"}>
            <LeftOutlined onClick={() => lastPage()} />
          </Tooltip>
          <Input
            value={pageNumberFocus ? pageNumberInput : pageNumber}
            onFocus={e => onPageNumberFocus(e)}
            onBlur={e => onPageNumberBlur(e)}
            onChange={e => onPageNumberChange(e)}
            onPressEnter={e => toPage(e)}
            type="number"
          />{" "}
          / {numPages}
          <Tooltip title={pageNumber == numPages ? "已是最后一页" : "下一页"}>
            <RightOutlined onClick={() => nextPage()} />
          </Tooltip>
          <Tooltip title="放大">
            <ZoomInOutlined onClick={() => pageZoomIn()} />
          </Tooltip>
          <Tooltip title="缩小">
            <ZoomOutOutlined onClick={() => pageZoomOut()} />
          </Tooltip>
          {/* <Tooltip title={fullscreen ? "恢复默认" : "适合窗口"}>
              {fullscreen ? (
                <FullscreenOutlined onClick={() => pageFullscreen()} />
              ) : (
                <FullscreenExitOutlined onClick={() => pageFullscreen()} />
              )}
            </Tooltip> */}
        </div>
      </main>
    </div>
  );
};

export default Resume;
