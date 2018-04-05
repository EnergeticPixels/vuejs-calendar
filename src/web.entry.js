import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }});

import App from './components/App.vue';

let events = [
  { description: 'Random Event 1', date: moment('2018-04-06', 'YYYY-MM-DD') },
  { description: 'Random Event 2', date: moment('2018-04-08', 'YYYY-MM-DD') },
  { description: 'Random Event 3', date: moment('2018-05-10', 'YYYY-MM-DD') }
];
let initialState = Object.assign({}, store.state, { events });
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
