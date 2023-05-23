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
    },
    {
        path: '/terms-of-service',
        component: () => import('@/views/TermsOfService.vue')
    },
    {
        path: '/privacy-policy',
        component: () => import('@/views/PrivacyPolicy.vue')
    },
    {
        path: '/data-deletion',
        component: () => import('@/views/DataDeletion.vue')
    },
    {
        path: '/change-log',
        component: () => import('@/views/ChangeLog.vue')
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})

export default router