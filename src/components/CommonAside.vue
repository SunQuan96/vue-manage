<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

    <h3>{{ isCollapse? '后台': '笨笨后台管理系统' }}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.name" :key="item.name">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChildren" :key="item.label" index="item.label">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>

    </el-submenu>

  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-aside {
  height: calc(100%);
  overflow-y: scroll;
  overflow-x: hidden;
}

.el-menu {
  height: 100vh;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400px;
  }
}
</style>

<script>
import Cookie from "js-cookie"
export default {
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击事件
    clickMenu(item) {
      console.log(item)
      //当页面的路由语跳转页面路由不一致才允许跳转
      if (this.$route.path !== item.path && !(this.$route.path === "/home" && (item.path === "/"))) {
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu', item)
    }
  },
  //过滤
  computed: {
    //没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
    },
    menuData() {
      // 判断当前数据,如果缓存中没有,当前store中去获取
      return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  }
}
</script>
<style lang="less" scoped>
.el-menu {
  border-right: none;
}
</style>
