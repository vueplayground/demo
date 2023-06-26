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
    path: '/documentation',
    component: () => import('@/views/Documentation.vue'),
    children: [{
        path: '',
        component: () => import('@/docs/GettingStarted.vue')
    },
    {
        path: 'shortcuts',
        component: () => import('@/docs/Shortcuts.vue')
    }
    ]
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
    path: '/release-log',
    component: () => import('@/views/ReleaseLog.vue')
}
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router