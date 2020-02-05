<template>
  <div id="shopCart">
    <nav-top class="nav-top">
      <template v-slot:center> 购物车</template>
    </nav-top>
    <cartList></cartList>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import navTop from "../../components/common/navBar/navTop";
import CartList from "./childrenCpn/CartList";
import CartBottomBar from "./childrenCpn/CartBottomBar";
  export default {
    name: "shopCart",
    components: {
      navTop,
      CartList,
      CartBottomBar
    }
  }
</script>

<style scoped>
  .nav-top{
    display: flex;
    line-height: 44px;
    background-color: #eb4868;
    color: #ffffff;

  }
</style>
