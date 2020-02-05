<template>
<div >
  <swiper class="home-banner">
    <swiper-item v-for="(banner,index) in banners" :key="index" >
      <a :href="banner.link"><img :src="banner.image" @load="imgLoad" alt=""></a>
    </swiper-item>
  </swiper>
</div>

</template>

<script>
   import {Swiper,SwiperItem} from "../../../components/common/swiper";

  export default {
    name: "HomeBanner",
    props:{
      banners:{
        type:Array,
        required:true,
        default: [],
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('imgIsLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>
<style scoped>
  .home-banner{
  }

</style>
