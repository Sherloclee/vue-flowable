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
import axios from 'axios'
import crypto from 'crypto-js'
import moment from 'moment'
// import qs from 'qs'

export default {
    data() {
        return {}
    },
    methods:{
        async save(){
            let formJson = await this.$refs.makingform.getJSON()
            formJson = JSON.stringify(formJson)
            let key = crypto.MD5(formJson+String(moment().valueOf())).toString()
            console.log(key)
            let name = '表单123'
            let category = 'sfsf'
            let description = 'asfsfasdf'
            let response = await requests.post({
              url: "/api/form/save_form",
              data: {
                formJson,
                name,
                description,
                category,
                key
              }
            })
            console.log(response)
        }
    }
}
</script>

<style>

</style>