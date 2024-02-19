import { getList } from '@/api/home';
import { useEffect, useState } from 'react';
import { history, Helmet } from 'umi';
import "./index.scss"
const Info = (props: any) => {
  const {
    location: { pathname }
  }: any = history;
  const parts = pathname.split('/');

  // 获取第二个 '/' 后面的值
  const id = parts[2];
  const [metaData, setMetaData] = useState<any>(null)
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
  }, [history])

  useEffect(() => {
    if (dataList.length > 0) {
      if (dataList[0].meta) {
        // 使用正则表达式匹配出 keywords 和 description 属性的值
        const keywordsMatch = dataList[0].meta.match(/<meta\s+content="([^"]*)"\s+data-vue-meta="true"\s+name="keywords"/);
        const descriptionMatch = dataList[0].meta.match(/<meta\s+content="([^"]*)"\s+data-vue-meta="true"\s+name="description"/);
        console.log(dataList, keywordsMatch, descriptionMatch, ';')
        setMetaData({
          keywords: keywordsMatch ? keywordsMatch[1] : dataList[0].title,
          description: descriptionMatch ? descriptionMatch[1] : dataList[0].title
        })
      }
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
  return dataList.length > 0 && metaData && <div>
    <Helmet>
      <title>{dataList[0].title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta property="og:title" content={dataList[0].title} />
      <meta
        property="og:description"
        content={metaData.description}
      />
      <meta property="og:image" content={`https://anime.weilaiyw.com/info/${dataList[0].id}`} />
    </Helmet>
    <div>
      <div className="info-title">{dataList[0].title}</div>
      <div className="info-time">{dataList[0].create_time}</div>
      <div dangerouslySetInnerHTML={{ __html: dataList[0].content }} >
      </div>
    </div >
  </div>
}
export default Info