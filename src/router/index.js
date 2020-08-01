import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/Layout'
import workflow from './workFlow'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home', 
        component: layout,
        children: [
            {path: '/helloworld', name: 'hhh', component: () => import('@/components/HelloWorld')},
        ]
    },
    workflow
]

export default new Router({routes})