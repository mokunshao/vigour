import toast from './toast.vue';

let toastInstance;

function afterDestroyed() {
  toastInstance = null;
}

function createToast(Vue, message, propsData) {
  const Contructor = Vue.extend(toast);
  const vm = new Contructor({
    propsData,
  });
  vm.$slots.default = message;
  vm.$mount();
  vm.$on('hook:destroyed', afterDestroyed);
  document.body.appendChild(vm.$el);
  return vm;
}

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, propsData) => {
      console.log(toastInstance);

      if (toastInstance) {
        toastInstance.removeNode();
      }
      toastInstance = createToast(Vue, message, propsData);
    };
    Vue.component(toast.name, toast);
  },
};
