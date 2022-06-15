<template>
  <div class="app">
    <div class="app-table">
      <table cellspacing="0" cellpadding="0" class="header">
        <thead>
          <tr>
            <th colspan="1" rowspan="1">图书</th>
            <th colspan="1" rowspan="1">作者</th>
            <th colspan="1" rowspan="1">出版时间</th>
            <th colspan="1" rowspan="1">相关操作</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr v-for="(one, index) of Msg" :key="index" @click="chuandishuju(one.relevantInformation,one.bookName)">
            <td>{{ one.bookName }}</td>
            <td>{{ one.author }}</td>
            <td>{{ one.PublicationDate }}</td>
            <td>
              <img src="@/images/icon/btn.png" class="btnSC" @click="deleteBook(index)">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="app-input">
      <div class="app-juanBook">
        <h3>您想要捐书吗？</h3>
        <span>书籍</span
        ><input type="text" placeholder="在此输入书籍" v-model="nameMS" /><br />
        <span>作者</span
        ><input type="text" placeholder="在此输入作者" v-model="zzMS" /><br />
        <span>日期</span
        ><input
          type="text"
          placeholder="在此输入出版时间"
          v-model="dateMS"
        /><br />
        <span>名句</span
        ><input type="text" placeholder="在此输入名言名句" v-model="yjMS" />
        <button @click="addBook">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import bookMSG from "../assets/图书馆.json";
export default {
  name: "BookMsg",
  data() {
    return {
      Msg: bookMSG,
      nameMS: "",
      zzMS: "",
      dateMS: "",
      yjMS: "",
    };
  },
  methods: {
    chuandishuju(data,data2){
      this.$bus.$emit('showBookData',data,data2)
    },
    deleteBook(i) {
      this.Msg.splice(i, 1);
    },
    addBook() {
      if (
        this.nameMS.trim() !== "" &&
        this.zzMS.trim() !== "" &&
        this.dateMS.trim() !== "" &&
        this.yjMS.trim() !== ""
      ) {
        const bookDy = {
          bookName: this.nameMS,
          author: this.zzMS,
          PublicationDate: this.dateMS,
          relevantInformation: this.yjMS,
        };
        this.Msg.push(bookDy);
      } else {
        alert("添加失败！！都需要填写哦");
      }
    },
  },
};
</script>

<style scoped>
.app {
  height: 800px;
  position: relative;
  margin-left: 100px;
}
.app-table {
  width: 600px;
  height: 360px;
  overflow: scroll;
  margin: 5px;
  border: 1px solid rgb(201, 201, 201);
}
.app-table:hover{
  box-shadow: 0px 3px 3px #c8c8c8;
}
.app-table::-webkit-scrollbar {
  display: none;
}
.header,
.app-input {
  width: 600px;
}
.header {
  margin-top: 10px;
}
.header,
tr,
th,
td {
  border-bottom: 1px solid #ebeef5;
}
.header,
tr,
th,
td {
  height: 45px;
}
.header td {
  text-align: center;
  position: relative;
}
.body > tr:hover {
  background-color: rgb(245, 247, 250);
}
.btnSC {
  display: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 60px;
  top: 5px;
}
.body > tr:hover .btnSC {
  display: block;
}
.body > tr {
  position: relative;
}

/* 表单的css */
.app-input {
  position: absolute;
  left: 123px;
  top: 401px;
  width: 400px;
  height: 285px;
  border: 1px solid rgb(201, 201, 201);
}
.app-input:hover {
  box-shadow: 0px 3px 3px #c8c8c8;
}
.app-juanBook > input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 300px;
  margin: 2px;
}
.app-juanBook > input:hover {
  box-shadow: 0px 3px 3px #c8c8c8;
}
.app-juanBook > h3 {
  margin: 20px 20px 18px 140px;
}
.app-juanBook > span {
  margin: 20px;
}
.app-juanBook > button {
  cursor: pointer;
  width: 80px;
  height: 40px;
  line-height: 20px;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  background: white;
  border: 1px solid rgb(201, 201, 201);
  margin-left: 20px;
  position: absolute;
  bottom: 2px;
  left: 145px;
}
</style>