import layout from '@/components/Layout'
export default {
    path: '/workflow',
    component: layout,
    name: '工作流',
    children: [
        { path: '/workflow/bpmn', name:'design', component: ()=>import('@/components/workflow/bpmn')},
        { path: '/workflow/formManage', name:'formManage', component: ()=>import('@/components/workflow/formManage')},
        { path: '/workflow/flowManage', name: 'flowManage', component: ()=>import('@/components/workflow/flowManage')}
    ]
}