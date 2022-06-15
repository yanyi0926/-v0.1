<template>
  <div id="app" ref="appId">
    <!-- 头部 -->
    <Header />

    <!-- 身体 -->
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <Body /> -->

    <!-- 底栏 -->
    <BodyFooter />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Body from "@/components/Body";
import BodyFooter from "@/components/BodyFooter";
export default {
  name: "App",
  components: {
    Header,
    Body,
    BodyFooter,
  },
  methods: {},
  mounted() {
    // 初始化:禁止用户缩小放大
    //  禁止ctrl 加 鼠标滚轮控制网页缩放
    window.addEventListener(
      "mousewheel",
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    //firefox  兼容
    window.addEventListener(
      "DOMMouseScroll",
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    // 禁止ctrl 加 ‘+’ ‘-’ 控制网页缩放
    window.addEventListener(
      "keydown",
      function (event) {
        if (
          (event.ctrlKey === true || event.metaKey === true) &&
          (event.which === 61 ||
            event.which === 107 ||
            event.which === 173 ||
            event.which === 109 ||
            event.which === 187 ||
            event.which === 189)
        ) {
          event.preventDefault();
        }
      },
      false
    );

    // 初始化:获取用户屏幕
    const userscreenWi = window.screen.width;
    this.$refs.appId.style.minWidth = userscreenWi + "px";
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
@font-face {
  font-family: Yinwen;
  src: url("./fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2");
}
@font-face {
  font-family: Zhongwen;
  src: url("./fonts/TencentSans-W7-CN.woff2");
}
html,
body {
  height: 100vh;
  width: 100vw;
}
#app {
  width: 100%;
  /* 由JavaScript动态改变数值 */
  height: 100%;
  overflow-x: hidden;
}
.app-sidebar {
  width: 18%;
  min-width: 288px;
  height: 823px;
  position: fixed;
  display: inline-block;
  top: 60px;
  z-index: 1;
  overflow: scroll;
  background: white;
}
.app-body {
  width: 100%;
  position: relative;
}
.app-header {
  width: 100%;
  height: 75px;
  min-width: 1600px;
  position: relative;
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  left: 0;
  z-index: 1;
}
.app-section {
  width: 100%;
  height: 867px;
  /* 总高度867 */
  margin-top: -10px;
}
.app-footer {
  width: 100%;
  height: 300px;
  background-color: rgb(30, 30, 30);
}
.app-icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.app-icon-mulu {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  position: absolute;
  left: 12px;
  top: 8px;
}
.component-fade-enter-active {
  transition: all .3s ease;
}
.component-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.component-fade-enter, .component-fade-leave-to {
  transform: translateY(800px);
  opacity: 0;
}
</style>
