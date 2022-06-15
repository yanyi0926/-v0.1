<template>
  <div class="FoodImg">
    <div>
      <div>
        <img class="FoodImgSP" src="@/images/食品/1.jpg" alt="" />
        <div class="caiLan">
          <p>菜品：宫保鸡丁</p>
          <p style="font-family: Yinwen;">Price：￥20.00</p>
          <p style="font-family: Yinwen;">Number：{{shopSum}}</p>
          <div class="Jia">
            <img @click="countJIA" src="../images/icon/x.png" alt="">
            <img @click="countJIAN" src="../images/icon/s.png" alt="">
          </div>
        </div>
      </div>
      <div>
        <img class="FoodImgSP" src="@/images/食品/2.jpg" alt="" />
        <div class="caiLan">
          <p>菜品：白粥</p>
          <p style="font-family: Yinwen;">Price：￥11.00</p>
          <p style="font-family: Yinwen;">Number：{{shopSum2}}</p>
          <div class="Jia">
            <img @click="countJIA2" src="../images/icon/x.png" alt="">
            <img @click="countJIAN2" src="../images/icon/s.png" alt="">
          </div>
        </div>
      </div>
      <div class="jiesuan" @click="getCountPrice">
        购买
      </div>
    </div>
    <div>
      <div>
        <img class="FoodImgSP" src="@/images/食品/3.jpg" alt="" />
        <div class="caiLan">
          <p>菜品：热干面</p>
          <p style="font-family: Yinwen;">Price：￥18.00</p>
          <p style="font-family: Yinwen;">Number：{{shopSum3}}</p>
          <div class="Jia">
            <img @click="countJIA3" src="../images/icon/x.png" alt="">
            <img @click="countJIAN3" src="../images/icon/s.png" alt="">
          </div>
        </div>
      </div>
      <div>
        <img class="FoodImgSP" src="@/images/食品/4.jpg" alt="" />
        <div class="caiLan">
          <p>菜品：麻辣烫</p>
          <p style="font-family: Yinwen;">Price：￥15.00</p>
          <p style="font-family: Yinwen;">Number：{{shopSum4}}</p>
          <div class="Jia">
            <img @click="countJIA4" src="../images/icon/x.png" alt="">
            <img @click="countJIAN4" src="../images/icon/s.png" alt="">
          </div>
        </div>
      </div>
      <div class="jiesuan2">
        总价:￥{{CountPrice}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodView",
  data() {
    return {
      shopSum: 0,
      shopSum2: 0,
      shopSum3: 0,
      shopSum4: 0,
      CountPrice: 0,
    }
  },
  methods: {
    getCountPrice(){
      this.CountPrice = this.shopSum * 20 + this.shopSum2 * 18 + this.shopSum3 * 11 + this.shopSum4 * 15
    },
    countJIA(){
      this.shopSum++
    },
    countJIA2(){
      this.shopSum2++
    },
    countJIA3(){
      this.shopSum3++
    },
    countJIA4(){
      this.shopSum4++
    },
     countJIAN(){
       if(this.shopSum <= 0){
        this.shopSum = 0
       }else{
         this.shopSum--
       }
    },
    countJIAN2(){
      if(this.shopSum2 <= 0){
        this.shopSum2 = 0
       }else{
         this.shopSum2--
       }
    },
    countJIAN3(){
      if(this.shopSum3 <= 0){
        this.shopSum3 = 0
       }else{
         this.shopSum3--
       }
    },
    countJIAN4(){
      if(this.shopSum4 <= 0){
        this.shopSum4 = 0
       }else{
         this.shopSum4--
       }
    }
  },
};
</script>

<style>
.FoodImg {
  margin-left: 370px;
  width: 855px;
  display: flex;
  justify-content: space-evenly;
}
.FoodImg > div {
  width: 300px;
  height: 400px;
  position: relative;
}
.FoodImgSP {
  width: 100%;
  height: 200px;
  border-radius: 40px;
}
.FoodImg > div > div{
    margin-bottom: 85px;
    position: relative;
}
.caiLan > p{
  margin-top: 2px;
  border-bottom: 1px dotted rgb(201, 201, 201);
}
.caiLan > p:nth-child(1){
  font-weight: 700;
  font-family: Zhongwen;
  font-size: 20px;
  color: rgb(16, 20, 44);
}
.caiLan > p:nth-child(2){
  color: rgb(121, 121, 123);
}
.caiLan > p:nth-child(3){
  color: rgb(101, 110, 202);
}
.Jia{
  height: 50px;
  width: 25px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.Jia > img{
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-left: 2px;
}
.Jia > img:nth-child(1){
  height: 20px;
}
.Jia > input{
    width: 30px;
    height: 30px;
}
.jiesuan{
  height: 50px;
  width: 200px;
  line-height: 50px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid rgb(60, 111, 241);
  position: absolute;
  bottom: 27px;
  right: -51px;
  cursor: pointer;
  font-weight: 700;
  color: rgb(60, 111, 241);
}
.jiesuan2{
  height: 50px;
  width: 200px;
  line-height: 50px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid rgb(60, 111, 241);
  background: rgb(60, 111, 241);
  position: absolute;
  color: white;
  bottom: 27px;
  right: -51px;
  cursor: pointer;
  font-weight: 700;
}
</style>