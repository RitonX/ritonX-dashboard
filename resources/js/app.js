
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Index from './Index.vue';

// window.Vue = require('vue');
// Vue.component('app', require('./App.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        "index": Index
    }
});
