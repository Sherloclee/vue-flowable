<template>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="0">
            <router-link :to="{name: 'hhh'}">首页</router-link>
        </a-menu-item>
        <a-sub-menu key="1">
            <span slot="title">
                <a-icon type="appstore" />
                <span>流程管理</span>
            </span>
            <a-menu-item key="9">
                <router-link :to="{name: 'flowManage'}">
                    <span>流程定义</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="10">
                <router-link :to="{name: 'design'}">
                    <span>流程实例</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="11">
                <router-link :to="{name: 'formManage'}">
                    <span>表单管理</span>
                </router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
};
</script>

<style>
</style>