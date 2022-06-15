<template>
  <div class="app-header" ref="AppHeaderId">
    <img class="app-header-logo" src="@/images/icon/学校logo.png" alt="" />
    <ul class="app-header-weatherOIntroduction">
      <li @click="routerZY()">主页</li>
      <li @click="routerXJ()">新教</li>
      <li @click="routerST()">食堂</li>
      <li @click="routerQS()">寝室</li>
    </ul>
    <div class="app-header-yuyan">
      <a class="app-header-yuyan-ziti" lang="zh-cn">简</a>
      <i class="app-header-yuyan-fenge">|</i>
      <a class="app-header-yuyan-ziti" lang="zh-hk">繁</a>
      <i class="app-header-yuyan-fenge">|</i>
      <a class="app-header-yuyan-ziti" lang="en-us">EN</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      highLight: 0,
    };
  },
  methods: {
    routerZY() {
      this.$router.push({
        name: "home",
      });
    },
    routerXJ() {
      this.$router.push({
        name: "Protestantism",
        query: {
          Pd: 1,
        },
      });
    },
    routerST() {
      this.$router.push({
        name: "DiningHall",
        query: {
          Pd: 0,
        },
      });
    },
    routerQS() {
      this.$router.push({
        name: "Dormitory",
      });
    },
  },
  mounted() {
    const userscreenWi = window.screen.width;
    this.$refs.AppHeaderId.style.minWidth = userscreenWi + "px";
  },
};
</script>

<style scoped>
.app-header-logo {
  width: 310px;
  height: 45px;
  margin: 12px 0 0 120px;
}
.app-header-weatherOIntroduction {
  display: flex;
  position: absolute;
  right: 22%;
  top: 12px;
}
.app-header-weatherOIntroduction > li {
  width: 100px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
}
.app-header-yuyan {
  position: absolute;
  right: 10%;
  top: 27px;
  display: block;
}
.app-header-yuyan-fenge {
  display: inline-block;
  font-size: 12px;
  margin: 0px 3px;
  position: relative;
  top: -2px;
  opacity: 0.7;
}
.app-header-yuyan-ziti {
  display: inline-block;
  font-size: 16px;
  color: rgb(115, 115, 115);
  opacity: 0.7;
  cursor: pointer;
}
</style>