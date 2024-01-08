import { getList } from '@/api/home';

import { getParams } from '@/utils';

import { useEffect, useState } from 'react';

import { history } from 'umi';

import "./info.less"
const Info = () => {

  const {
    location: { pathname }
  }: any = history;
  const parts = pathname.split('/');

  // 获取第二个 '/' 后面的值
  const id = parts[2];


  const [dataList, setDataList] = useState<any>([])
  const getHomeList = async () => {
    try {
      let res: any = await getList()
      const source: any = res.filter((item: any) => item.id == id)
      console.log(source, '=====')
      setDataList(source)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHomeList()
  }, [])

  useEffect(() => {
    if (dataList.length > 0) {
      setTimeout(() => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const elementsToRemove = document.querySelectorAll('.n-img-mask');

        // 遍历删除每个匹配的元素
        elementsToRemove.forEach((element) => {
          element.remove();
        });
        lazyImages.forEach(function (img: any) {
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
        });
      }, 0)
    }
  }, [dataList])

  return dataList.length > 0 &&
    <div>
      <div className="info-title">{dataList[0].title}</div>
      <div className="info-time">{dataList[0].create_time}</div>
      <div className='main' dangerouslySetInnerHTML={{ __html: dataList[0].content }}>
      </div>
    </div>

}

export default Info