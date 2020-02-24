<template>
  <div class="search">
      <input v-model="keyWord" placeholder="请输入搜索关键字"/>
      <div class="search-btn" @click="toSearch()">搜索</div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data(){
      return {
        keyWord:String,
      }
    },
    methods:{
      toSearch(){
        this.$emit("toSearch",this.keyWord)
      }
    }
  }
</script>

<style scoped>


</style>
