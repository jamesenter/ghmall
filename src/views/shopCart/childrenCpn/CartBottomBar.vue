<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" :isChecked="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计:{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">去付款({{checkLength}})</span>
  </div>

  <!-- <div class="bottom-menu">
    <div class="check-content">
        <check-button class="check-button" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></check-button>
        <span>全选</span>
    </div>
    <div class="price">
        <span class="total-price">合计:{{totalPrice}}</span>
    </div>
    <div class="calculate">
        <span class="buy-product">去计算({{checkLength}})</span>
    </div>

  </div> -->
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

import { mapGetters } from 'vuex';

export default {
  name: 'CartBottomBar',
  data() {
    return {

    }
  },
  components:{
      CheckButton
  },
  methods:{
      checkBtnClick(){
          // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择要购买的商品');
        }
      }
  },
  computed:{
      ...mapGetters(['cartList']),
      totalPrice(){

        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.num * item.sku.price
        }, 0).toFixed(2)
      },
      isSelectAll(){
        return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
      },
      checkLength(){

          return this.cartList.filter(item => item.checked).length;
      }
  }
 }
</script>

<style scoped>
  /* .bottom-menu{
    width: 100%;
    position: fixed;
    bottom: 50px;
    background-color: #eee;
    display: flex;

    height: 40px;
    line-height: 40px;
  }

  .check-content{
      display: flex;
      align-items: center;
      margin-left: 10px;
  }
  .check-button {
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 5px;
  }
  .price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  } */


  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
