import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  // 1.创建组件构造器
  //2.new的方式, 根据组件构造器
  const toast = new toastconstructor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));

  //4. 在document上添加 toast， toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  //5.添加全局变量
  Vue.prototype.$toast = toast;
}

export default obj
