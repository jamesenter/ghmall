<template>
  <div id="app" >
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <nav-bar/>
  </div>
</template>

<script>
import navBar from "./components/content/navBar";

export default {
  name: 'app',
  components: {
    navBar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  @import "assets/css/animate.css";
</style>
