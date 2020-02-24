import Popup from "./Popup";
import obj from "../toast";

const popup ={}

popup.install = function(Vue){
  //1.创建组件构造器
  const popupConstrustor = Vue.extend(Popup);
  //2.new的方式, 根据组件构造器
  const popup = new popupConstrustor()
  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));

  //4. 在document上添加 toast， toast.$el对应的就是div
  document.body.appendChild(popup.$el);
  //5.添加全局变量
  Vue.prototype.$toast = popup;
}

export default obj
