import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    shopCart:[],
  },
  actions:{
    addProduct(context,product){
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.shopCart.find(item => item.iid === product.iid)
        if ( oldProduct  ){
          context.commit('addNum',oldProduct)
          resolve('商品添加成功，数量加1')
        } else{
          context.commit('addNewProduct',product)
          resolve('商品添加成功')
        }
      })

    }
  },
  mutations:{
    addNum(state,product){
      product.num++
      console.log('数量+1');
    },
    subNum(state,product){
      product.num--
      console.log('数量-1');
    },
    addNewProduct(state,product){
      product.num = 1
      product.checked = true
      state.shopCart.push(product)
      console.log('新商品添加成功');
    }
  },
  getters:{
    cartList(state) {
      return state.shopCart
    },
  }

})

export default store
