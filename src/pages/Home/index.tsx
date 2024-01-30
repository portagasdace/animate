import { useEffect, useState } from "react";

import { history, Outlet } from 'umi';

import { getList } from "@/api/home";

import "./index.less"

import Analytics from "@/utils/firebase"

export default function HomePage() {
  const {
    analytics,
    logEvent
  } = Analytics
  const [id, setId] = useState('')
  const [recentList, setRecentList] = useState([])
  const [hotList, setHotList] = useState([])

  const navList = [
    {
      title: "最新",
      path: '/',
    },
    // {
    //   title: "海贼王"
    // }, {
    //   title: "火影"
    // }
  ]
  const getHomeList = async () => {
    try {
      let res: any = await getList()
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

  useEffect(() => {
    console.log(analytics, logEvent,"======")
    logEvent(analytics, 'home_review');
    getHomeList()

  }, [])
  return (
    <div className="main">
      <div className="head">
        <div className="head-content">
          <span onClick={() => {
            history.push('/');
          }}>動漫時訊</span>
        </div>
        <div className="head-nav">
          <div className="head-nav-content">
            {
              navList.map((item: any, index) => {
                return <div key={`${index}-div`} onClick={() => {
                  // 跳转到指定路由
                  history.push(item.path);
                }}>
                  <span>{item.title}</span>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className="content">
        <div className="article">
          <Outlet />
        </div>
        <div className="sidebar">
          <div className="sidebar-item">
            <div className="sidebar-title">近期文章</div>
            <div className="sidebar-item-list">
              {
                recentList.map((item: any, key) => {
                  return <div key={`${key}_div`} onClick={
                    () => {
                      logEvent(analytics, 'info_review',{
                        title:item.title
                      });

                      // 跳转到指定路由
                      window.location.href = `/info/${item.id}`
                    }}>{item.title}</div>
                })
              }
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">熱門文章</div>
            <div className="sidebar-item-list">
              {hotList.map((item: any, key) => {
                return <div key={`${key}_div`} onClick={
                  () => {
                    // 跳转到指定路由
                    logEvent(analytics, 'info_review',{
                      title:item.title
                    });
                    window.location.href = `/info/${item.id}`
                  }}>{item.title}</div>
              })
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
