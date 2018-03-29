import Vue from 'vue';
import App from '@/vue/App.vue';
import router from './router';
import store from './store';
import {MyApp} from './main'
import {app} from 'electron';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />',
});

const myapp = new MyApp(app);