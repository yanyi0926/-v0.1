<template>
  <div class="app-body">
    <div class="app-body-sectionBox1" ref="AppBodySectionId">
      <div class="app-section-mapmsg-maptips-nav">
        <p class="app-section-mapmsg-maptips-nav-p">连接生态</p>
        <br />
        <p class="app-section-mapmsg-maptips-nav-tips">
          {{spanTitle}}{{ message }}
        </p>
      </div>
      <SectionMapMac class="SectionMapMac" />
    </div>

    <div class="app-body-sectionBox2">
      <div class="app-body-sectionBox2-header">
        <p style="font-family: Zhongwen;">图书管理系统</p>
        <div class="xhx"></div>
      </div>
      <div class="app-body-sectionBox2-body">
        <p>操作</p>
        <p>数据展示</p>
        <BookMsg />
        <div class="app-body-sectionBox2-header-TSG">
          <img src="@/images/tsg.webp" alt="" />
        </div>
      </div>
      <p class="Xgmsg">
        <span>{{ BookNAME }}</span>
        {{ BookMesge }}
      </p>
    </div>

    <div class="app-body-sectionBox3"></div>
    <div class="app-body-sectionBox4">
      <div class="app-body-sectionBox4-header">
        <p style="font-family: Zhongwen;">查看新教</p>
        <div class="xhx"></div>
      </div>
      <div class="app-body-sectionBox4-body">
        <div class="xhx">
          <img src="@/images/新教/图层 1.png" alt="" />
          <p>师资雄厚</p>
          <p>师资强大，学力雄厚</p>
        </div>
        <div>
          <img src="@/images/新教/图层 2.png" alt="" />
          <p>藏书众多</p>
          <p>书盈四壁，浩如烟海</p>
        </div>
        <div>
          <img src="@/images/新教/图层 3.png" alt="" />
          <p>设施良好</p>
          <p>设备齐全，功能强大</p>
        </div>
        <div>
          <img src="@/images/新教/图层 4.png" alt="" />
          <p>新型教育</p>
          <p>智慧教学，交互体验</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionMapMac from "@/views/SectionMapMac";
import BookMsg from "@/views/BookMsg";
export default {
  data() {
    return {
      spanTitle: "一栋教学楼",
      message:"从青涩到成熟，必将伴随着种种割裂和不是，我们责任在于帮助你成长",
      BookMesge: "《C程序设计》一书的特点：体系合理、逻辑清楚、例题丰富、通俗易懂。同时又根据C语言新标准的规定，对该书进行了改写，使之符合当前的需要",
      BookNAME: "C语言程序设计",
    };
  },
  name: "ProtestantismBody",
  mounted() {
    const userscreenWi2 = window.screen.width;
    this.$refs.AppBodySectionId.style.minWidth = userscreenWi2 + "px";
    this.$bus.$on("showBookData", (data, data2) => {
      this.BookMesge = data;
      this.BookNAME = data2;
    });
  },
  components: {
    SectionMapMac,
    BookMsg,
  },
};
</script>

<style scoped>
.app-body-sectionBox1 {
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  background-image: url("../images/map/城市.jpg");
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: space-evenly;
  position: relative;
}
.app-body-sectionBox2 {
  min-width: 1600px;
  width: 100vw;
  height: 1100px;
  background: rgb(255, 255, 255);
  position: relative;
}
.app-body-sectionBox4 {
  min-width: 1600px;
  width: 100vw;
  height: 850px;
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
.app-body-sectionBox2-header > .xhx {
  height: 10px;
  width: 152px;
  background: rgb(60, 111, 241);
  position: absolute;
  left: 623px;
  top: 85px;
}
.app-body-sectionBox4-header > .xhx {
  height: 10px;
  width: 152px;
  background: rgb(60, 111, 241);
  position: absolute;
  left: 680px;
  top: 85px;
}
.app-body-sectionBox2-body {
  position: relative;
  display: flex;
  margin-top: 100px;
}
.app-body-sectionBox2-body > p {
  position: absolute;
}
.app-body-sectionBox2-body > p:nth-child(1) {
  top: -87px;
  left: 140px;
  font-weight: 700;
  font-size: 40px;
  border-bottom: 1px solid rgb(168, 168, 168);
}
.app-body-sectionBox2-body > p:nth-child(2) {
  top: -87px;
  left: 877px;
  font-weight: 700;
  font-size: 40px;
  border-bottom: 1px solid rgb(168, 168, 168);
}
.app-body-sectionBox3 {
  height: 200px;
  width: 100%;
  background-image: url("../images/城市.png");
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
.app-section-mapmsg-maptips-nav {
  position: absolute;
  width: 550px;
  left: 124px;
  top: 315px;
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

.SectionMapMac {
  margin: 200px 0 0 592px;
}
.app-body-sectionBox2-header-TSG {
  width: 400px;
  height: 685px;
  margin-left: 135px;
  position: relative;
  overflow: hidden;
}
.app-body-sectionBox2-header-TSG > img {
  width: 100%;
  height: 100%;
  transition: 0.2s all linear;
}
.app-body-sectionBox2-header-TSG:hover {
  box-shadow: 0px 3px 3px #454545;
}
.app-body-sectionBox2-header-TSG:hover img {
  transform: scale(1.1);
}
.Xgmsg {
  position: absolute;
  right: 45px;
  top: 465px;
  font-size: 14px;
  color: #737373;
  width: 280px;
  height: 500px;
}
.Xgmsg > span {
  display: block;
  font-weight: 700;
  font-size: 30px;
  color: black;
}
</style>