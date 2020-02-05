<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <Scroll class="scroll" ref="scroll">
      <DetailBanner :banners="banners" ></DetailBanner>
      <DetailBaseInfo :product="product"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailParamInfo :param-info="paramInfo"></DetailParamInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @detailImageLoad="detailImageLoad()"></DetailGoodsInfo>
      <DetailCommentInfo :comment-info="commentInfo"></DetailCommentInfo>
    </Scroll>
    <DetailBottomBar class="bottom-bar" @addToCart="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
  import {getDetailData,Goods, Shop, GoodsParam} from '../../network/detail'
  import DetailBanner from "./childrenCpn/DetailBanner";
  import DetailBaseInfo from "./childrenCpn/DetailBaseInfo";
  import DetailShopInfo from "./childrenCpn/DetailShopInfo";
  import DetailGoodsInfo from "./childrenCpn/DetailGoodsInfo";
  import DetailParamInfo from "./childrenCpn/DetailParamInfo";
  import DetailCommentInfo from "./childrenCpn/DetailCommentInfo";
  import DetailBottomBar from "./childrenCpn/DetailBottomBar";

  import DetailNav from "./childrenCpn/DetailNav";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Detail",
    data(){
      return{
        id:null,
        banners:Array,
        product:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
      }
    },
    components:{
      DetailNav,
      DetailBanner,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll
    },
    created() {
      this.id = this.$route.query.iid
      this.getDetail()
    },

    methods:{
      getDetail(){
        //获取资源数据
        getDetailData(this.id).then(res => {
          this.banners = res.result.itemInfo.topImages

          //获取商品信息
          this.product = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);

          //获取店铺信息
          this.shop = new Shop(res.result.shopInfo);

          //获取商品详细信息
          this.detailInfo = res.result.detailInfo;

          //获取店铺商品信息
          this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
          //
          // //获取评论信息
          if(res.result.rate.cRate !== 0){
            this.commentInfo = res.result.rate.list[0];
          }


        })
      },
      detailImageLoad(){
        this.$refs.scroll.refresh()
      },
      addToCart(){

        //1.获取购物车所需要的信息
        const p = {};
        p.image = this.banners[0];
        p.title = this.product.title;
        p.desc = this.product.desc;
        p.price = this.product.realPrice;
        p.iid = this.id;
        // this.$store.commit('addProduct',p);
        this.$store.dispatch('addProduct',p).then(res =>{
              this.$toast.show(res)
            }
        );
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .scroll{
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
</style>
