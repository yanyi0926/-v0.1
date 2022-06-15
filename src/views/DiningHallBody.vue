<template>
  <div class="app-body">
    <div class="app-body-sectionBox1" ref="AppBodySectionId">
      <div class="app-section-mapmsg-maptips-nav">
        <p class="app-section-mapmsg-maptips-nav-p">生态食堂</p>
        <br />
        <p class="app-section-mapmsg-maptips-nav-tips">
          {{spanTitle}}{{ message }}
        </p>
      </div>
      <SectionMapMac class="SectionMapMac" />
    </div>

    <div class="app-body-sectionBox2">
      <div class="app-body-sectionBox2-header">
        <p style="font-family: Zhongwen;">关于食堂</p>
        <div></div>
      </div>
      <div class="app-body-sectionBox2-body">
        <FoodView />
      </div>
    </div>

    <div class="app-body-sectionBox3"></div>
    <div class="app-body-sectionBox4">
      <div class="app-body-sectionBox4-header">
        <p style="font-family: Zhongwen;">食品安全</p>
        <div></div>
      </div>
      <div class="app-body-sectionBox4-body">
        <div>
          <img src="@/images/食堂/图层 1.png" alt="" />
          <p>食品美味</p>
          <p>水路之珍，鲜衣好食</p>
        </div>
        <div>
          <img src="@/images/食堂/图层 2.png" alt="" />
          <p>种类繁多</p>
          <p>种类丰富，琳琅满目</p>
        </div>
        <div>
          <img src="@/images/食堂/图层 3.png" alt="" />
          <p>价格低廉</p>
          <p>物美价廉，购有所值</p>
        </div>
        <div>
          <img src="@/images/食堂/图层 4.png" alt="" />
          <p>安全卫生</p>
          <p>严格检查，不容放过</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionMapMac from "@/views/SectionMapMac";
import FoodView from "@/views/FoodView";
export default {
  data() {
      return {
        spanTitle:'食堂',
        message:'饮金馔玉，琳琅满目，在这里你总能找到属于你的味道和家的感觉',
      }
    },
  name: "DiningHallBody",
  mounted() {
    const userscreenWi2 = window.screen.width;
    this.$refs.AppBodySectionId.style.minWidth = userscreenWi2 + "px";
  },
  components: {
    SectionMapMac,FoodView
  },
};
</script>

<style scoped>
.app-body-sectionBox1 {
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  background-image: url("../images/map/麦地.jpg");
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  position: relative;
}
.app-body-sectionBox2{
  min-width: 1600px;
  width: 100vw;
  height: 970px;
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
.app-body-sectionBox3 {
  height: 200px;
  width: 100%;
  background-image: url("../images/稻田.jpg");
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
  margin: 200px 0 0 -628px;
}
</style>