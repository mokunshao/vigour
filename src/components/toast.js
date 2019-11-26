import toast from './toast.vue';

let toastInstance;

function afterDestroyed() {
  toastInstance = null;
}

function createToast(Vue, message, propsData) {
  const Constructor = Vue.extend(toast);
  const vm = new Constructor({
    propsData,
  });
  vm.$slots.default = message;
  vm.$mount();
  vm.$once('hook:destroyed', afterDestroyed);
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
