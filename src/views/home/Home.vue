<template>
    <div id="home">
      <navHome></navHome>
      <tabControl :class="{'tab-tabControlHold':tabControlHold}"  v-show="tabControlHold" :tabs="tabs" @tabClick="tabClick"  ref="tabControl2"></tabControl>
      <scroll class="content" @getNextdata="getNextdata" ref="scroll" @getPosetion="getPosetion">
          <homeBanner :banners="banners" @imgIsLoad="imgIsLoad"></homeBanner>
          <homeRecommend :recommends="recommends"></homeRecommend>
          <tabControl class="tab-control" :tabs="tabs" @tabClick="tabClick" ref="tabControl1"></tabControl>
          <goodList :product-list="goods[currentType].list"></goodList>
      </scroll>
      <backTop @click.native="backClick()" v-show="isShowBackTop" ></backTop>
    </div>
</template>
<script>
  import navHome from "./childComponents/navHome";
  import TabControl from "../../components/content/TabControl";
  import GoodList from "../../components/content/goods/GoodList";
  import BackTop from "../../components/content/backTop/BackTop";



  import HomeBanner from "./childComponents/HomeBanner";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import Scroll from "../../components/common/scroll/Scroll";


  import  {getHomeMultidata,getHomeGoods} from "../../network/home";
  import {debounce} from "../../common/utils";

  export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommends: [],
        tabs: [
            {
              type:'pop',
              title:'流行'
            },
          {
            type:'new',
            title:'新品'
          },
          {
            type:'sell',
            title:'精选'
          },
        ],
        currentType:'pop',
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        isShowBackTop:false,
        tabControlHeight:0,
        tabControlHold: false,
        deActivePosetion:0,
      }
    },
    components: {
      navHome,
      TabControl,
      GoodList,
      BackTop,
      HomeBanner,
      HomeRecommend,
      Scroll,

    },
    created() {
      //1.请求多个数据
      this.getMultidata()
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

    },
    activated(){
      this.$refs.scroll.backTop(0,this.deActivePosetion,0)

    },
    deactivated(){
      //记录离开时，滑动位置
      this.deActivePosetion = this.$refs.scroll.scroll.y
    },
    mounted(){
      // 2.防抖，防止函数短时间内多次重复调用
      // const refresh = debounce(this.$refs.scroll.refresh(),200)
      // //3.监听item中图片加载完成,/尽量在created中监听，否则可能监听不到，来自其他created内触发的事件。
      this.$bus.$on('itemImageLoad', () => {
        // console.log(refresh);
        this.$refs.scroll && this.$refs.scroll.refresh()
        // refresh();
      })
    },


    destroyed(){
      // 调用完bus后，注销$bus
      // this.$bus.off('itemImageLoad')
    },
    computed:{

    },
    methods: {

      getMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getGoods(type){
        let page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list = res.data.list.concat(this.goods[type].list)
          this.goods[type].page++
        })
      },
      backClick(){
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        // 封装scrollTo方法
        this.$refs.scroll.backTop(0,0,500)
      },

      /**
       * 事件监听相关的方法
       */
      tabClick(type){
        this.currentType = type
        //切换标签时，列表定位变化、
        if(this.$refs.scroll.scroll.y<(-this.tabControlHeight)){
          this.$refs.scroll.backTop(0,-this.tabControlHeight,0)
        }
        //使两相同 tabcontrol组件变量一致
        this.$refs.tabControl1.currentType = type
        this.$refs.tabControl2.currentType = type
      },
      getNextdata(){
        this.getGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
      },

      getPosetion(posetion){
        this.isShowBackTop = ((-posetion.y)> 1000)
        //控制tab-control 是否吸顶
        this.tabControlHold = ((-posetion.y)> this.tabControlHeight)


      },
      imgIsLoad(){

        this.tabControlHeight = this.$refs.tabControl1.$el.offsetTop
        console.log(this.tabControlHeight);
      }
    },

  }
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
.content{
  /*//使用定位选择中间部分*/
  position: absolute;
  left: 0;
  right: 0;
  top:44px ;
  bottom:49px;
  overflow: hidden;

}
</style>
