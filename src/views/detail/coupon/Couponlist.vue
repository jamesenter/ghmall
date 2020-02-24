<template>
  <div class="coupon-list">
    <div class="title">
      <h4>当前优惠</h4>
    </div>
    <CouponItem class="coupon-item"></CouponItem>
    <CouponItem class="coupon-item"></CouponItem>
    <CouponItem class="coupon-item"></CouponItem>
    <div class="closeBtn" @click="closeBtn()">关闭</div>
  </div>
</template>

<script>
  import CouponItem from "./CouponItem";
  export default {
    name: "Couponlist",
    props:{

    },
    components:{
      CouponItem,
    },
    methods:{
      closeBtn(){
        this.$emit('closeBtn')
      }
    }

  }
</script>

<style scoped>
  coupon-list{
    text-align: center;
  }
  .title{
    text-align: center;
    margin: 20px 0px;
    color: #eb4868;
  }
  .coupon-item{
    margin: 10px;
    border-radius: 10px;
  }
  .closeBtn{
    background: #eb4868;
    color: #ffffff;
    width: 80%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    margin: auto;
  }

</style>
