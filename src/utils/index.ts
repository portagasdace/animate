// 使用简单的正则表达式判断是否为移动设备
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
export const getParams = (url: string) => {
  let urlStr = url.split('?')[1];
  let obj: any = {};
  let paramArr = urlStr.split('&');
  for (let i = 0; i < paramArr.length; i++) {
    let [key, value] = paramArr[i].split('=');
    obj[key] = value;
  }
  return obj;
}