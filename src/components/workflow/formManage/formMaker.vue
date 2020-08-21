<template>
  <fm-making-form 
    ref="makingform" 
    style="height: 500px;" 
    preview 
    generate-code 
    generate-json
  >
    <template slot="action">
        <el-button type="text" size="medium" @click="save">
            <i class="el-icon-download"/>
            <span>保存</span>
        </el-button>
    </template>
  </fm-making-form>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods:{
        async save(){
            let dat = await this.$refs.makingform.getJSON()
            console.log(dat)
        }
    }
}
</script>

<style>

</style>