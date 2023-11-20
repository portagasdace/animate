import { defineConfig } from "umi";
export default defineConfig({
  alias: {
    foo: '/',
  },
  routes: [
    {
      path: "/", component: '@/pages/Article/list',
    },
    {
      path: "/article1", component: '@/pages/Article/1/1'
    },
    {
      path: "/article2", component: '@/pages/Article/2/2'
    },
    {
      path: "/article3", component: '@/pages/Article/3/3'
    },
    {
      path: "/article4", component: '@/pages/Article/4/index'
    },
    {
      path: "/article5", component: '@/pages/Article/5/index'
    },
    {
      path: "/article6", component: '@/pages/Article/6/index'
    },
    {
      path: "/article7", component: '@/pages/Article/7/index'
    },
    {
      path: "/article8", component: '@/pages/Article/8/index'
    },
    {
      path: "/article9", component: '@/pages/Article/9/index'
    },
    {
      path: "/article10", component: '@/pages/Article/10/index'
    },
    {
      path: "/article11", component: '@/pages/Article/11/index'
    },
    {
      path: "/article12", component: '@/pages/Article/12/index'
    },
    {
      path: "/article13", component: '@/pages/Article/13/index'
    },
  ],
  npmClient: 'yarn',
});
