<template>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-sub-menu>
            <span slot="title">
                <a-icon type="mail" />
                <span>菜单123</span>
            </span>
            <a-menu-item key="1">
                <router-link to="/helloworld">
                    <a-icon type="user" />
                    <span>nav 1</span>
                </router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
            <router-link to="/workflow/bpmn">
                <a-icon type="video-camera" />
                <span>nav 2</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
        </a-menu-item>
    </a-menu>
</template>
<script>
export default {};
</script>

<style>
</style>