<template>
    <div class="heard-container">
        <div class="l-concent">
            <el-button @click='handleMenu' icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for='item in tags' :key="item.path" :to="{ path: item.path }">{{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-concent">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/user.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="cancel">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        handleClick(command) {
            if (command === 'cancel') {
                console.log('登出')
                // 清除cookie中的token
                Cookie.remove('token')
                // 清除cookie中的menu
                Cookie.remove('menu')
                // 跳转到登录页
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    mounted() {
        console.log(this.tags, 'tags')
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

    .l-concent {
        display: flex;
        align-items: center;

        /deep/ .is-link {
            color: rgb(178, 203, 232);
        }

        .el-breadcrumb {
            font-size: 13px;
            margin-left: 20px;
        }

    }
}
</style>