import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main'
import PenetrateTest from './PenetrateTest'

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        redirect: '/main',
    },
    {
        path: '/main',
        component: Main,
    },
    {
        path: '/penetrate',
        component: PenetrateTest,
    },
]

const router = new VueRouter({
    routes,
})

export default router
