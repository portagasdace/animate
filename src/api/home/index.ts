import request from '../index';

const baseUrl = 'http://43.133.8.208:8000'
/**
 * @description 列表
 * @param 请求参数类型
 */
export const getList = () => {
  return request(
    `${baseUrl}/list_ct`,
    {
      method: 'get',
    }
  );
};