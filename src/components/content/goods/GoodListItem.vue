<template>
<div class="good-list-item" @click="goToDetail()">
  <img :src="product.show.img"  @load="imgLoad()" alt="">
  <div class="good-info">
    <p class="good-info-title">{{product.title}}</p>
    <div class="good-info-option">
      <span class="good-info-option-price">{{product.price}}</span>
      <span class="good-info-option-collect">{{product.cfav}}</span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "GoodList",
    props:{
      product:{
        type:Object,
        required:true
      }
    },
    created(){
      // console.log(this.product);
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      goToDetail(){
        this.$router.push({
          path:'/detail',
          query:{
            iid: this.product.iid
          }
        } );
      }
    }
  }
</script>

<style scoped>
  .good-list-item {
    padding-bottom: 40px;
    position: relative;

    width: 46%;
  }

  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .good-info-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .good-info-option-price {
    color: #FF5777;
    margin-right: 20px;
  }

  .good-info-option-collect {
    position: relative;
  }

  .good-info-option-collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
