import { defineConfig } from "umi";
export default defineConfig({
  routes: [
    {
      path: "/", component: '@/pages/Article/list',
    },
    {
      path: "/info",
      routes: [
        {
          path: "/info",
          component: '@/pages/Article/info',
        },
        {
          layout: false,
          path: "/info/:id", component: '@/pages/Article/info'
        },
      ]
    },
    {
      path: "/mobile",
      component: '@/pages/Mobile/index',
    },
    {
      layout: false,
      path: "/mobileInfo/:id", component: '@/pages/Mobile/info'
    },

  ],
  npmClient: 'yarn',
});
