import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: () => import('../Main.vue'),
    name: 'main',
    redirect: {
      name: 'button'
    },
    children: [],
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../Button.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../Message.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
