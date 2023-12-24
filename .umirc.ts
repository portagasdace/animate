import { defineConfig } from "umi";
export default defineConfig({
  hash: true,
  publicPath: '/',
  routes: [
    {
      exact: true,
      path: "/", component: '@/pages/Article/list',
    },
    {
      exact: true,
      path: "/info/:id", component: '@/pages/Article/info'
    },
    {
      exact: true,
      path: "/mobile", component: '@/pages/Mobile/index',
    },
    {
      exact: true,
      layout: false,
      path: "/mobileInfo/:id", component: '@/pages/Mobile/info'
    },
  ],
  npmClient: 'yarn',
});
