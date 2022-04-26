// 根据时间戳得到日期
export function getDateString(timestamp: string | number) {
  if (!timestamp) return false;
  const date = new Date(Number(timestamp));
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month} ${day},${year}`;
}

// 生成class
export function transClasses(...args: any[]) {
  if (args.length === 0) return undefined;
  return args.join(" ");
}

// 时间戳转时间文本
export function getDateText(timestamp: number) {
  let date = new Date(timestamp);
  let Y = date.getFullYear() + "-";
  let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  let D = date.getDate() > 9 ? date.getDate() + " " : "0" + date.getDate();
  let h = date.getHours() > 9 ? date.getHours() + ":" : "0" + date.getHours() + ":";
  let m = date.getMinutes() > 9 ? date.getMinutes() + ":" : "0" + date.getMinutes() + ":";
  let s = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  return Y + M + D + h + m + s;
}
