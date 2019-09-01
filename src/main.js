import Vue from 'vue';
import App from './App.vue';
import { Button, Layout, Menu, Icon } from 'ant-design-vue';
Vue.use(Button).use(Layout).use(Menu).use(Icon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
