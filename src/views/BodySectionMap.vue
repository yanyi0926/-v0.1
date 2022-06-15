<template>
  <div class="app-section-mapmsg">
    <!-- 按钮 -->
    <div class="app-section-mapmsg-map-control">
      <span @click="DetermineAmplification()">+</span>
      <span @click="JudgmentNarrow()">-</span>
    </div>

    <!-- 地图 -->
    <img src="@/images/map/ipadF.png" alt="" class="mapBK" />
    <div class="app-section-mapmsg-map">
      <div class="app-section-mapmsg-map-dragphoto trans" ref="MapDiv">
        <img src="@/images/map/A-1.png" alt="" />
        <img
          class="app-section-mapmsg-map-dragphoto-newMap"
          src="@/images/map/新教.png"
          value="0"
          @mouseenter="transferFunction"
          @click="tzXJ"
        />
        <img
          class="app-section-mapmsg-map-dragphoto-newMap"
          src="@/images/map/三栋.png"
          value="1"
          @mouseenter="transferFunction"
          @click="tzSD"
        />
        <img
          class="app-section-mapmsg-map-dragphoto-newMap"
          src="@/images/map/食堂.png"
          value="2"
          @mouseenter="transferFunction"
          @click="tzST"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodySectionMap",
  data() {
    return {
      elementTag: "",
      // 中间值
      determineValue: 0,
      // 倍数
      MultipleArray: [1, 1.2, 1.5, 1.8],
      InformationData: [
        ["新教", "新教是全校最大的教室建筑，气势雄伟；当你步入院门是，会看到有口大鼎伫立在中间，以提醒着学子们学习的重要性；在院内设有多个办公室以供校领导，教师们办公；院内以楼层来分配院系，不同楼层对应着不同的教学；其中7，8楼是图书馆，其中藏有书籍65万册，藏书种类包括人文社科，信息技术，可以满足大量学生的阅读需要"],
        ["寝室", "3栋宿舍是男寝宿舍，宿舍建立于山腰之上成俯览之势，周围种植着各种植物，正对应着学校绿色生态的观念；宿舍内部小卖部，饮水机等生活设施应有尽有，保障了学生们的生活需求"],
        ["食堂", "前山食堂是全校最火热的食堂；其中菜品种类繁多，酸甜苦辣，应有尽有，美食香甜可口，回味无穷，可以供来自不同地方的学生感受家的味道"],
      ],
    };
  },
  methods: {
    tzXJ() {
      this.$router.push({
        name: "Protestantism",
        query: {
          Pd: 1,
        },
      });
    },
    tzST() {
      this.$router.push({
        name: "DiningHall",
        query: {
          Pd: 0,
        },
      });
    },
    tzSD() {
      this.$router.push({
        name: "Dormitory",
      });
    },
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
    transferFunction(e) {
      this.$bus.$emit(
        "getViewMsg",
        this.InformationData[parseInt(e.srcElement.attributes.value.value)]
      );
    },
  },
  mounted() {
    // 入口函数    在此获取你的元素  只改后面的获取
    this.elementTag = this.$refs.MapDiv;
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
  margin-top: 91px;
  position: relative;
}
.mapBK {
  position: absolute;
  width: 549px;
  height: 713px;
  top: -46px;
  left: -25px;
}
.app-section-mapmsg-map {
  width: 500px;
  height: 620px;
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
  width: 500px;
  height: 620px;
}
/* 定位小地图 */
.app-section-mapmsg-map-dragphoto
  .app-section-mapmsg-map-dragphoto-newMap:nth-child(2) {
  width: 29.3%;
  height: 6.2%;
  position: absolute;
  left: 264px;
  top: 535px;
  z-index: 2;
  cursor: pointer;
}
.app-section-mapmsg-map-dragphoto
  .app-section-mapmsg-map-dragphoto-newMap:nth-child(3) {
  width: 20.1%;
  height: 12.1%;
  position: absolute;
  left: 321px;
  top: 377px;
  z-index: 2;
  cursor: pointer;
}
.app-section-mapmsg-map-dragphoto
  .app-section-mapmsg-map-dragphoto-newMap:nth-child(4) {
  width: 8.5%;
  height: 5.2%;
  position: absolute;
  left: 211px;
  top: 543px;
  z-index: 2;
  cursor: pointer;
}
.app-section-mapmsg-map-dragphoto-newMap:hover {
  transform: scale(1.1);
}
/* 控制 */
.app-section-mapmsg-map-control {
  position: absolute;
  left: 378px;
  top: 584px;
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