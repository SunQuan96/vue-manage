import Vue from "vue";
import App from "./App.vue";
// import ElementUI, {Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// Vue.use(Button)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Radio)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
