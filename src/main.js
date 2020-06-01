// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import router from "./router";

import "vuetify/dist/vuetify.min.css";
import "font-awesome/css/font-awesome.css";

import Notifications from "vue-notification";
import Vuetify from "vuetify";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./styles/global.css";


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import routes from './router/index.js'

import axios from "axios";
import VueAxios from "vue-axios";

import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
import fullCalendar from "vue-fullcalendar";
import { setupComponents } from "./config/setup-components";

import swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
import Auth from './services/auth.js';

Vue.use(VueChartkick, { adapter: Chart });
Vue.component("full-calendar", fullCalendar);
Vue.component("swatches", swatches);

setupComponents(Vue);

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(Notifications);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// configure router
export const router = new VueRouter({
    routes, // short for routes: routes
    // linkActiveClass: 'active',
    // mode: 'history'
})

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data: {
    themeColor: "#1D2939",
    userEmail: "admin@yopmail.com",
    userPassword: "123456"
  }
});
