import { createRouter, createWebHistory } from 'vue-router'
import { HomeRoute } from './home.route'
import { NotFoundRoute } from './not-found.route'
import { SearchRoute } from './search.route'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        HomeRoute,
        SearchRoute,
        NotFoundRoute
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})

export default router