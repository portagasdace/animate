import express from 'express';
import sm from 'sitemap';
import axios from 'axios';
import fs from 'fs';
const host = 'https://anime.weilaiyw.com';

/* service.allNames 获取一个文章list 结构如下
*  {
      title: String,
      id: String,
      updateTime: Long
    }
*/

axios('https://anime.weilaiyw.com/cartoon/list', {
  method: 'get',
  accept: 'application/json',
  'content-type': 'application/json; charset=utf-8',
})
  .then((res) => {
    let smOption = {
      hostname: host,
      cacheTime: 600000,
      urls: [host],
    };
    res.data.forEach((art) => {
      smOption.urls.push({
        url: `/info/${art.id}`,
        changefreq: 'daily',
        lastmod: new Date(art.updateTime),
      });
    });
    generateSitemap(smOption);
  })
  .catch((e) => {
    console.log(e);
  });
const generateSitemap = (smOption) => {
  const xmlHeader =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const xmlFooter = '</urlset>';
  const xmlUrls = smOption.urls
    .map(
      (route) =>
        `<url>\n<loc>https://anime.weilaiyw.com${
          route.url ? route.url : ''
        }</loc>\n</url>`
    )
    .join('\n');
  const xmlContent = xmlHeader + xmlUrls + xmlFooter;

  fs.writeFileSync('sitemap.xml', xmlContent);
};
