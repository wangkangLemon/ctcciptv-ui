<template>
  <div class="wrap">
    <div class="tjbox_4 w1760" v-for="(value,num) in category_course_list" :key="num">
      <h2>{{value.category.name}}</h2>
      <ul class="clearfix">
        <li
          v-for="(item,index) in value.items"
          v-items
          :key="index"
          class="item_whole"
          @up="up(item,index,num)"
          @down="down(item,index)"
          @left="left(item,index,num)"
          @right="right(item,index)"
          @click="clickItem(item)"
        >
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import PublicHead from "./component/PublicHead.vue";
import authUtils from "../utils/authUtils";
import service from "../services/commtend";

export default {
  name: "whole",
  components: {
    PublicHead
  },
  props: ["current"],
  data() {
    return {
      category_course_list: []
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    let _this = this;
    let a = authUtils.getDownCurrent();
    if (a) {
      setTimeout(function() {
        let el = _this.$service.getEleByPath(a.xpath);
        _this.$service.move(el);
        el.scrollIntoView(false);
      }, 100);
      authUtils.clearCurrent("KEY_PUSHDOCUMENT");
    } else {
      this.$service.move(this.$service.pointer);
    }
  },
  methods: {
    getData() {
      service.categoryList().then(ret => {
        console.log(ret.data);
        this.category_course_list = ret.data;
      });
    },
    clickItem(item) {
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        name: "diseaseList",
        query: { id: item.id, type: "whole" }
      });
    },
    getscrollIntoView(b) {
      this.$service.pointer.$el.scrollIntoView(b);
    },
    up(e, index, num) {
      if (num == 0) {
        let a = authUtils.getNavCurrent();
        let el = this.$service.getEleByPath(a.xpath);
        this.$service.move(el);
      } else {
        this.$service.move("up");
        this.getscrollIntoView(false);
      }
    },
    down(item, index) {
      this.getscrollIntoView(true);
      this.$service.move("down");
    },
    left(e, index, num) {
      if (num == 0 && index == 1) {
        this.$service.move(this.$el.querySelectorAll(".item_whole")[index - 1]);
      } else {
        this.$service.move("left");
      }
    },
    right(e, index) {
      let arr = this.$service.pointer.$el.parentNode.children; //获取父节点所有的子节点数量
      if (index == arr.length - 1) {
        return;
      } else {
        this.$service.move("right");
      }
    }
  }
};
</script>
<style scoped>
@import url("../../static/css/style.css");
.focus {
  transition: 0.5s;
  transform: scale(1.1);
  outline: 2px solid #ffffff;
}
</style>


