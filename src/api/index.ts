import axios from 'axios';

function dealResponse(response: any, showFailToast: boolean) {
  return new Promise((resolve) => {
    if (response.code === 4) {
      showFailToast && console.log(`${response.errors}`, 3);
    }
    resolve(response);
  });
}

async function request(url: any, options: any, showFailToast = true) {
  const defaultOptions = {
    credentials: 'include',
    method: 'GET',
    mode: 'cors'
  };
  const mergeOptions = {
    ...defaultOptions,
    ...options
  };

  mergeOptions.headers = {
    accept: 'application/json',
    'content-type': 'application/json; charset=utf-8',
    ...mergeOptions.headers
  };

  // 一、获取到返回体
  let response = null;
  try {
    response = await axios(url, mergeOptions);
  } catch (error) {
    return Promise.reject(new Error('系统异常，请稍候重试'));
  }

  // 三、返回 JSON 数据
  const requestJson = response.data;

  // 四、处理返回数据
  let responseData;
  // eslint-disable-next-line prefer-const
  responseData = await dealResponse(requestJson, showFailToast);
  return responseData;
}

export default request;
