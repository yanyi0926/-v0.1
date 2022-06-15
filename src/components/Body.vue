<template>
  <div class="app-body">
      <div class="app-body-sectionBox1" ref="AppBodySectionId">
        <BodySectionMap />
        <BodySectionMsg />
      </div>

      <div class="app-body-sectionBox2">
        <div class="app-body-sectionBox2-header">
          <p style="font-family: Zhongwen;">关于生态</p><div></div>
        </div>
        <div class="app-body-sectionBox2-body">
          <BodySectionWeather ref="BodySectionWeatherId" />
          <BodySectionSFQ />
        </div>
      </div>

      <div class="app-body-sectionBox3"></div>
      <div class="app-body-sectionBox4">
        <div class="app-body-sectionBox4-header">
          <p style="font-family: Zhongwen;">功能介绍</p><div></div>
        </div>
        <div class="app-body-sectionBox4-body">
          <div>
            <img src="@/images/功能介绍/1.png" alt="">
            <p>拖拽功能</p>
            <p>随意拖拽，尽收眼底</p>
          </div>
          <div>
            <img src="@/images/功能介绍/2.png" alt="">
            <p>缩放地图</p>
            <p>可大可小，一览齐全</p>
          </div>
          <div>
            <img src="@/images/功能介绍/3.png" alt="">
            <p>响应数据</p>
            <p>响应数据，知你所想</p>
          </div>
          <div>
            <img src="@/images/功能介绍/4.png" alt="">
            <p>跳转页面</p>
            <p>点击跳转，心之所向</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BodySectionMap from '@/views/BodySectionMap'; 
import BodySectionMsg from '@/views/BodySectionMsg'; 
import BodySectionWeather from '@/views/BodySectionWeather'; 
import BodySectionSFQ from '@/views/BodySectionSFQ'; 
export default {
    name: 'Body',
    components: {
        BodySectionMap,BodySectionMsg,BodySectionWeather,BodySectionSFQ
    },
    mounted() {
      const userscreenWi2 = window.screen.width;
      this.$refs.AppBodySectionId.style.minWidth = userscreenWi2 + 'px';
    },
}
</script>

<style scoped>
.app-body-sectionBox1{
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  background-image: url('../images/121.jpg');
  background-size: cover;
}
.app-body-sectionBox2,.app-body-sectionBox4{
  min-width: 1600px;
  width: 100vw;
  height: 800px;
  background: rgb(255, 255, 255);
  position: relative;
}
.app-body-sectionBox2-header,.app-body-sectionBox4-header{
  height: 150px;
  width: 100%;
  position: relative;
}
.app-body-sectionBox2-header > p,.app-body-sectionBox4-header > p{
  text-align: center;
  font-size: 60px;
  height: 100px;
  margin-top: 50px;
}
.app-body-sectionBox2-header > div,.app-body-sectionBox4-header > div{
  height: 10px;
  width: 152px;
  position: absolute;
  left: 680px;
  top: 85px;
  background: rgb(60, 111, 241);
}
.app-body-sectionBox2-body{
  display: flex;
  justify-content: space-evenly;
}
.app-body-sectionBox3{
  height: 200px;
  width: 100%;
  background-image: url('../images/树.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.app-body-sectionBox4-body{
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 313px;
  top: 247px;
}
.app-body-sectionBox4-body > div > img{
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
</style>