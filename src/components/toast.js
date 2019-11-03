import toast from './toast.vue';

let toastInstance;

function createToast(Vue, message, propsData) {
  const Contructor = Vue.extend(toast);
  const vm = new Contructor({
    propsData,
  });
  vm.$slots.default = message;
  vm.$mount();
  document.body.appendChild(vm.$el);
  return vm;
}

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, propsData) => {
      if (toastInstance) {
        toastInstance.removeNode();
      }
      toastInstance = createToast(Vue, message, propsData);
    };
    Vue.component(toast.name, toast);
  },
};
