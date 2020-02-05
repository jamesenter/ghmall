<template>
<div class="wrapper">分类
  <ul class="content">
    <li>'商品'1</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品85'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品'</li>
    <li>'商品100'</li>
  </ul>
</div>



</template>

<script>
  import BScroll from 'better-scroll'


  export default {
    name: "category",
    data(){
      return{
        scroll : null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'))
    }
  }
</script>

<style scoped>
  .wrapper {
      height: 200px;
      overflow: hidden;
  }
</style>
