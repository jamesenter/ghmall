<template>
  <div id="shop-item"  >
    <!-- <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" v-model="itemInfo.checked"></CheckButton>
    </div>  -->
    <div class="item-selector">
      <check-button @checkBtnClick= "checkedChange">
      </check-button>
    </div>
    <div class="item-img">
      <img :src="showImage" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title" @click="goToDetail()">{{itemInfo.title}}</div>
      <div class="item-skuText">{{itemInfo.skuText}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.sku.price}}</div>
        <div class="item-count right"><button id="num-sub"  :disabled="itemInfo.num <2"  @click="numSub()">-</button>{{itemInfo.num}}<button id="num-add" @click="numAdd()">+</button></div>
      </div>
    </div>
    <!-- <div><h2>{{itemInfo}}</h2></div> -->
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/checkButton/CheckButton';

  export default {
    name: "ShopCartItem",
    props: {
      itemInfo: Object,
      default(){
        return {}
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkedChange(checked) {
        this.itemInfo.checked = checked;
      },
      numAdd(){
        this.$store.commit('addNum',this.itemInfo)
      },
      numSub(){
        this.$store.commit('subNum',this.itemInfo)
      },
      goToDetail(){
          this.$router.push({
              path:'/detail',
              query:{
                  iid: this.itemInfo.iid
              }
          } );
      }
    },
    computed:{
      showImage(){
          return "http:" + this.itemInfo.sku.img;
      }
  },
  }
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-skuText {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
   }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-skuText {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .item-count button{
    margin: 0px 15px;
  }
</style>
