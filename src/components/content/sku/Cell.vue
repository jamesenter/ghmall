<template>
    <div class="cell"
         :class="[
         {'cell-active':isActive },
         {'cell-disabled':isDisable },
         ]"
         @click="cellClick()">
      <img  v-if="hasImg" class="cell-img" :src="prop.image" alt="">
      <span class="cell-name">{{prop.name}}</span>
    </div>
</template>

<script>
    export default {
        name: "specItem",
        props:{
          prop:{
              type:Object
          },
          allSku:{
              type:Array,
              default: []
          },
          pid:{
              type:String
          },
          seletedSku:{
              type:Object
          },
        },
        data(){
          return {
            vid:this.prop.vid,
          }
        },
        computed:{
          isActive(){
              return (this.vid === this.seletedSku[this.pid].vid)
          },
          hasImg(){
              return this.prop.image? true : false
          },
          isDisable(){

              return  !this.allSku.some( val =>{
                  return val === this.getMySku
              })
          },
          getMySku(){
              let mySku = [];
              //自己和其他fence内已选的cell 来确认自己的sku
              for( let k in this.seletedSku){
                  let cell = this.seletedSku[k]
                  if(k === this.pid ){
                      //当前行设为本cell的prop
                      mySku.push(k+":"+this.vid)
                  }else{
                      // 获取其他行已选cell
                      if(cell)   mySku.push(k+":"+cell.vid)
                  }
              }
              return mySku.flat().join(";")
          },

        },
        methods:{
            cellClick(){

                if(this.vid === this.seletedSku[this.pid].vid){
                    this.$emit("cellClike",this.pid,"")
                }else {
                    this.$emit("cellClike",this.pid,this.prop)
                }
            },

        }
    }
</script>

<style scoped>
  .cell{
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    min-width: 40px;
    margin: 0 12px 12px 0;
    overflow: hidden;
    color: #323233;
    font-size: 13px;
    line-height: 16px;
    vertical-align: middle;
    border-radius: 4px;
    cursor: pointer;
  }
  .cell::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f7f8fa;
    content: '';
  }
  .cell-name{
    z-index: 1;
    padding: 8px
  }
  .cell-img{
    z-index: 1;
    width: 24px;
    height: 24px;
    margin: 4px 0 4px 4px;
    object-fit: cover;
    border-radius: 2px;
  }
  .cell-active{
    color: #ee0a24;
  }
  .cell-active::before{
    background: currentColor;
    opacity: 0.1;
  }
  .cell-disabled{
    pointer-events: none;
    color: #c8c9cc;
    background: #f2f3f5;
    cursor: not-allowed;
  }
</style>
