import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/features',
        component: () => import('@/views/Features.vue')
    },
    {
        path: '/pricing',
        component: () => import('@/views/Pricing.vue')
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router