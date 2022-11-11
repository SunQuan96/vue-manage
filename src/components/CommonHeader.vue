<template>
    <div class="heard-container">
        <div class="l-concent">
            <el-button @click='handleMenu' icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-concent">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/user.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    }
}

</script>
<style lang="less" scoped>
.heard-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-concent {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>