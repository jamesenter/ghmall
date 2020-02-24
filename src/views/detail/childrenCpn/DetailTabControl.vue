<template>
  <div id="detail-tab-control">
    <tab-control tabs="titles">

    </tab-control>
  </div>
</template>

<script>
  import TabControl from "../../../components/content/TabControl";
  export default {
    name: "DetailTabControl",
    titles:['商品', '参数', '评论', '推荐'],
    components:{
      TabControl,
  }
  }
</script>

<style scoped>

</style>
