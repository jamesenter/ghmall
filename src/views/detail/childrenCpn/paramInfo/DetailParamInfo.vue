<template>
  <div class="detail-param-info" id="detail-param-info"  @click="isShow = true">
    <div class="caption" >参数</div>
    <div class="category"><span  v-for="(info, index) in paramInfo.infos" :key="index">{{info.key}}</span></div>
    <div class="goRight">></div>

    <popup v-model="isShow"
           position="bottom"
           :styles="{height:'60%'}"
    >
      <params-info :param-info="paramInfo"
                   @closeBtn="closeBtn"
      ></params-info>
    </popup>

  </div>
</template>

<script>
  import Popup from "../../../../components/common/popup/Popup";
  // import {Popup } from 'mint-ui'
  import ParamsInfo from "./ParamsInfo";
  import 'mint-ui/lib/style.css'
	export default {
	name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return{
        isShow:false
      }
    },
    components:{
      Popup,
      ParamsInfo
    },
    methods:{
      closeBtn(){
        this.isShow = false
      }
    }
	}
</script>

<style scoped>
  .detail-param-info {
   display: flex;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
  }

  .detail-param-info .caption {
    color: #a3a3a5;
    flex: 1;
  }
  .detail-param-info .category {
    overflow: hidden;

    text-after-overflow:;
    flex: 3;
  }
  .detail-param-info .category span{
    text-overflow: fade;
    margin-left: 5px;
  }
  .detail-param-info .goRight {
    color: #eb4868;
    flex: 1;
  }

</style>
