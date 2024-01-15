import { useEffect, useState } from "react";

import { history } from 'umi';

import { getList } from '@/api/home';

const List = () => {
  // 在当前页面跳转之前记录滚动位置
  const [dataList, setDataList] = useState([])
  const getHomeList = async () => {
    try {
      let res: any = await getList()
      setDataList(res)
      setTimeout(() => {
        window.scrollTo({
          top: JSON.parse(sessionStorage.getItem("scrollPosition")).top,
          behavior: 'smooth',
        });
      }, 500)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // 在另一个组件中获取记录的操作信息
    getHomeList()
  }, [])

  const nodesInfo = (serverHtml: string) => {
    // 使用 DOMParser 解析 HTML 字符串
    const parser = new DOMParser();
    const doc = parser.parseFromString(serverHtml, 'text/html');

    // 获取第一张图片的链接
    const firstImage = doc.querySelector('img');
    const firstImageUrl = firstImage ? firstImage.getAttribute('data-src') : null;

    // 选择所有需要的标签
    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const paragraphs = Array.from(doc.querySelectorAll('p'));
    const spans = Array.from(doc.querySelectorAll('span'));

    // 获取标签内容并截取前 30 个字符
    const getContentAndTruncate = (element: any) => {
      return element ? element.textContent.trim() : '';
    };
    const paragraphContents = paragraphs.map(getContentAndTruncate).join('').slice(0, 100);
    // 截取前 30 个字符
    return {
      img: firstImageUrl,
      decs: paragraphContents
    } as any
  }
  return <div className="article-list">
    {
      dataList.map((item: any, key: any) => {
        return <div className="list-item" key={`${key}_index`}>
          <img src={nodesInfo(item.content).img || ''} alt="" />
          <div className="item-title" onClick={() => {
            // 跳转到指定路由
            sessionStorage.setItem('scrollPosition', JSON.stringify({ top: window.scrollY }));
            history.push(`/info/${item.id}`, { operation: 'someOperation' });
          }}>{item.title}</div>
          <div className="item-date">時間：{item.create_time}</div>
          <div className="item-decs">{`${nodesInfo(item.content).decs}...` || ''}</div>
          <span className="item-continue" onClick={() => {
            // 跳转到指定路由
            sessionStorage.setItem('scrollPosition', JSON.stringify({ top: window.scrollY }));
            history.push(`/info/${item.id}`);
          }}>Continue Reading</span>
        </div>
      })
    }
  </div>
}

export default List