import { useEffect, useState } from "react";

import { history, Helmet } from 'umi';

import { getList } from '@/api/home';
import Analytics from "@/utils/firebase"

const List = () => {
  const {
    analytics,
    logEvent
  } = Analytics
  // 在当前页面跳转之前记录滚动位置
  const [dataList, setDataList] = useState([])
  const getHomeList = async () => {
    try {
      let res: any = await getList()
      setDataList(res)
      setTimeout(() => {
        window.scrollTo({
          top: JSON.parse(sessionStorage.getItem("scrollPosition"))?.top || 0,
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
    const firstImageUrl: any = firstImage ? firstImage.getAttribute('data-src') : null;
    const firstImageSrc: any = firstImage ? firstImage.getAttribute('src') : null;

    // 选择所有需要的标签
    const paragraphs = Array.from(doc.querySelectorAll('p'));

    // 获取标签内容并截取前 30 个字符
    const getContentAndTruncate = (element: any) => {
      return element ? element.textContent.trim() : '';
    };
    const paragraphContents = paragraphs.map(getContentAndTruncate).join('').slice(0, 100);


    // 创建一个 DOM 解析器

    let imgUrl = ''

    const regex = /<img.*?src=\"(.*?)\".*?>/g; // 匹配所有 img 标签中的 src 属性值
    const srcArray = []; // 存放所有图片连接的数组

    let match;
    while ((match = regex.exec(serverHtml)) !== null) {
      srcArray.push(match[1]); // 将匹配到的图片连接放入数组中
    }
    if (srcArray.length > 1) {
      imgUrl = srcArray[1]
    } else {
      console.log(srcArray, firstImageUrl, firstImageSrc, 'firstImageSrc'); // 打印第一个 img 标签的 src 属性值
      imgUrl = srcArray.length ? srcArray[0] : firstImageUrl === '' ? firstImageSrc : firstImageUrl

    }
    return {
      img: imgUrl,
      decs: paragraphContents
    } as any
  }
  return <div className="article-list">
    <Helmet>
      <title>《動漫時訊》</title>
      <meta
        name="description"
        content="《動漫時訊》是一個專註於提供最新、最熱動漫資訊的平臺。"
      />
      <meta
        name="keywords"
        content="動漫資訊, 最新動漫, 動漫更新, 動漫劇情, 海賊王, 鎮魂街, 葬送的芙莉蓮, 不死不幸"
      />
      <meta property="og:title" content="動漫時訊" />
      <meta
        property="og:description"
        content="《動漫時訊》是一個專註於提供最新、最熱動漫資訊的平臺。"
      />
      <meta property="og:image" content="https://anime.weilaiyw.com" />
    </Helmet>
    {
      dataList.map((item: any, key: any) => {
        return <div className="list-item" key={`${key}_index`}>
          <img src={nodesInfo(item.content).img || ''} alt="" />
          <div className="item-title" onClick={() => {
            // 跳转到指定路由
            sessionStorage.setItem('scrollPosition', JSON.stringify({ top: window.scrollY }));
            logEvent(analytics, 'info_review', {
              title: item.title
            });
            history.push(`/info/${item.id}`, { operation: 'someOperation' });
          }}>{item.title}</div>
          <div className="item-date">時間：{item.create_time}</div>
          <div className="item-decs">{`${nodesInfo(item.content).decs}...` || ''}</div>
          <span className="item-continue" onClick={() => {
            // 跳转到指定路由
            sessionStorage.setItem('scrollPosition', JSON.stringify({ top: window.scrollY }));
            logEvent(analytics, 'info_review', {
              title: item.title
            });
            history.push(`/info/${item.id}`);
          }}>Continue Reading</span>
        </div>
      })
    }
  </div>
}

export default List