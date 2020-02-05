<template>
  <div id="home-recommend" >
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default:[],
      }
    }
  }

</script>

<style scoped>
  #home-recommend{
    display: flex;
    box-shadow: 0px 2px 1px rgba(100, 100, 100, 0.1);
  }
  .recommend-item{
    margin: 15px 0px 5px 0px;
    text-align: center;
    flex: 1;
  }
  .recommend-item img{
    width: 80%;
    /*max-width: 100%;*/
  }
</style>
