import "./index.less"
import { history, Outlet } from 'umi';


export default function HomePage(props: any) {
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
  const recentList = [
    {
      path: '/article13',
      title: '萌系（×吸血鬼）動漫表情包補給站第五十一期——《家裡蹲吸血姬的鬱悶》new更新至第六集',
    },
    {
      path: '/article12',
      title: '萌系（×藥師）動漫表情包補給站第五十四期——《藥屋少女的呢喃》new更新至第六集',
    },
    {
      path: '/article11',
      title: '堤亞穆帝國物語~從斷頭台開始，公主重生后的逆轉人生~ 第四集 夏薇舞？ 預告',
    },
    {
      path: '/article10',
      title: 'TV動畫《物理魔法使馬修 第二季》公開主視覺圖，2024 年 1 月開播！',
    },
    {
      path: '/article9',
      title: '狩龍人拉格納 第八集 痛擊 預告',
    },
    {
      path: '/article8',
      title: '偶像大師 百萬現場 第七集 撲通！ 盛夏大海的初次亮相！ 預告',
    },
    {
      path: '/article7',
      title: '超超超超超喜歡你的100個女朋友 第七集 初次見面的藥少女 預告',
    },
    {
      path: '/article6',
      title: '家裡蹲吸血姬的鬱悶 第七集 斯嘉麗舞台',
    },
    {
      path: '/article5',
      title: '亡骸遊戲(第2季度) 第十九集 The Friends-好朋友- 預告',

    },


  ]
  const hotList = [
    {
      title: "《葬送的芙莉蓮》：冒險結束後，回溯無法重來的旅程",
      path: '/article1',
    },
    {
      title: "鎮魂街：貂靈蕓與皇甫龍鬥激戰 群英殿兩代最強者的終極對決",
      path: '/article3',
    },
    {
      title: "海賊王1098話情報：金妮被迫嫁給天龍人",
      path: '/article4',
    },
    {
      title: "熱血拋灑下的暖心純愛，十月最強開局動畫《不死不幸》簡評",
      path: '/article2',
    },
  ]
  const htmlCode = "<div class='t5c'><div class='t5c_l'><div class='n_show box-shadow' id='Content'><p>《咒术回战》240话图透公开，本话接着延续上一集的搞笑风格，不过羂索在和高羽对话的过程中发现了高羽的弱点，估计这个奇袭也悬了。</p><p>场景回到新宿决战前，天使提议乙骨们奇袭羂索，众人意见不同。天使向众人推荐高羽史彦去对付羂索。</p><p>天使：我现在说的话不要泄露出去、对高羽自己也是、他的术式是...</p><p style='text-align: center;'><span style='cursor:pointer;'><img alt'游侠网' id='img0_' onclick='showbigpic(this,'https://img2.ali213.net/picfile/News/2023/10/25/6fb78316707727c5f97c512530a11d68.jpg')' onmouseover='showMenu({'ctrlid':this.id,'pos':'12'})' src='https://img2.ali213.net/picfile/News/2023/10/25/584_6fb78316707727c5f97c512530a11d68.jpg'/></span></p>"
  const htmlString = `'${htmlCode}'`;
  const pathname = history.location.pathname
  return (
    <div className="main">
      <div className="head">
        <div className="head-content">
          <span>动漫时讯</span>
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
                recentList.map((item, key) => {
                  return <div key={`${key}_div`} onClick={
                    () => {
                      // 跳转到指定路由
                      history.push(item.path);
                    }}>{item.title}</div>
                })
              }
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-title">热门文章</div>
            <div className="sidebar-item-list">
              {hotList.map((item, key) => {
                return <div key={`${key}_div`} onClick={
                  () => {
                    // 跳转到指定路由
                    history.push(item.path);
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
