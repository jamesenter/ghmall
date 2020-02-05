<template>
    <swiper class="detailBanner">
      <swiper-item v-for="(item,index) in banners" :key="index" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper";
  export default {
    name: "DetailBanner",
    props:{
      banners:{},
    },
    components:{
      SwiperItem,
      Swiper
    }
  }
</script>

<style scoped>
.detailBanner{
  height: 250px;
  overflow: hidden;
}

</style>
