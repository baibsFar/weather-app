import { RouteRecordRaw } from "vue-router";

export const HomeRoute: RouteRecordRaw = {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
}