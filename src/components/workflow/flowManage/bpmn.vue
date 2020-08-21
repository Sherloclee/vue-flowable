<template>
  <div class="containers">
    <a-button @click="btnClick">testS</a-button>
    <div class="canvas" ref="canvas"></div>
    <div id="js-properties-panel" class="panel"></div>
  </div>
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'

export default {
    data() {
        return {
            bpmnModeler: null,
            canvas: null
        }
    },
    mounted(){
        this.canvas = this.$refs.canvas;
        this.bpmnModeler = new BpmnModeler({
            container: this.canvas,
            propertiesPanel: {
                parent: '#js-properties-panel'
            },
            additionalModules: [
                // 右侧的属性栏
                propertiesProviderModule
            ]
        })
        this.bpmnModeler.createDiagram()
    },
    methods: {
        async btnClick(){
            let data = await this.bpmnModeler.saveXML({format: true})
            console.log(data.xml)
        }
    }
}
</script>

<style lang="scss" scoped>
.containers{
	background-color: #ffffff;
	width: 100%;
	height: 100%
}
.canvas{
	width: 100%;
	height: 100%;
}
.panel{
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}
</style>