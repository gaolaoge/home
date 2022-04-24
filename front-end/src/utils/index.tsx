// 根据时间戳得到日期
export function getDateString(timestamp: string | number) {
  if (!timestamp) return false;
  const date = new Date(Number(timestamp));
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month} ${day},${year}`;
}
