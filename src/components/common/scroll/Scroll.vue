<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scorll",
    data(){
      return{
        scroll:null


      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,
          {
            pullUpLoad:true,
            click:true,
            probeType:3,
            pullDownRefresh:true,
          })
          this.scroll.on('scroll',(posetion)=>{
            // console.log(posetion);
            this.$emit('getPosetion',posetion)

          })
          this.scroll.on('pullingUp',()=>{
            console.log('上拉加载更多数据');
            this.$emit('getNextdata')
          })
          this.scroll.on('PullingDown',()=>{
            console.log('下拉刷新');
            this.$emit('pullDownRefresh')
          })
    },
    methods:{
      backTop(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll && this.scroll.refresh();
      },
      finishPullDown(){
        this.scroll.finishPullDown()
      }
    }
  }
</script>

<style scoped>

</style>
