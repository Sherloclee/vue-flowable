import layout from '@/components/Layout'
export default {
    path: '/workflow',
    component: layout,
    name: '工作流',
    children: [
        { path: '/workflow/bpmn', name:'design', component: ()=>import('@/components/workflow/flowManage/bpmn')},
        { path: '/workflow/flowInstance', name:'flowInstance', component: ()=>import('@/components/workflow/flowInstance')},
        { path: '/workflow/formManage', name:'formManage', component: ()=>import('@/components/workflow/formManage')},
        { path: '/workflow/formManage/createForm', name:'createForm', component: ()=>import('@/components/workflow/formManage/formMaker')},
        { path: '/workflow/flowManage', name: 'flowManage', component: ()=>import('@/components/workflow/flowManage')}
    ]
}