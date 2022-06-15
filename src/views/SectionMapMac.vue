<template>
  <div class="app-section-mapmsg">
    <!-- 按钮 -->
    <div class="app-section-mapmsg-map-control">
      <span @click="DetermineAmplification()">+</span>
      <span @click="JudgmentNarrow()">-</span>
    </div>

    <!-- 地图 -->
    <img src="@/images/map/mac1.png" alt="" class="mapBK" />
    <div class="app-section-mapmsg-map">
      <div class="app-section-mapmsg-map-dragphoto trans" ref="MapDiv">
        <img :src="playStyle" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionMapMac",
  data() {
    return {
      elementTag: "",
      // 中间值
      determineValue: 0,
      // 倍数
      MultipleArray: [1, 1.2, 1.5, 1.8],
      pdValue: "",
    };
  },
  computed: {
    playStyle() {
      return this.pdValue
        ? require("../images/map/A-2.png")
        : require("../images/map/A-3.png");
    },
  },
  methods: {
    // 函数获取数组放大倍数
    DetermineAmplification() {
      if (this.determineValue < 3) {
        this.determineValue++;
        this.elementTag.classList.add("trans");
        this.elementTag.style.transform = `scale(${
          this.MultipleArray[this.determineValue]
        })`;
      }
      // 判断是否能拖拽
      if (this.determineValue) {
        this.drag(this.elementTag);
      }
    },
    JudgmentNarrow() {
      if (this.determineValue > 0) {
        this.determineValue--;
        this.elementTag.classList.add("trans");
        this.elementTag.style.transform = `scale(${
          this.MultipleArray[this.determineValue]
        })`;
        this.elementTag.style.left = 0 + "px";
        this.elementTag.style.top = 0 + "px";
      }
      // 判断是否能拖拽
      if (this.determineValue) {
        this.drag(this.elementTag);
      } else {
        this.elementTag.style.left = 0 + "px";
        this.elementTag.style.top = 0 + "px";
      }
    },

    // 拖拽事件
    drag(ele) {
      const that = this;
      ele.onmousedown = function (event) {
        if (that.determineValue) {
          ele.classList.remove("trans");
          let ol = event.clientX - ele.offsetLeft;
          let ot = event.clientY - ele.offsetTop;
          ele.setCapture && ele.setCapture();
          // 给文本绑定一个鼠标移动事件
          document.onmousemove = function (event) {
            event = event || window.event;
            // 获取鼠标的坐标
            let x = event.clientX - ol;
            let y = event.clientY - ot;
            switch (that.MultipleArray[that.determineValue]) {
              case 1:
                that.dragLength(
                  ele,
                  that.MultipleArray[that.determineValue],
                  x,
                  y
                );
                break;
              case 1.2:
                that.dragLength(
                  ele,
                  that.MultipleArray[that.determineValue],
                  x,
                  y
                );
                break;
              case 1.5:
                that.dragLength(
                  ele,
                  that.MultipleArray[that.determineValue],
                  x,
                  y
                );
                break;
              case 1.8:
                that.dragLength(
                  ele,
                  that.MultipleArray[that.determineValue],
                  x,
                  y
                );
                break;
            }
          };
          // 为document绑定一个鼠标松开事件
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            ele.releaseCapture && ele.releaseCapture();
          };
          // 清除默认样式   阻止函数默认事件
          return false;
        }
      };
    },

    // 距离判断
    dragLength(element, MultipleArrayNum, elementX, elementY) {
      if (MultipleArrayNum !== 1) {
        // 计算宽度
        let ImgBoxw = parseInt(window.getComputedStyle(element).width);
        let NewImgBoxw = ImgBoxw * MultipleArrayNum;
        let ImgBoxWidth = NewImgBoxw - ImgBoxw;
        // 计算长度
        let ImgBoxh = parseInt(window.getComputedStyle(element).height);
        let NewImgBoxh = ImgBoxh * MultipleArrayNum;
        let ImgBoxHeight = NewImgBoxh - ImgBoxh;
        let leftNum = ImgBoxWidth / 2;
        let topNum = ImgBoxHeight / 2;
        if (
          elementX <= leftNum &&
          elementY <= topNum &&
          elementX >= -leftNum &&
          elementY >= -topNum
        ) {
          element.style.left = elementX + "px";
          element.style.top = elementY + "px";
        }
      }
    },
  },
  mounted() {
    // 入口函数    在此获取你的元素  只改后面的获取
    this.elementTag = this.$refs.MapDiv;
    this.pdValue = this.$route.query.Pd;
  },
};
</script>

<style scoped>
/*
    上半部分   下半部分就是手风琴
*/
.app-section-mapmsg {
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  /* margin: 120px 0 0 592px; */
  position: relative;
}
.mapBK {
  position: absolute;
  width: 742px;
  height: 483px;
  top: -23px;
  left: -89px;
}
.app-section-mapmsg-map {
  width: 565px;
  height: 403px;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.app-section-mapmsg-maptips {
  width: 370px;
  height: 350px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 20px;
  position: relative;
}

/* 地图设置 */
.app-section-mapmsg-map-dragphoto {
  width: 100%;
  height: 100%;
  position: absolute;
}
.app-section-mapmsg-map-dragphoto.trans {
  transition: all 0.2s linear;
}
.app-section-mapmsg-map-dragphoto > img:nth-child(1) {
  width: 100%;
  height: 100%;
}
/* 控制 */
.app-section-mapmsg-map-control {
  position: absolute;
  position: absolute;
  left: 448px;
  top: 369px;
  width: 121px;
  z-index: 1;
}
.app-section-mapmsg-map-control > span:nth-child(2) {
  line-height: 25px;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: rgb(237, 237, 237);
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.5;
  margin-left: 5px;
}
.app-section-mapmsg-map-control > span:nth-child(1) {
  line-height: 25px;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: rgb(237, 237, 237);
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.5;
}
.app-section-mapmsg-map-control > span:hover {
  opacity: 1;
}
</style>