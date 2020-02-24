<template>
    <div class="sku">
      <sku-hearder
        :sku-info="skuInfo"
        :sku="getSkuBySelectedSku()"
        :sku-text="skuText"
      />
      <div class="sku-body" >
        <div class="sku-group-container">
          <fence  v-for="item in skuInfo.props"
                  :fence="item"
                  :key="item.pid"
                  :all-sku="allSku"
                  :seletedSku = "seletedSku"
                  @changeSelectedSku="changeSelectedSku"
          />
        </div>
        <div class="">
          <Stepper
            :sku="getSkuBySelectedSku()"
            @getSelectedCount="getSelectedCount"
          />
        </div>
      </div>
      <div class="sku-actions">
        <button class="button button--warning button--large" @click="addToCart"><span class="button__text">加入购物车</span>
        </button>
        <button class="button button--danger button--large"><span class="button__text">立即购买</span>
        </button>
      </div>
    </div>
</template>

<script>
  import Header from "./Header"
  import Fence from "./Fence";
  import Stepper from "./Stepper";

  import {getAllSku,seletedSku2propPath} from "./skuHelper";

  export default {
      name: "Sku",
      components:{
          "skuHearder":Header,
          Fence,
          Stepper,
      },
      props:{
          skuInfo:Object
      },
      data(){
          return{
              seletedSku:{},
              allSku:[],
              skuText:"",
              selectedCount:0,
          }
      },
      created(){
          this.initData()
      },
      watch:{
          seletedSku: function () {
              this.getSkuText()
          }
      },
      computed:{

    },
      methods:{
          initData(){
              this.initSeletdSku()
              this.initAllSku()
              this.getSkuText()
          },
          initSeletdSku(){

              this.skuInfo.props.forEach((item) =>{
                  this.seletedSku[item.pid] = ""
              })
          },
          initAllSku(){
              //先过滤掉 库存为0的sku
              this.skuInfo.skus.filter( item =>{
                  return item.stock_num > 0
              })
              //在获取所有潜在sku
              this.allSku = getAllSku(this.skuInfo.skus)
          },
          getSkuText(){
              let optText = []
              let chooseText = []
              for( let key in this.seletedSku){
                  let val = this.seletedSku[key]
                  if(val){
                      chooseText.push(val.name)
                  }else{
                      optText.push(this.skuInfo.props.find( item => {
                          return item.pid === key
                      }).name)
                  }
              }
              this.skuText = (optText.length > 0 ? "选择："+optText.toString() : "已选："+chooseText.toString())
              this.$emit("changeSkuText",this.skuText)
          },
          changeSelectedSku(pid,cell){
              this.seletedSku[pid] = cell // 直接替换数组元素，dom不会更新，建议使用set方法
              this.seletedSku = Object.assign({}, this.seletedSku)//针对对象值的改变，需要用原对象与要混合进去的对象的属性一起创建一个新的对象。
          },
          getSkuBySelectedSku(){
              return this.skuInfo.skus.find( item => {
                 return  item.propPath === seletedSku2propPath(this.seletedSku)
              })
          },
          getSelectedCount(selectedCount){
            this.selectedCount = selectedCount
          },
          addToCart(){
              //1.获取购物车所需要的信息

              const p = {};
              p.skuText = this.skuText
              p.sku = this.getSkuBySelectedSku()
              p.num =  this.selectedCount
              if(p.sku){
                  this.$emit("addToCart",p)
              }else{
                  this.$toast.show("请选择商品属性!")
              }
          }


      },


    }
</script>

<style scoped>
  .sku{
  }
  /*sku-body*/
  .sku-body {
    width: 100%;
    max-height:290px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 44px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .sku-group-container {
    margin-left: 16px;
    padding: 12px 0 2px;
  }

  /*action*/
  .sku-actions {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    padding: 8px 16px;
  }
  .button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
  }
  .button::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }
  .button--warning {
    color: #fff;
    background-color: #ff976a;
    border: 1px solid #ff976a;
  }
  .button--danger {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  .button--large {
    width: 100%;
    height: 50px;
    line-height: 48px;
  }
  .sku-actions .button {
    height: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 34px;
    border: none;
    border-radius: 0;
  }

  .sku-actions .button--warning {
    background: -webkit-linear-gradient(left, #ffd01e, #ff8917);
    background: linear-gradient(to right, #ffd01e, #ff8917);
  }
  .sku-actions .button--danger {
    background: -webkit-linear-gradient(left, #ff6034, #ee0a24);
    background: linear-gradient(to right, #ff6034, #ee0a24);
  }
  .sku-actions .button:first-of-type {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .sku-actions .button:last-of-type {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
</style>
