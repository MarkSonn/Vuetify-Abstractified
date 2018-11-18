import Vue from 'vue';
import eventBus from '@/helpers/eventBus';
import './components/_globals';
import App from './App.vue';

Vue.config.productionTip = false;

function triggerGlobalClick(e) {
  e.stopPropagation();
  eventBus.$emit('focusChanged', this);
}
document.addEventListener('click', triggerGlobalClick);

Vue.mixin({
  mounted() {
    this.$el.addEventListener('click', triggerGlobalClick);
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', triggerGlobalClick);
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
