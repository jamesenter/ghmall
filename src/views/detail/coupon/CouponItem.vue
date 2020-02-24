<template>
  <div class="coupon-item">
    <div class="discount">
      <div class="category">{{coupon.category}}</div>

      <h1><span><img src="~assets/img/common/money.svg" alt=""></span>{{coupon.discount}}</h1>
    </div>
    <div class="rules">
      <div class="rule">{{coupon.rules}}</div>
      <div class="indate">{{coupon.indate}}</div>
    </div>
    <div class="getCoupon">立即领取</div>
  </div>
</template>

<script>
  export default {
    name: "CouponItem",
    props:{
      coupon:{
        type:Object,
        default:{
          couponId:'123',
          category:'店铺优惠券',
          discount:  20,
          rules: "满300使用",
          indate: "2020.02.10-2020.02.31",
        }
      }
    }
  }
</script>

<style scoped>
  .coupon-item{
    height: 75px;
    display: flex;
    color: #eb4868;
    background: rgba(255,192,203 ,0.2);
  }

  .discount{
    position: relative;
    flex: 1;
    text-align: center;
  }
  .discount img{
    width: 15px;
  }
  .discount h1{
    margin-top: 30px;
  }
  .category{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10px;
    background-color: rgba(255,192,203 ,0.8);
    border-radius: 10px 0px;
    padding: 5px 12px;
  }
  .rules{
    flex: 2;
    float: left;
    vertical-align: middle;
    margin: auto;
  }

  .rules .indate{
    font-size: 12px;
  }
  .getCoupon{
    height: 40px;
    line-height: 38px;
    text-align: center;
    border-left: 1px dashed #eb4868;
    flex: 1;
    margin: auto;


  }
</style>
