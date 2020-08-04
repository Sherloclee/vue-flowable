<template>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-sub-menu>
            <span slot="title">
                <a-icon type="mail" />
                <span>工作流</span>
            </span>
            <a-menu-item key="1">
                <router-link to="/workflow/bpmn">
                    <a-icon type="user" />
                    <span>工作流定义</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/workflow/manage">
                    <a-icon type="video-camera" />
                    <span>管理工作流</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <router-link to="/workflow/manage">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script>
export default {};
</script>

<style>
</style>