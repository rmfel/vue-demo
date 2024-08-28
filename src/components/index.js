import CustomButton from './CustomButton.vue';

export default {
  install(Vue) {
    Vue.component('CustomButton', CustomButton);
  },
};

export { CustomButton };
