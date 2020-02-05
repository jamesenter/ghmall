<template>
  <navTop id="detailNav">
    <template  v-slot:left>
      <div class="left" @click="goBack()">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template  class="center" v-slot:center>
      <div  class="center">
        <div v-for="item in titles"
             @click="itemClick(item)"
             class="content"
             :class="{active: (item == currentItem) }">
          <div >{{item}}</div>
        </div>
      </div>

    </template>
    <template  v-slot:right>
    </template>
  </navTop>

</template>

<script>
  import navTop from "../../../components/common/navBar/navTop";
  export default {
    name: "DetailNav",
    data(){
      return {
        titles:['商品', '参数', '评论', '推荐'],
        isActive:false,
        currentItem:'商品',
      }
    },
    components:{
      navTop,
    },
    methods:{
      goBack(){
        this.$router.back()
      },
      itemClick(item){
        console.log(item);
        this.currentItem = item
      }
    }

  }
</script>

<style scoped>
  #detailNav{

  }
  .center{
    width: 300px;
    display: flex;
  }
  .content{
    flex: 1;
  }
.left{
  width: 50px;
  margin-top: 5px;
}
  .active{
    color: #eb4868;
  }

</style>
