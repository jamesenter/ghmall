<template>
  <div class="sku-header ">
    <div class="sku-header__img-wrap">
      <img :src="skuInfo.picture"/>
    </div>
    <div class="sku-header__goods-info">
      <div class="sku__goods-price"><span class="sku__price-symbol">￥</span><span
        class="sku__price-num">{{skuInfo.defaultPrice}}</span></div>
      <div class="sku-header-item"><span class="sku__stock">剩余 <span class="sku__stock-num">{{skuInfo.totalStock}}</span> 件</span>
      </div>
      <div class="sku-header-item">{{skuText}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            skuInfo:{
                type:Object
            },
            sku:{
                type:Object
            },
            skuText:String
        },
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style scoped>
  .sku-header {
    position: relative;
    margin-left: 16px;
  }
  .sku-header__img-wrap {
    position: relative;
    float: left;
    width: 96px;
    height: 96px;
    margin: 12px 0;
    overflow: hidden;
    background: #f7f8fa;
    border-radius: 4px;
  }
  .sku-header__img-wrap img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
  .sku-header__goods-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    min-height: 96px;
    padding: 12px 36px 12px 8px;
    overflow: hidden;
  }
  .sku__goods-price {
    color: #ee0a24;
  }
  .sku__price-symbol {
    font-size: 16px;
    vertical-align: middle;
  }
  .sku__price-num {
    font-weight: 500;
    font-size: 22px;
    vertical-align: middle;
    word-wrap: break-word;
  }
  .sku-header-item {
    margin-top: 8px;
    color: #969799;
    font-size: 12px;
    line-height: 16px;
  }
  .sku__stock {
    display: inline-block;
    margin-right: 8px;
    color: #969799;
    font-size: 12px;
  }
  .sku-header-item {
    margin-top: 8px;
    color: #969799;
    font-size: 12px;
    line-height: 16px;
  }

</style>
