<template>
  <div class="titbar w1760">
    <div class="logo">
      <img src="../../../static/images/logo.png" />
    </div>
    <div class="mainnav">
      <ul>
        <li
          v-for="(item,index) in msg"
          v-items
          :key="index"
          @up="up(item,index)"
          @down="down(item,index)"
          @left="left(item,index)"
          @right="right(item,index)"
        >
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- <div class="top_toolbox">
      <a href="#" class="btn_search" v-items>
        <img src="../../../static/images/icon_search.png" />搜索
      </a>
      <a href="#" class="btn_login" v-items>
        <img src="../../../static/images/icon_login_btn.png" />
      </a>
      <a href="#" class="btn_getvip" v-items>
        <img src="../../../static/images/icon_vip_btn.png" />开会员
      </a>
    </div>-->
  </div>
</template>
<script>
import authUtils from "../../utils/authUtils";
import service from "../../services/commtend";
export default {
  data() {
    return {
      isactive: true,
      Myindex: 0,
      msg: [
        { name: "推荐" },
        { name: "全部" }
      ],
      routes: [
        "commtend",
        "cultivation",
        "cultivation",
        "cultivation",
        "cultivation",
        "whole"
      ],
      currentFocus: "" //记录当前导航
    };
  },

  created() {
    this.getData();
  },
  mounted() {},
  watch: {},
  methods: {
    getData() {
      service.getNav().then(ret => {
        let index = 0;
        ret.data.forEach(item => {
          index++;
          this.msg.splice(index, 0, item);
        });
      });
    },
    up() {
      this.$service.move("up");
    },
    down(item, index) {
      authUtils.setNavCurrent(this.$service.getPointerPosition());
      this.$service.move("down");
    },
    left(e, index) {
      let myindex = 0;
      if (index == 0) {
        myindex = 0;
      } else {
        myindex = index - 1;
      }
      if (index > 0) {
        this.$router.push({
          name: this.routes[index - 1],
          query: { id: this.msg[myindex].id,t:Date.now()}
        });
        this.$service.move("left");
        authUtils.setNavCurrent(this.$service.getPointerPosition());
      }
    },
    right(e, index) {
      let myindex = 0;
      if (index == 5) {
        myindex = 5;
      } else {
        myindex = index + 1;
      }
      console.log(this.msg[myindex]);

      if (index <= this.msg.length) {
        this.$router.push({
          name: this.routes[index + 1],
          query: { id: this.msg[myindex].id,t:Date.now()}
        });
        this.$service.move("right");
        authUtils.setNavCurrent(this.$service.getPointerPosition());
      }
    }
  }
};
</script>
<style scoped>
@import url("../../../static/css/style1.css");
.focus {
  border-radius: 10px;
  background: #169e00;
  border: 1px solid #169e00;
}
</style>


