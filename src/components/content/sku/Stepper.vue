<template>
  <div class="sku-stepper-stock" >
    <div class="sku-stepper-container">
      <div class="sku__stepper-title">购买数量</div>
      <div class="stepper sku__stepper">
        <button type="button"
                class="stepper__minus "
                :class="{'stepper__minus--disabled':initminusDisabled()}"
                @click="countMinus"
        >-</button>
        <input type="number"
               readonly
               v-model="selectedCount"
               aria-valuemax="15"
               class="stepper__input">
        <button type="button"
                class="stepper__plus"
                :class="{'stepper__plus--disabled':initplusDisabled()}"
                @click="countPlus"
        >+</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Stepper",
        props:{
          sku:{
              type:Object
          },
          limitCount:{
              type: Number,
              default:10
          }
        },
        data(){
            return{
                selectedCount:1,
            }
        },
        computed:{
            initCount(){
                if(this.sku && this.selectedCount > this.sku.stock_num ){
                    this.selectedCount = this.sku.stock_num
                }
            }
        },
        watch:{
            sku: function () {
                this.initCount
                this.$emit("getselectedCount",this.selectedCount)
            }
        },
        methods:{
            initplusDisabled(){
                if(this.sku ){
                    return (this.selectedCount >= this.sku.stock_num) && (this.selectedCount >= this.limitCount)
                }
                return false
            },
            initminusDisabled(){
                return this.selectedCount <= 1
            },
            countMinus(){
                this.selectedCount--

            },
            countPlus(){
                this.selectedCount++
            }
        }
    }
</script>

<style scoped>
  .sku-stepper-stock {
    margin-left: 16px;
    padding: 12px 0;
  }
  .sku-stepper-container {
    min-height: 30px;
    margin-right: 20px;
    overflow: hidden;
  }
  .sku__stepper-title {
    float: left;
    line-height: 30px;
  }
  .sku__stepper {
    float: right;
    padding-left: 4px;
  }
x
  .stepper__minus, .stepper__plus {
    position: relative;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 4px;
    color: #323233;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    cursor: pointer;
  }

  .stepper__minus, .stepper__plus {
    position: relative;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 4px;
    color: #323233;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    cursor: pointer;
  }
  .stepper__minus {
    border-radius: 4px 0 0 4px;
  }
  .stepper__plus {
    border-radius: 0 4px 4px 0;
  }
  .stepper__minus--disabled, .stepper__plus--disabled {
    color: #cccccc;
    background-color: #f7f8fa;
    cursor: not-allowed;
    pointer-events:none;
  }

  .stepper__input {
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;
  }
</style>
