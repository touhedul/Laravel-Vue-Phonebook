
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('Myheader', require('./components/Myheader.vue').default);
 let Myheader = require('./components/Myheader.vue').default;
 let Myfooter = require('./components/Myfooter.vue').default;
 let Home = require('./components/Home.vue').default;
 let About = require('./components/About.vue').default;

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
]
const router = new VueRouter({
    mode:'history',//for removing #
    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter},

});
