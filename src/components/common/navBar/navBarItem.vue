<template>
  <div class="nav-bar-item" @click="getView">
    <div v-if="!isActive()"><slot name="icon">图标1</slot></div>
    <div v-else ><slot name="icon-active">图标2</slot></div>
    <div :style="activeStyle()"><slot name="content">文字</slot></div>
  </div>
</template>

<script>
  export default {
    name: "navBarItem",
    data(){
      return{
      }
    },
    props:{
      link:String,
      activeColor:{
        type:String,
        default: 'red'
      },


    },
    methods:{
      activeStyle(){
        return  this.isActive()? { 'color': this.activeColor}:{}
      },
      isActive(){
        return  this.$route.path.indexOf(this.link) != -1
      },
      getView(){
       return  this.$router.push(this.link)
      }
    }
  }
</script>

<style scoped>
.nav-bar-item{
  font-size: 14px;
  flex: 1px;
  text-align: center;
}
  .nav-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
