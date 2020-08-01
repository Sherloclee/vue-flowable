import layout from '@/components/Layout'
export default {
    path: '/workflow',
    component: layout,
    name: '工作流',
    children: [
        { path: '/workflow/bpmn', name:'设计', component: ()=>import('@/components/workflow/bpmn')},
        { path: '/workflow/manage', name: '管理已有工作流', component: ()=>import('@/components/workflow/manage')}
    ]
}