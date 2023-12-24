import { useEffect, useState } from "react"

import { getList } from "@/api/home"

import { history, Outlet } from 'umi';

import "./index.less"
import { getParams } from "@/utils";

const Mobile = () => {
  const [type, setType] = useState('')
  const [active, setActive] = useState<any>('')
  const [dataList, setDataList] = useState([])
  const [recentList, setRecentList] = useState([])
  const [hotList, setHotList] = useState([])
  const {
    location: { search }
  }: any = history;

  const getHomeList = async () => {
    try {
      let res: any = await getList()
      setDataList(res)
      setRecentList(res.slice(0, 10))
      setHotList(getHotArr(res, 10))
    } catch (error) {
      console.log(error)
    }
  }
  // 从数组中随机取出 10 个元素
  const getHotArr = (array: any, num: number) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, num);
  }

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
  useEffect(() => {
    console.log(search, '===')
    if (search !== '' && getParams(search).id) {
      history.replace(`/mobileInfo?id=${getParams(search).id}`);
    } else {
      getHomeList()
    }
  }, [])
  console.log(history.location.pathname, 'lll')
  return history.location.pathname === '/' && <div className="mobile">
    <div className="mobile-title">動漫時訊</div>
    {/* <div className={`mobile-menu ${active ? 'color' : ''}`}>
      <span onClick={() => {
        setActive(!active)
      }}>{active ? 'CLOSE' : 'MENU'}</span>
      <div className={`down-menu ${active === '' ? '' : active ? 'active' : 'up'}`}>
        <div className="down-menu-item" onClick={() => {
          setActive(!active)
          setType('最新')
        }}>最新</div>
      </div>
    </div> */}
    <div className="mobile-list">
      {
        dataList.length > 0 && dataList.map((item: any, key: number) => {
          return <div className="mobile-list-item" key={`${key}_index`}>
            <img src={nodesInfo(item.content).img || ''} alt="" />
            <div className="item-title" onClick={() => {
              // 跳转到指定路由
              history.push(`/mobileInfo/id=${item.id}`);
            }}>{item.title}</div>
            <div className="item-date">時間：{item.create_time}</div>
            <div className="item-decs">{`${nodesInfo(item.content).decs}...` || ''}</div>
            <span className="item-continue" onClick={() => {
              // 跳转到指定路由
              history.push(`/mobileInfo/id=${item.id}`);
            }}>Continue Reading</span>
          </div>
        })
      }
    </div>
    {
      dataList.length > 0 &&
      <div className="recent">
        <div className="recent-title">近期文章</div>
        <div className="recent-list">
          {
            recentList.map((item: any, key) => {
              return <div className="recent-list-item" key={`${key}_div`} onClick={
                () => {
                  // 跳转到指定路由
                  window.location.href = `/mobileInfo/${item.id}`
                }}>{item.title}</div>
            })
          }
        </div>
      </div>
    }
    {
      dataList.length > 0 &&
      <div className="hot">
        <div className="hot-title">热门榜单</div>
        <div className="hot-list">
          {
            hotList.map((item: any, key) => {
              return <div className="hot-list-item" key={`${key}_div`} onClick={
                () => {
                  // 跳转到指定路由
                  window.location.href = `/mobileInfo/${item.id}`
                }}>{item.title}</div>
            })
          }
        </div>
      </div>
    }
  </div>
}

export default Mobile