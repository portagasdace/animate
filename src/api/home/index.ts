import request from '../index';

const baseUrl = 'https://anime.weilaiyw.com'
/**
 * @description 列表
 * @param 请求参数类型
 */
export const getList = () => {
  return request(
    `${baseUrl}/cartoon/list`,
    {
      method: 'get',
    }
  );
};