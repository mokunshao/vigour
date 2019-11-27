import Vue from 'vue';
import App from './App.vue';
import toast from './components/toast';
import notification from './components/notification';

Vue.config.productionTip = false;
Vue.use(toast);
Vue.use(notification);

new Vue({
  render: h => h(App),
}).$mount('#app');
