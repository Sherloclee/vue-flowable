import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import antd from 'ant-design-vue'
import vuex from 'vuex'
import FormMaking from 'form-making'
import ace from 'ace-builds'
import 'form-making/dist/FormMaking.css'
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

Vue.config.productionTip = false

Vue.use(antd);
Vue.use(element);
Vue.use(ace)
Vue.use(FormMaking)

new Vue({
  router,
  vuex,
  render: h => h(App),
}).$mount('#app');
