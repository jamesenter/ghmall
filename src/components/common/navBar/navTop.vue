<template>
  <div class="nav-top">
    <div class="nav-item nav-top-left"><slot name="left"></slot></div>

    <div class=" nav-item nav-top-center"><slot name="center"></slot></div>
      <div class="nav-item nav-top-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navTop"
  }
</script>

<style scoped>
  .nav-top {
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 1px -1px rgba(100 100 100 0.3);
    text-align: center;
  }
.nav-item{
  flex: 1;
}
</style>
