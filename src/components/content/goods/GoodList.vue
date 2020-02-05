<template>
  <div class="good-list">
    <GoodListItem v-for="item in productList" :product="item" >
    </GoodListItem>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";

  export default {
    name: "GoodList",
    props:{
      productList:{
        type:Array,
        default: {}
      }
    },
    components:{
      GoodListItem,
    }
  }
</script>

<style>
  .good-list{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
