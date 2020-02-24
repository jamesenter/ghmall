<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabs" class="tab-control-item" :class="{active: (currentType == item.category)}" @click="clickItem(item.category)"  >
     <span> {{item.title}}</span>
    </div>
  </div>
</template>

<script>



  export default {
    name: "TabControl",
    props:{
      tabs:{
        type:Array,
        default : [],
      }
    },
    data(){
      return{
        currentType:this.tabs[0].category

      }
    },
    created(){
    },
    methods:{
      clickItem(category){
        this.currentType = category
        this.$emit('tabClick',category)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;


  }
  .tab-control-item{
    text-align: center;
    flex: 1;

  }

.active{
  color: #eb4868;
}
  .active span{
    padding: 5px;
    border-bottom: 2px solid #eb4868 ;
  }
</style>
