export default {
  state: {
    isCollapse: false, //用于控制菜单展开还是收起
    tabsList: [
      {
        path: "/",
        name: "vueHome",
        label: "首页",
        icon: "s-home",
        url: "vueHome/vueHome",
      },
    ], //面包屑的数据
  },
  mutations: {
    //修改菜单展开还是收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //更新面包屑数据
    selectMenu(state, val) {
      console.log(val, "val");
      //判断添加数据是否为首页
      if (val.name !== "vueHome") {
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        //如果不存在
        if (index == -1) {
          state.tabsList.push(val);
        }
      }
    },
  },
};
