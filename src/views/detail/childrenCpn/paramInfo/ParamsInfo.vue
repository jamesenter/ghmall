<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">

    <div class="title">
      <h4>当前优惠</h4>
    </div>
    <Scroll class="scroll" >
        <table v-for="(table, index) in paramInfo.sizes"
               class="info-size" :key="index">
          <tr v-for="(tr, indey) in table" :key="indey">
            <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
          </tr>
        </table>
        <table class="info-param">
          <tr v-for="(info, index) in paramInfo.infos" :key="index">
            <td class="info-param-key">{{info.key}}</td>
            <td class="param-value">{{info.value}}</td>
          </tr>
        </table>
        <div class="info-img" v-if="paramInfo.image.length !== 0">
          <img :src="paramInfo.image" alt="">
        </div>
    </Scroll>
    <div class="closeBtn" @click="closeBtn()">关闭</div>
  </div>
</template>

<script>
  import Scroll from "../../../../components/common/scroll/Scroll";
  export default {
    name: "ParamsInfo",
    props:{
      paramInfo:{
        type:Object,
        default:{}
      }
    },

    components:{
      Scroll
    },
    methods:{
      closeBtn(){
        this.$emit('closeBtn')
      }
    }
  }
</script>

<style scoped>
  .param-info {
    position: relative;
    height: 100%;
    padding: 5px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .scroll{
    position: absolute;
    top: 44px;
    bottom: 50px;
    overflow: hidden;
  }
  .title{
    top: 0;
    text-align: center;
    margin: 10px 0px;
    color: #eb4868;
  }


  .param-info table {
    width: 100%;

    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
  .closeBtn{
    position: absolute;
    bottom: 0px;
    background: #eb4868;
    color: #ffffff;
    width: 80%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    margin: 10px 20px;
  }
</style>
