<template>
  <div >
<!--    遮罩层-->
    <transition name="gh-fade" >
      <div   class="gh-overlay "
             v-show="isShow"
             ref="overlay"
             @click="changShowStat(false)"
             style="z-index: 2019;"
             :style="overlayStyle">
      </div>
    </transition>
    <!--    内容层-->
    <transition :name="'gh-slide-'+position">
       <div  class="gh-popup "
             v-show="isShow"
             ref="popup"
            :class="[
              getPosition,
              {'gh-popup--round':round}
            ]"
            style="z-index:2020"
            :style="styles">
        <slot></slot>
        <i  v-if="closeable"
            z-index="10"
            @click="changShowStat(false)"
            tabindex="0"
            :class="{
              'gh-icon-cross': closeable && !closeIcon ,
            }"
           class="gh-icon  gh-popup__close-icon gh-popup__close-icon--top-right">
          <img v-if="closeIcon" class="gh-icon__image" :src="closeIcon" alt="">
        </i>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Popup",
    props:{
      value:Boolean,
      overlay:{
        type:Boolean,
        default:true
      },
      overlayStyle:{
        type:Object
      },
      styles:{
        type:Object
      },
      position:{
        type:String
      },
      closeable:{
        type:Boolean,
        default:false
      },
      closeIcon:{
        type:String
      },
      round:{
        type:Boolean,
        default:false
      },
    },
    data(){
      return{
        isShow:this.value
      }
    },
    mounted(){
        this.$nextTick(() => {
            const body = document.querySelector("body");
            if (body.append) {
                body.append(this.$el);
            } else {
                body.appendChild(this.$el);
            }
        });
    },
    beforeUpdate(){
    },

  computed:{
        getPosition(){
            return 'gh-popup--'+this.position
        },
    },
    watch: {
      //  监听value的值更新
      value(val) {
          this.isShow = val;
      }
    },
    methods:{
      changShowStat(val){
              this.$emit('input',false)
      },

    },
  }
</script>

<style scoped>

  .gh-overflow-hidden {
    overflow: hidden !important;
  }

  .gh-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    animation-duration: 0.5s;
  }
  .gh-popup {
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    background-color: #fff;
  }
  .gh-popup--center {
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }
  .gh-popup--top {
    top: 0;
    left: 0;
    width: 100%;
  }
  .gh-popup--bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .gh-popup--left {
    top: 50%;
    left: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
  .gh-popup--right {
    top: 50%;
    right: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
  .gh-icon {
    position: relative;
    display: inline-block;
    font: normal normal normal 14px/1 ght-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
  .gh-popup__close-icon {
    position: absolute;
    z-index: 1;
    color: #c8c9cc;
    font-size: 22px;
    cursor: pointer;
  }
  .gh-popup__close-icon--top-right {
    top: 16px;
    right: 16px;
  }
  .gh-icon-cross::before {
    content: "\2716";
  }
  .gh-icon__image {
    width: 1em;
    height: 1em;
    object-fit: contain;
  }
  .gh-icon::before {
    display: inline-block;
  }
  .gh-popup--round {
    border-radius: 20px 20px 0 0;
  }

/* 内容css start*/

  @-webkit-keyframes gh-slide-bottom-enter {
    from {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
  @keyframes gh-slide-bottom-enter {
    from {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
  @-webkit-keyframes gh-slide-bottom-leave {
    to {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
  @keyframes gh-slide-bottom-leave {
    to {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
  @-webkit-keyframes gh-slide-top-enter {
    from {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  @keyframes gh-slide-top-enter {
    from {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  @-webkit-keyframes gh-slide-top-leave {
    to {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  @keyframes gh-slide-top-leave {
    to {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  @-webkit-keyframes gh-slide-left-enter {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes gh-slide-left-enter {
    from {
      -webkit-transform: translate3d(-100%, -50%, 0);
      transform: translate3d(-100%, -50%, 0);
    }
  }
  @-webkit-keyframes gh-slide-left-leave {
    to {
      -webkit-transform: translate3d(-100%, -50%, 0);
      transform: translate3d(-100%, -50%, 0);
    }
  }
  @keyframes gh-slide-left-leave {
    to {
      -webkit-transform: translate3d(-100%, -50%, 0);
      transform: translate3d(-100%, -50%, 0);
    }
  }
  @-webkit-keyframes gh-slide-right-enter {
    from {
      -webkit-transform: translate3d(100%, -50%, 0);
      transform: translate3d(100%, -50%, 0);
    }
  }
  @keyframes gh-slide-right-enter {
    from {
      -webkit-transform: translate3d(100%, -50%, 0);
      transform: translate3d(100%, -50%, 0);
    }
  }
  @-webkit-keyframes gh-slide-right-leave {
    to {
      -webkit-transform: translate3d(100%, -50%, 0);
      transform: translate3d(100%, -50%, 0);
    }
  }
  @keyframes gh-slide-right-leave {
    to {
      -webkit-transform: translate3d(100%, -50%, 0);
      transform: translate3d(100%, -50%, 0);
    }
  }
  @-webkit-keyframes gh-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes gh-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes gh-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes gh-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes gh-rotate {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes gh-rotate {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .gh-fade-enter-active {
    -webkit-animation: 0.5s gh-fade-in;
    animation: 0.5s gh-fade-in;
  }
  .gh-fade-leave-active {
    -webkit-animation: 0.5s gh-fade-out;
    animation: 0.5s gh-fade-out;
  }
  .gh-slide-top-enter-active {
    -webkit-animation: gh-slide-top-enter 0.5s both ease;
    animation: gh-slide-top-enter 0.5s both ease;
  }
  .gh-slide-top-leave-active {
    -webkit-animation: gh-slide-top-leave 0.5s both ease;
    animation: gh-slide-top-leave 0.5s both ease;
  }
  .gh-slide-bottom-enter-active {
    -webkit-animation: gh-slide-bottom-enter 0.5s both ease;
    animation: gh-slide-bottom-enter 0.5s both ease;
  }
  .gh-slide-bottom-leave-active {
    -webkit-animation: gh-slide-bottom-leave 1s both ease;
    animation: gh-slide-bottom-leave 1s both ease;
  }
  .gh-slide-left-enter-active {
    -webkit-animation: gh-slide-left-enter 0.5s both ease;
    animation: gh-slide-left-enter 0.5s both ease;
  }
  .gh-slide-left-leave-active {
    -webkit-animation: gh-slide-left-leave 0.5s both ease;
    animation: gh-slide-left-leave 0.5s both ease;
  }
  .gh-slide-right-enter-active {
    -webkit-animation: gh-slide-right-enter 0.5s both ease;
    animation: gh-slide-right-enter 0.5s both ease;
  }
  .gh-slide-right-leave-active {
    -webkit-animation: gh-slide-right-leave 0.5s both ease;
    animation: gh-slide-right-leave 0.5s both ease;
  }


</style>
