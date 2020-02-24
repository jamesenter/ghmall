<template>
  <navTop id="detailNav">
    <template  v-slot:left>
      <div class="left" @click="goBack()">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template  class="center" v-slot:center>
      <div  class="center">
        <search
          class="search"
        v-model="keyValue"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        >

        <!--          <div slot="action" @click="onSearch">搜索</div>-->
        <template v-slot:right-icon  >
          <div  class="search-btn">搜索</div>
        </template>
      </search>
      </div>

    </template>
    <template  v-slot:right>
    </template>
  </navTop>

</template>

<script>
  import navTop from "../../../components/common/navBar/navTop"
  import { Button,Search } from 'vant'
  export default {
    name: "DetailNav",
    data(){
      return {
        keyValue: '',
        titles:['商品', '参数', '评论', '推荐'],
        isActive:false,
        currentItem:'商品',
      }
    },
    components:{
      navTop,
      Search,
    },
    methods:{
      goBack(){
        this.$router.back()
      },
      itemClick(item){
        console.log(item);
        this.currentItem = item
      },
      onSearch(){
        console.log('搜索');
      }
    }

  }
</script>

<style scoped>
  #detailNav{

  }
  .search{
    padding: 5px 12px;
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

  .search-btn{
    width: 50px;
    height: 100%;
    text-align: center;
    background-color: #eb4868;
    color: #ffffff;
    border-radius: 17px;

  }

</style>
