<template>
  <navTop id="nav-home">
    <template  v-slot:center>
       <div>GH商城</div>
    </template>
  </navTop>
</template>

<script>
  import navTop from "../../../components/common/navBar/navTop";
  export default {
    name: "navHome",
    components:{
      navTop
    }
  }
</script>

<style scoped>

  #nav-home {
    flex: 1;
  background-color: pink;
  text-align: center;
    color: #ffffff;
}
</style>
