<template>
    <div class="tabs">
        <el-tag v-for="item in tags" :key="item.path" :closable="item.name !== 'vueHome'"
            :effect="$router.name === item.name ? 'dark' : 'plain'">
            {{ item.label }}
        </el-tag>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "CommonTag",
    data() {
        return {}
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
    mounted() {
        console.log(this.$router, this.tags)
    }

}
</script>