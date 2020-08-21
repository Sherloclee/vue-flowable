<template>
    <a-sub-menu v-if="item.children">
        <span slot="title">
            <a-icon type="mail" />
            <span>{{item.title}}</span>
        </span>
        <myMenu v-for="(child, index) in item.children" :key="index" :item="child" />
    </a-sub-menu>
    <a-menu-item key="1" v-else>
        <router-link to="/workflow/bpmn">
            <a-icon type="user" />
            <span>{{item.title}}</span>
        </router-link>
    </a-menu-item>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: {
        item:{
            type: Object,
            default: ()=>{return {title: 'null', children: false}}
        }
    }
};
</script>

<style>
</style>