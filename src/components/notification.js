import notification from './notification.vue';

let Instance;

export default {
  install(Vue) {
    Vue.component(notification.name, notification);
    const Constructor = Vue.extend(notification);
    Vue.prototype.$notify = (obj = { content: 'test' }) => {
      if (!Instance) {
        const vm = new Constructor();
        Instance = vm;
        vm.$mount();
        document.body.appendChild(vm.$el);
      }
      Instance.$data.list = [...Instance.$data.list, obj];
    };
  },
};
