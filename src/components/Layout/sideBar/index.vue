<template>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-sub-menu>
          <span slot="title">菜单123</span>
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
</template>
<script>
export default {

}
</script>

<style>

</style>