<template>
  <div class="app-section-photo2" ref="boxDiv">
    <div class="app-section-photo2-sfq" :class="{active: isActive==0}" @click="expand(0)">
      <h1>旧教</h1>
    </div>
    <div class="app-section-photo2-sfq" :class="{active: isActive==1}" @click="expand(1)">
      <h1>校门</h1>
    </div>
    <div class="app-section-photo2-sfq" :class="{active: isActive==2}" @click="expand(2)">
      <h1>实训中心</h1>
    </div>
    <div class="app-section-photo2-sfq" :class="{active: isActive==3}" @click="expand(3)">
      <h1>自然公园</h1>
    </div>
    <div class="app-section-photo2-sfq" :class="{active: isActive==4}" @click="expand(4)">
      <h1>校院墙</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodySectionSFQ",
  data() {
    return {
      isActive: 'a',
    }
  },
  methods: {
    expand(i){
      this.isActive = i
    }
  }
};
</script>

<style scoped>
.app-section-photo2 {
      width: 617px;
    height: 401px;
  margin-top: 40px;
  border-radius: 20px;
  display: flex;
}
.app-section-photo2 > div:nth-child(1) {
  background-image: url("@/images/手风琴/生态4.webp");
}
.app-section-photo2 > div:nth-child(2) {
  background-image: url("@/images/手风琴/生态5.webp");
}
.app-section-photo2 > div:nth-child(3) {
  background-image: url("@/images/手风琴/生态1.jpg");
}
.app-section-photo2 > div:nth-child(4) {
  background-image: url("@/images/手风琴/生态2.jpg");
}
.app-section-photo2 > div:nth-child(5) {
  background-image: url("@/images/手风琴/生态3.jpg");
}
.app-section-photo2-sfq {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0.4;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
  padding: 1px;
}
.app-section-photo2-sfq > h1 {
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 200px;
  color: aliceblue;
  opacity: 0;
}
.app-section-photo2-sfq:hover {
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
}
.app-section-photo2-sfq.active {
  flex: 6;
}
.app-section-photo2-sfq.active > h1 {
  opacity: 1;
}
.app-section-photo2 > div:nth-child(1) {
  border-radius: 20px 0 0 20px;
}
.app-section-photo2 > div:last-child {
  border-radius: 0 20px 20px 0;
}
</style>