import Vue from 'vue';
import App from './App.vue';
import { Button, Layout, Menu, Icon, Avatar, List, Upload, Modal } from 'ant-design-vue';
Vue.use(Button).use(Layout).use(Menu).use(Icon).use(Avatar).use(List).use(Upload).use(Modal);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
