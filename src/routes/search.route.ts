import { RouteRecordRaw } from "vue-router";

export const SearchRoute: RouteRecordRaw = {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/Search.vue')
}