import toast from './toast.vue';

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, propsData) => {
      const Contructor = Vue.extend(toast);
      const vm = new Contructor({
        propsData,
      });
      vm.$slots.default = message;
      vm.$mount();
      document.body.appendChild(vm.$el);
    };
    Vue.component(toast.name, toast);
  },
};
