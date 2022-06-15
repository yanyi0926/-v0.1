<template>
  <div class="app-section-mapmsg-maptips-nav">
    <p class="app-section-mapmsg-maptips-nav-p">智慧生态</p>
    <br />
    <p class="app-section-mapmsg-maptips-nav-tips">
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
    name: 'BodySectionMsg',
    data() {
      return {
        spanTitle:'生态学院',
        message:'从老师到学生，从现在到未来，连接生态和网络',
      }
    },
    methods: {
      getViewMsg(message){
        this.message = message[1]
      }
    },
    mounted() {
      this.$bus.$on('getViewMsg',this.getViewMsg);
    },
    beforeDestroy(){
      this.$bus.$off('getViewMsg');
    }
};
</script>

<style scoped>
.app-section-mapmsg-maptips-nav{
  width: 550px;
  margin-top: 280px;
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

</style>