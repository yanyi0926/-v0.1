<template>
  <div class="app-body">
    <div class="app-body-sectionBox1" ref="AppBodySectionId">
      <BodySectionMapWihte />
       <div class="app-section-mapmsg-maptips-nav">
        <p class="app-section-mapmsg-maptips-nav-p">生态宿舍</p>
        <br />
        <p class="app-section-mapmsg-maptips-nav-tips">
          {{spanTitle}}{{ message }}
        </p>
      </div>
    </div>

    <div class="app-body-sectionBox2">
      <div class="app-body-sectionBox2-header">
        <p style="font-family: Zhongwen;">关于寝室</p>
        <div></div>
      </div>
      <div class="app-body-sectionBox2-body">
        <img src="../images/qs.png" alt="">
      </div>
    </div>

    <div class="app-body-sectionBox3"></div>
    <div class="app-body-sectionBox4">
      <div class="app-body-sectionBox4-header">
        <p style="font-family: Zhongwen;">寝室介绍</p>
        <div></div>
      </div>
      <div class="app-body-sectionBox4-body">
        <div>
          <img src="@/images/寝室/图层 1.png" alt="" />
          <p>绿色环境</p>
          <p>生态校园，拥抱自然</p>
        </div>
        <div>
          <img src="@/images/寝室/图层 2.png" alt="" />
          <p>学子精舍</p>
          <p>文明宿舍，携手共建</p>
        </div>
        <div>
          <img src="@/images/寝室/图层 3.png" alt="" />
          <p>基础应用</p>
          <p>基础设施，应有尽有</p>
        </div>
        <div>
          <img src="@/images/寝室/图层 4.png" alt="" />
          <p>消防安全</p>
          <p>消防工具，护卫安全</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BodySectionMapWihte from "./BodySectionMapWihte";
export default {
  name: "DormitoryBody",
  data() {
    return {
      spanTitle: '宿舍',
      message: '环山抱水，鸟语花香，在人于自然中找到独属于你的秘境',
    }
  },
  mounted() {
    const userscreenWi2 = window.screen.width;
    this.$refs.AppBodySectionId.style.minWidth = userscreenWi2 + "px";
  },
  components: {
    BodySectionMapWihte,
  },
};
</script>

<style scoped>
.app-body-sectionBox1 {
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  background-image: url("../images/map/紫.jpg");
  background-size: cover;
  position: relative;
}
.app-body-sectionBox2{
  min-width: 1600px;
  width: 100vw;
  height: 870px;
  background: rgb(255, 255, 255);
  position: relative;
}
.app-body-sectionBox4 {
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  background: rgb(255, 255, 255);
  position: relative;
}
.app-body-sectionBox2-header,
.app-body-sectionBox4-header {
  height: 150px;
  width: 100%;
  position: relative;
}
.app-body-sectionBox2-header > p,
.app-body-sectionBox4-header > p {
  text-align: center;
  font-size: 60px;
  height: 100px;
  margin-top: 50px;
}
.app-body-sectionBox2-header > div,
.app-body-sectionBox4-header > div {
  height: 10px;
  width: 152px;
  background: rgb(60, 111, 241);
  position: absolute;
  left: 680px;
  top: 85px;
}
.app-body-sectionBox2-body {
  display: flex;
  justify-content: space-evenly;
  position: relative;
}
.app-body-sectionBox2-body>img{
      width: 920px;
    height: 651px;
    position: absolute;
    top: -25px;
    left: 332px;
}
.app-body-sectionBox3 {
  height: 200px;
  width: 100%;
  background-image: url("../images/紫色.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.app-body-sectionBox4-body {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
     left: 313px;
    top: 247px;
}
.app-body-sectionBox4-body > div > img {
  width: 200px;
  height: 200px;
  margin-left: 45px;
}

.app-body-sectionBox4-body > div > p:nth-child(2) {
  width: 300px;
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  text-align: center;
  margin-top: 20px;
}
.app-body-sectionBox4-body > div > p:nth-child(3) {
  width: 300px;
  font-size: 30px;
  line-height: 32px;
  text-align: center;
  margin-top: 20px;
  padding-top: 15px;
  font-size: 14px;
  color: #737373;
}
/* 相关信息 */
.app-section-mapmsg-maptips-nav{
  position: absolute;
  width: 550px;
  right: 124px;
  top: 283px;
}
.app-section-mapmsg-maptips-nav-p {
  height: 30px;
  width: 100%;
  font-size: 50px;
  line-height: 30px;
  color: aliceblue;
  font-family: Zhongwen;
  padding-left: 10px;
}
.app-section-mapmsg-maptips-nav-tips {
  font-weight: 100;
  font-size: 20px;
  padding: 0 10px 0 10px;
  color: white;
  line-height: 32px;
}

.SectionMapMac{
  margin: 155px 0 0 695px;
}
</style>