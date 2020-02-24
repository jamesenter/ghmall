<template>
  <div id="detail" >

    <detail-nav class="detail-nav"></detail-nav>
    <tab-control class="tab-control" v-show="isShow" :style="{'opacity':currentAlpha}" :tabs="tabs" @tabClick="tabClick"></tab-control>
    <Scroll class="scroll" ref="scroll" @getPosetion="getPosetion">
      <DetailBanner :banners="banners" ></DetailBanner>
      <DetailBaseInfo :product="product"></DetailBaseInfo>
      <DetailChoose :sku-info = skuInfo  @addToCart="addToCart" ></DetailChoose>
      <DetailParamInfo :param-info="paramInfo"></DetailParamInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @detailImageLoad="detailImageLoad()"></DetailGoodsInfo>
      <DetailCommentInfo :comment-info="commentInfo"></DetailCommentInfo>
    </Scroll>

    <DetailBottomBar class="bottom-bar" ></DetailBottomBar>
  </div>
</template>

<script>
  import {getDetailData,Goods, Shop, GoodsParam} from '../../network/detail'
  import DetailBanner from "./childrenCpn/DetailBanner";
  import DetailBaseInfo from "./childrenCpn/DetailBaseInfo";
  import DetailShopInfo from "./childrenCpn/DetailShopInfo";
  import DetailGoodsInfo from "./childrenCpn/DetailGoodsInfo";
  import DetailChoose from "./childrenCpn/DetailChoose";
  import DetailParamInfo from "./childrenCpn/paramInfo/DetailParamInfo";
  import DetailCommentInfo from "./childrenCpn/DetailCommentInfo";
  import DetailBottomBar from "./childrenCpn/DetailBottomBar";
  import TabControl from "../../components/content/TabControl";


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
        isShow:false,
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        positionY:0,
        currentAlpha:0,
        skuInfo:{
              // 默认商品 sku 缩略图
              "picture": 'http://s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg',
              "productId":"",
              "defaultPrice": "68.00~98.00",
              "priceRange": "68.00~98.00",
              "totalStock": 11117,
              "skus": [
                  {
                      "skuId": "3840845646137",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                      "propPath": "20549:672896046;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646082",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                      "propPath": "20549:152524919;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646087",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                      "propPath": "20549:155046983;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646102",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:55691955;1627207:3861844"
                  },

                  {
                      "skuId": "3840845646127",
                      "price": 100, // 价格（单位分）
                      "stock_num": 11, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:662626362;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646147",
                      "price": 10, // 价格（单位分）
                      "stock_num": 10, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:73406764;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646132",
                      "price": 10, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:662626364;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646077",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:147478970;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646092",
                      "price": 100, // 价格（单位分）
                      "stock_num": 10, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:296172561;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646107",
                      "price": 10, // 价格（单位分）
                      "stock_num": 10, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:59280855;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646142",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:72380707;1627207:3861844"
                  },
                  {
                      "skuId": "3840845646106",
                      "price": 100, // 价格（单位分）
                      "stock_num": 11, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:55691955;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646116",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:662626358;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646121",
                      "price": 100, // 价格（单位分）
                      "stock_num": 11, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:662626359;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646081",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:147478970;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646096",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:296172561;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646111",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",

                      "propPath": "20549:59280855;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646146",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:72380707;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646076",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:103189693;1627207:9848769"
                  },
                  {
                      "skuId": "3840845646140",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",

                      "propPath": "20549:672896046;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646085",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",
                      "propPath": "20549:152524919;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646090",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:155046983;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646105",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:55691955;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646115",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:662626358;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646120",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:662626359;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646095",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:296172561;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646110",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:59280855;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646145",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:72380707;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646075",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:103189693;1627207:454946651"
                  },
                  {
                      "skuId": "3840845646138",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:672896046;1627207:3334600"
                  },
                  {
                      "skuId": "3840845646083",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:152524919;1627207:3334600"
                  },
                  {
                      "skuId": "3840845646088",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:155046983;1627207:3334600"
                  },
                  {
                      "skuId": "3840845646143",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "propPath": "20549:72380707;1627207:3334600"
                  },
                  {
                      "skuId": "3840845646073",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:103189693;1627207:3334600"
                  },
                  {
                      "skuId": "3840845646139",
                      "price": 100, // 价格（单位分）
                      "stock_num": 110, // 当前 sku 组合对应的库存
                      "img":"//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",

                      "propPath": "20549:672896046;1627207:570490570"
                  }
              ],
              "props": [
                  {
                      "pid": "20549",
                      "name": "尺码",
                      "values": [
                          {
                              "vid": "662626360",
                              "name": "29 内长18.5CM"
                          },
                          {
                              "vid": "444706729",
                              "name": "30 内长19.2CM"
                          },
                          {
                              "vid": "662626362",
                              "name": "31 内长19.8CM"
                          },
                          {
                              "vid": "73406764",
                              "name": "32 内长20.5CM"
                          },
                          {
                              "vid": "662626364",
                              "name": "33 内长21.1CM"
                          },
                          {
                              "vid": "147478970",
                              "name": "34 内长21.8CM"
                          },
                          {
                              "vid": "296172561",
                              "name": "35 内长22.5CM"
                          },
                          {
                              "vid": "59280855",
                              "name": "36 内长23.2CM"
                          },
                          {
                              "vid": "72380707",
                              "name": "37 内长23.9CM"
                          },
                          {
                              "vid": "103189693",
                              "name": "38 内长24.6CM"
                          }
                      ]
                  },
                  {
                      "pid": "1627207",
                      "name": "颜色分类",
                      "values": [
                          {
                              "vid": "3861844",
                              "name": "海军蓝",
                              "image": "//img.alicdn.com/imgextra/i4/676005100/TB2o.vtketTMeFjSZFOXXaTiVXa_!!676005100.jpg"
                          },
                          {
                              "vid": "9848769",
                              "name": "彩兰",
                              "image": "//img.alicdn.com/imgextra/i3/676005100/TB2pIXPpNxmpuFjSZFNXXXrRXXa_!!676005100.jpg"
                          },
                          {
                              "vid": "454946651",
                              "name": "灰色/浅蓝色",
                              "image": "//img.alicdn.com/imgextra/i3/676005100/TB2AmMymYBkpuFjy1zkXXbSpFXa_!!676005100.jpg"
                          },
                          {
                              "vid": "3334600",
                              "name": "玫红",
                              "image": "//img.alicdn.com/imgextra/i4/676005100/TB22EANm80kpuFjSsziXXa.oVXa_!!676005100.jpg"
                          },
                          {
                              "vid": "570490570",
                              "name": "桃红（粉色）",
                              "image": "//img.alicdn.com/imgextra/i2/676005100/TB2WbibpH4npuFjSZFmXXXl4FXa_!!676005100.jpg"
                          }
                      ]
                  }
              ]
          },

        tabs: [
          {
            category:'product',
            title:'商品'
          },
          {
            category:'comment',
            title:'评价'
          },
          {
            category:'params',
            title:'详情'
          },
          {
            category:'sell',
            title:'推荐'
          },
        ],
      }
    },
    components:{
      DetailNav,
      DetailBanner,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailChoose,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      TabControl,
      Scroll
    },
    created() {
      this.id = this.$route.query.iid
      this.getDetail()

    },
    computed:{
      getAlpha(){
        this.currentAlpha = this.positionY/250
      }
    },

    methods:{
      getDetail(){
        //获取资源数据
        getDetailData(this.id).then(res => {
          console.log(res);
          // this.skuInfo = res.result.skuInfo;
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
      tabClick(type){
        console.log('获取点击返回函数',type);
      },
      addToCart(p){

        //1.获取购物车所需要的信息
        p.image = this.banners[0];
        p.title = this.product.title;
        p.desc = this.product.desc;
        p.iid = this.id;
        this.$store.dispatch('addProduct',p).then(res =>{
              this.$toast.show(res)
            }
        );
      },
      getPosetion(posetion){
        //控制tab-control 是否吸顶
        this.isShow = (-posetion.y >100)
        if(-posetion.y<250){
          this.currentAlpha = -posetion.y/250
        }else {
          this.currentAlpha = 1
        }

      },
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

  .tab-control{
    position: relative;
    z-index: 9;
    box-shadow: 1px 1px 2px  #ccc;

  }

  .scroll{
    position: absolute;
    top: 44px;
    bottom: 60px;
    overflow: hidden;
  }
</style>
