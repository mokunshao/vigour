import aside from './aside.vue';
import buttonGroup from './button-group.vue';
import button from './button.vue';
import cascader from './cascader.vue';
import checkbox from './checkbox.vue';
import col from './col.vue';
import collapseItem from './collapse-item.vue';
import collapse from './collapse.vue';
import content from './content.vue';
import dialog from './dialog.vue';
import dropdown from './dropdown.vue';
import footer from './footer.vue';
import formattedInput from './formatted-input.vue';
import header from './header.vue';
import icon from './icon.vue';
import input from './input.vue';
import layout from './layout.vue';
import popover from './popover.vue';
import radioGroup from './radio-group.vue';
import radio from './radio.vue';
import row from './row.vue';
import tabsBody from './tabs-body.vue';
import tabsHead from './tabs-head.vue';
import tabsItem from './tabs-item.vue';
import tabsPane from './tabs-pane.vue';
import tabs from './tabs.vue';
import tagInput from './tag-input.vue';
import toggle from './toggle.vue';

import notification from './notification';
import toast from './toast';

const components = [
  aside,
  buttonGroup,
  button,
  cascader,
  checkbox,
  col,
  collapseItem,
  collapse,
  content,
  dialog,
  dropdown,
  footer,
  formattedInput,
  header,
  icon,
  input,
  layout,
  popover,
  radioGroup,
  radio,
  row,
  tabsBody,
  tabsHead,
  tabsItem,
  tabsPane,
  tabs,
  tagInput,
  toggle,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.use(notification);
  Vue.use(toast);
};

export {
  aside,
  buttonGroup,
  button,
  cascader,
  checkbox,
  col,
  collapseItem,
  collapse,
  content,
  dialog,
  dropdown,
  footer,
  formattedInput,
  header,
  icon,
  input,
  layout,
  popover,
  radioGroup,
  radio,
  row,
  tabsBody,
  tabsHead,
  tabsItem,
  tabsPane,
  tabs,
  tagInput,
  toggle,
  toast,
  notification,
};

export default { install };
