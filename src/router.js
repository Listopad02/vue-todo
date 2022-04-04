import { createWebHistory, createRouter } from 'vue-router'
import Active from '@/views/Active'
import Completed from '@/views/Completed'
import All from '@/views/All'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/', component: All
        },
        {
            path: '/active', component: Active
        },
        {
            path: '/completed', component: Completed
        }
    ]
})

export default router