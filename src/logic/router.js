import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/Welcome.vue')
},{
    path: '/hello',
    component: () => import('@/views/Hello.vue')
}]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router