import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import ChartWrapper from './components/ChartWrapper.vue'

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'chart-wrapper'
];
Vue.config.productionTip = false;

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement('chart-wrapper', ChartWrapper, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});


