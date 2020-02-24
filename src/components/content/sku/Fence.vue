<template>
  <div class="spec" >
    <div class="spec-title">{{fence.name}}</div>
      <cell
        v-for="item in fence.values"
        @cellClike="cellClick"
        :all-sku="allSku"
        :pid="fence.pid"
        :prop="item"
        :key="item.valueId"
        :seletedSku="seletedSku"
      />
  </div>
</template>

<script>
  import Cell from "./Cell.vue";
    export default {
        name: "fence",
        props:{
            fence:{
                type:Object
            },
            seletedSku:{
                type:Object
            },
            allSku:{
                type:Array
            },

        },
        components:{
            Cell
        },
        data(){
          return{
          }
        },
        computed:{

        },
        methods:{
            cellClick(pid,cell){
                this.$emit("changeSelectedSku",pid,cell)
            },


        }
    }
</script>

<style scoped>
  .spec{
    margin: 0 3px 12px 0;
  }
  .spec-title{
    padding-bottom: 12px;
  }


</style>
