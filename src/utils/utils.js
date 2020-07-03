
/**
 * 返回所需要的日期时间样式
 * @param timestamp 时间戳，单位秒
 * @param type 返回的类型
 * @param needTime
 */
export const formatDiffDate = (timestamp, type = '.', needTime) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  let result = `${year}${type}${month}${type}${day}`;
  if (needTime) {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h < 10) {
      h = `0${h}`;
    }
    if (m < 10) {
      m = `0${m}`;
    }
    if (s < 10) {
      s = `0${s}`;
    }
    result += ` ${h}:${m}:${s}`;
  }
  return result;
};

export const noopReturnArray = () => ([]);
export const noopReturnObject = () => ([]);