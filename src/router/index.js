import Vue from "vue";
import VueRouter from "vue-router";
import User from "../views/User.vue";
import vueHome from "../views/vueHome.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/vueHome", //重定向
    children: [
      { path: "User", component: User }, //用户管理
      { path: "vueHome", component: vueHome }, //首页
      { path: "mall", component: Mall }, //商品管理
      { path: "page1", component: PageOne },
      { path: "page2", component: PageTwo },
    ],
  },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
// export default {
//     computed: {
//       username() {
//         // 我们很快就会看到 `params` 是什么
//         return this.$route.params.username
//       }
//     },
//     methods: {
//       goBack() {
//         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
//       }
//     }
//   }
