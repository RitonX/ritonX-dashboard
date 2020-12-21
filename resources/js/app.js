
require('./bootstrap');

import VueRouter from 'vue-router';
import router from './routes';
import Index from './Index.vue';

window.Vue = require('vue');


// Vue.component('app', require('./App.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    }
});
