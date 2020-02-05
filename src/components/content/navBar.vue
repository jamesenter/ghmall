<template>
  <div id="nav-bar">
<!--  首页-->
    <nav-bar-item  link="/home">
    <template v-slot:icon>
      <img src="../../assets/img/navBar/home.png" alt="">
    </template>
    <template v-slot:icon-active>
      <img src="~assets/img/navBar/home_active.png" alt="">
    </template>
    <template v-slot:content>
      <div>首页</div>
    </template>
    </nav-bar-item>


    <!--  分类-->
    <nav-bar-item link="/category">
    <template v-slot:icon>
      <img src="~assets/img/navBar/category.png" alt="">
    </template>
    <template v-slot:icon-active>
      <img src="~assets/img/navBar/category_active.png" alt="">
    </template>
    <template v-slot:content>
      <div>分类</div>
    </template>
    </nav-bar-item>
    <!--  购物车-->
    <nav-bar-item link="/shopCart">
    <template v-slot:icon>
      <img src="~assets/img/navBar/shopCart.png" alt="">
    </template>
    <template v-slot:icon-active>
      <img src="~assets/img/navBar/shopCart_active.png" alt="">
    </template>
    <template v-slot:content>
      <div>购物车</div>
    </template>
    </nav-bar-item>

    <!--  我的-->
    <nav-bar-item link="/profile">
    <template v-slot:icon>
      <img src="~assets/img/navBar/mine.png" alt="">
    </template>
    <template v-slot:icon-active>
      <img src="~assets/img/navBar/mine_active.png" alt="">
    </template>
    <template v-slot:content>
      <div>我的</div>
    </template>
    </nav-bar-item>

  </div>

</template>

<script>
  import navBarItem from "../common/navBar/navBarItem";
  export default {
    name: "navBar",
    components:{
      navBarItem,
    }
  }
</script>

<style scoped>
  #nav-bar {
  /*flex布局*/
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;


    height: 49px;
    padding-top: 5px;

    background-color: #f6f6f6;
    box-shadow: 1px -2px rgba(100 100 100 0.3);
  }

</style>
