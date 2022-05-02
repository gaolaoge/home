import { useEffect, useState } from "react";

// 根据时间戳得到日期
export function getDateString(timestamp: string | number) {
  if (!timestamp) return;
  const date = new Date(Number(timestamp));
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const year = date.getFullYear();
  return `${month} ${day},${year}`;
}

// 时间戳转时间文本
export function getTimeString(timestamp: string | number) {
  if (!timestamp) return;
  const date = new Date(Number(timestamp));
  let Y = date.getFullYear() + "-";
  let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  let D = date.getDate() > 9 ? date.getDate() + " " : "0" + date.getDate();
  let h = date.getHours() > 9 ? date.getHours() + ":" : "0" + date.getHours() + ":";
  let m = date.getMinutes() > 9 ? date.getMinutes() + ":" : "0" + date.getMinutes() + ":";
  let s = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  return Y + M + D + h + m + s;
}

// 生成class
export function transClasses(...args: any[]) {
  if (args.length === 0) return undefined;
  return args.join(" ");
}

/**
 * 对视窗的监听会导致引用得组件因此频繁更新视图，
 * 建议对使用的组件做更新优化
 */
// 监听窗口高度变化
export function currentInnerHeight() {
  const val = document.documentElement.clientHeight;
  const hook = useState(val);
  const resizeUpdate = (e: any) => {
    let h = e.target?.innerHeight;
    hook[1](h);
  };
  window.addEventListener("resize", resizeUpdate);
  useEffect(() => {
    return window.removeEventListener("resize", resizeUpdate);
  }, []);
  return hook;
}

// 监听窗口宽度变化
export function currentInnerWidth() {
  const val = document.documentElement.clientWidth;
  const hook = useState(val);
  const resizeUpdate = (e: any) => {
    let h = e.target?.innerWidth;
    hook[1](h);
  };
  window.addEventListener("resize", resizeUpdate);
  useEffect(() => {
    return window.removeEventListener("resize", resizeUpdate);
  }, []);
  return hook;
}
