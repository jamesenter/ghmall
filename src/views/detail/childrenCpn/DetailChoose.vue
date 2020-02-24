<template>
    <div class="detail-choose" @click="openPopup()">
      <div class="left" >选择</div>
      <div class="center"><span>{{skuText}}</span></div>
      <div class="goRight">></div>

      <popup v-model="isShow"
             position="bottom"
             :styles="{height:'70%'}"
             :closeable="true"
      >
        <Sku
          :sku-info="skuInfo"
          @addToCart="addToCart"
        />
      </popup>
    </div>
</template>

<script>
  import Sku from "../../../components/content/sku/Sku";
  import Popup from "../../../components/common/popup/Popup";
    export default {
        name: "DetailChoose",
        props:{
            skuInfo:Object
        },
        data(){
            return{
                isShow:false,
                skuText:String
            }
        },
        components:{
            Popup,
            Sku
        },
        created(){
            this.initSkuText()
        },
        methods:{
            initSkuText(){
                let optText = []
              this.skuInfo.props.forEach( item => {
                  optText.push(item.name)
              })
                this.skuText = ("选择 "+ optText.join(","))
            },
            changeSkuText(skuText){
                console.log(skuText);
                this.skuText = skuText
            },
            addToCart(p){
              this.$emit("addToCart",p)
                this.closePopup()
            },
            openPopup(){
                this.isShow = true
                console.log(this.isShow);

            },
            closePopup(){
                this.isShow = false
            },

        }
    }
</script>

<style scoped>
.detail-choose{
  display: flex;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
}
.detail-choose .left {
  color: #a3a3a5;
  flex: 1;
}
.detail-choose .center {
  overflow: hidden;

  text-after-overflow:;
  flex: 3;
}
.detail-choose .center span{
  text-overflow: fade;
  margin-left: 5px;
}
.detail-choose .goRight {
  color: #eb4868;
  flex: 1;
}
</style>
