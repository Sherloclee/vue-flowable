<template>
  <div>formManage
      <el-button @click="createForm">创建</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods: {
        createForm(){
            this.$router.push({
                name: 'createForm'
            })
        }
    }
}
</script>

<style>

</style>