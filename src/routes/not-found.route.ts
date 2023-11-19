import { RouteRecordRaw } from "vue-router";

export const NotFoundRoute: RouteRecordRaw = {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import('@/pages/NotFound.vue')
}