<template>
    <a-layout id="components-layout-demo-custom-trigger" class="main">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <sideBar/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            ><router-view style="height: 100%"/></a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import sideBar from "./sideBar";
export default {
    components: {
        sideBar,
    },
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.main {
    height: 100%;
}
</style>
