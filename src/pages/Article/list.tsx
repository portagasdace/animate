import { history } from 'umi';
import img1 from "./1/09d92e8a-edc6-49cc-8fb4-ce4c2822e1a7.001.jpeg"
import img2 from "./2/24f02da1-a1be-4f3e-a267-a8e7a2d96736.001.png"
import img3 from "./3/b440d38e-d8d5-4d82-9906-2828cc154171.001.png"
import img4 from "./4/e628ac39-39dd-4e90-81a1-ddddecfb34bf.001.png"
import img5 from "./5/191.files/19139.png"
import img6 from "./6/192.files/19226.png"
import img7 from "./7/193.files/19336.png"
import img8 from "./8/194.files/19437.png"
import img9 from "./9/195.files/19521.png"
import img10 from "./10/196.files/19639.png"
import img11 from "./11/197.files/19743.png"
import img12 from "../../../public/198.files/198460.png"
import img13 from "../../../public/199.files/199609.png"

const List = () => {
  const data = [
    {
      path: '/article13',
      img: img13,
      title: '萌系（×吸血鬼）動漫表情包補給站第五十一期——《家裡蹲吸血姬的鬱悶》new更新至第六集',
      decs: '本番講述了穆露奈依特帝國的名門貴族加德斯布拉德家族的千金緹拉鞠·加德斯布拉德。 明明是吸血鬼卻因為“不能喝血”而無法成長飽受不能使用魔法、不能運動、不能長高的三重痛苦，備受煩惱，因此過了三年閉門不出的家裡蹲生活。一開始覺得這個番又是打打殺殺的異世界戰鬥番，沒想到女主“戰五渣”的設定加上可愛外表，還有逆天百合女僕，給這部番增添了很多樂子，還有可以無限復活的魔核的大背景，令人覺得後續的發展很有趣，加上我最喜歡的聲優楠木燈的傾情配音，雖然製作是“大名鼎鼎”的p9，還是讓我很期待這部番的。 好了，廢話說完了，開始本期分享吧！',
      date: '2023-11-19'
    },
    {
      path: '/article12',
      img: img12,
      title: '萌系（×藥師）動漫表情包補給站第五十四期——《藥屋少女的呢喃》new更新至第六集',
      decs: '本番講述了位處大陸中央的某個大國，有位姑娘置身於皇帝宮闕之中，姑娘名喚貓貓，原在花街擔任藥師，眼下則在後宮做下女。 那一天，貓貓得知皇子皆年幼早夭的事，連尚在人世的皇子皇女也身染重病，她開始調查他們的病因──彷彿就像有不可說的詛咒一樣。 美貌超絕的宦官壬氏讓貓貓去説明孩子病危的玉葉妃，貓貓雖然對人不感興趣，但對毒和葯卻異常執著。 就這樣，花街長大的藥師被捲進了流言蜚語。 儘管壬氏不斷地把麻煩事推給貓貓，但她還是在努力處理它們，“試毒”少女將一一解決宮中發生的懸疑案件。',
      date: '2023-11-19'
    },
    {
      path: '/article11',
      img: img11,
      title: '堤亞穆帝國物語~從斷頭台開始，公主重生后的逆轉人生~ 第四集 夏薇舞？ 預告',
      decs: '為了準備帝國的革命，米婭想加深與軍事強大的利姆諾王國的友誼。 因此，他任命二王子亞伯·利姆諾（Abel Lemno）為即將到來的新生歡迎舞會的舞伴。 亞伯認為他和米婭不相容，有一次差點拒絕他的邀請，但設法得到了承諾。 - 而在派對當天，她完美地打扮了自己，卻遭遇了意想不到的麻煩。 此外，在舞會期間，還發生了蒂奧娜的坐月子事件！',
      date: '2023-11-19'
    },
    {
      path: '/article10',
      img: img10,
      title: 'TV動畫《物理魔法使馬修 第二季》公開主視覺圖，2024 年 1 月開播！',
      decs: '原作者：Hajime Komoto（集英社“Shukan Shonen Jump”） 演員：田中智也連載故事：Yosuke Kanoda Kakuiro 設計： 東島久志次要角色設計： Hisamatsu Saki， Nozomu Houto， 戶谷賢都Tools 設計： Sayaka Takase， Kohei Mitsukoshi， Yoshikawa Yoshikawa',
      date: '2023-11-19'
    },
    {
      path: '/article9',
      img: img9,
      title: '狩龍人拉格納 第八集 痛擊 預告',
      decs: '緋紅下令炸毀王都的所有地方，以追捕在與拉格納的戰鬥中身體和精神上都走投無路的阿爾特瑪蒂亞。阿特瑪蒂亞被這種意想不到的情況摧毀了，並試圖啟動一個咒語，讓世界再次處於極端狀態。',
      date: '2023-11-19'
    },
    {
      path: '/article8',
      img: img8,
      title: '偶像大師 百萬現場 第七集 撲通！ 盛夏大海的初次亮相！ 預告',
      decs: 'Team1stのデビューライブも話題となったMILLIONSTARS。続くTeam2nd、Team3rdは「生っすか！？ サンデー 特別出張版」に出演。番組ラストでデビューライブを披露する権利をかけて2つのチームが海上障害物競走で激突する。 数ある関門を乗り越えゴールを目指す10人。 果たして勝利の栄冠はどちらに輝くのか......！？',
      date: '2023-11-19'
    },
    {
      path: '/article7',
      img: img7,
      title: '超超超超超喜歡你的100個女朋友 第七集 初次見面的藥少女 預告',
      decs: '小太郎為他路過的化學室里看到的一個女人感到了命運。 第二天，當我再次去化學室時，那個女人不在那裡，只有一個嬌小、開朗的女孩。 她的名字是Yakuzen Kusuri。 - 小太郎試圖談論昨天的女人，但他只是被有些強勢的楠栗所動搖。 - 我被要求服用一種可疑的藥物，雖然我對效果感到驚訝，但當我突然看著楠木時，我不禁覺得自己很可愛。',
      date: '2023-11-19'
    },
    {
      path: '/article6',
      img: img6,
      title: '家裡蹲吸血姬的鬱悶 第七集 斯嘉麗舞台',
      decs: 'Komari 決定與 Sakuna 合作對抗七紅天，但 Sakuna 的真實身份是顛倒月的間諜。 Sakuna的家人被扣為人質，無法反抗該組織。 Sakuna尋求解決方案，並去諮詢Millicent，他也是Upside Down Moon的成員。 當戰鬥終於開始時，科馬里的手下在戰鬥一開始就被弗雷特煽動，他們都向弗萊特的部隊發起了衝鋒。 趁著缺口的德爾佩恩襲擊了科馬里',
      date: '2023-11-19'
    },
    {
      path: '/article5',
      img: img5,
      title: '亡骸遊戲(第2季度) 第十九集 The Friends-好朋友- 預告',
      decs: '幅木の霊から情報を引き出そうとしたポルカだったが、組織に娘を捧げたことを誇る幅木に自分を売った父親を重ね合わせ激しい怒りを覚える。感情に任せ幅木の霊を握りつぶそうとしたが…',
      date: '2023-11-19'
    },
    {
      path: '/article4',
      img: img4,
      title: '海賊王1098話情報：金妮被迫嫁給天龍人',
      decs: '話情報已更新，本話內容極具震撼力，不禁令人思考尾田是否進行了大規模的創意展開。金妮遭到綁架後，被販賣給了天龍人，並被迫與一位天龍人成婚，生育了一個女兒，她便是波妮。這一劇情發展出乎所有人的預料，此前關於波妮是否為金妮克隆人的猜測也因此得到了證實。可以確定，波妮作為金妮的女兒，成為了這一劇情的核心要素。',
      date: '2023-11-17'
    },
    {
      title: '《葬送的芙莉蓮》：冒險結束後，回溯無法重來的旅程',
      path: '/article1',
      img: img1,
      decs: '這幾年，蠻流行異世界梗的，勇者、魔王、惡龍、冒險，永遠是動漫世界的王道剛需。當《葬送的芙莉蓮》開播，我本以為這又是一部熱血冒險少年番，沒想到，一個冒險故事，開局在冒險已經結束的時刻，實在是令人意外。',
      date: '2023-11-16'
    },
    {
      path: '/article2',
      img: img2,
      title: '熱血拋灑下的暖心純愛，十月最強開局動畫《不死不幸》簡評',
      decs: '今年的十月新番雖然沒有去年《電鋸人》、《孤獨搖滾》那樣的出圈級爆款，但 也有很多值得一看的中堅佳作，就像今天要推薦的這部本質戀愛番的熱血動畫。',
      date: '2023-11-16'
    },
    {
      path: '/article3',
      img: img3,
      title: '鎮魂街：貂靈蕓與皇甫龍鬥激戰 群英殿兩代最強者的終極對決',
      decs: '在《鎮魂街》漫畫之前的劇情中，貂靈蕓曾前往皇甫龍鬥的大本營轉輪城進行挑釁，然而皇甫龍鬥並未對她作出妥協，雙方隨即爆發了激烈的沖突。最近一話的漫畫中，貂靈蕓回憶起她剛加入群英殿時的情景，當時她與群英殿的二把手山王進行了一場決鬥，並最終取得了勝利。',
      date: '2023-11-16'
    },

  ]
  return <div className="article-list">
    {
      data.map((item: any, key: any) => {
        return <div className="list-item" key={`${key}_index`}>
          <img src={item.img || "https://img2.ali213.net/picfile/News/2023/10/25/6fb78316707727c5f97c512530a11d68.jpg"} alt="" />
          <div className="item-title" onClick={() => {
            // 跳转到指定路由
            history.push(item.path);
          }}>{item.title}</div>
          <div className="item-date">時間：{item.date}</div>
          <div className="item-decs">{item.decs}</div>
          <span className="item-continue" onClick={() => {
            // 跳转到指定路由
            history.push(item.path);
          }}>Continue Reading</span>
        </div>
      })
    }
  </div>
}

export default List