<template>
    <div>
        <div class="formArea">
            <el-form :inline="true" size="small">
                <el-form-item>
                    <el-input placeholder="流程定义KEY"/>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="流程定义名称"/>
                </el-form-item>
                <el-form-item>
                    <el-select placeholder="状态" v-model="form.status">
                        <el-option label="激活" value="1"></el-option>
                        <el-option label="挂起" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-button @click="search" size="small">搜索</el-button>
                <el-button @click="createFlow" size="small">新建工作流</el-button>
            </el-form>
        </div>
        <div class="tableArea">
            <el-table :data="tableData" border>
                <el-table-column label="流程定义名称" prop="name" />
                <el-table-column label="流程定义key" prop="key" />
                <el-table-column label="流程定义分类" prop="type" />
                <el-table-column label="版本" prop="version" />
                <el-table-column label="表单key" prop="formKey" />
                <el-table-column label="操作" prop="actions" />
            </el-table>
        </div>
    </div>
</template>
<script>
//import reqwest from "reqwest";
import CryptoJs from 'crypto-js';

export default {
    data() {
        return {
            tableData: [],
            form: {
                status: ''
            },
            pagination: {},
        };
    },
    mounted() {},
    methods: {
        createFlow(){
            this.$router.push({
                name: 'design'
            })
        },
        search(){
            let name = `流程${this.tableData.length+1}`
            let key = CryptoJs.MD5(name).toString()
            let dat = {
                name: name,
                key: key,
                type: '12',
                version: 'ver 0.0.1',
                formKey: 'asdf-lekj-qwer-uioh',
            }
            this.tableData.push(dat)
        }
    },
};
</script>
