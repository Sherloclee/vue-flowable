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
    methods: {},
};
</script>
