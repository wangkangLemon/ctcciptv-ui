<template>
  <div class="wrap">
    <div class="tjbox w1760" clearfix v-if="this.$route.query.type=='keshi'">
      <ul class="clearfix">
        <li
          class="on item_disease"
          v-items
          @up="one_up()"
          @down="down()"
          @left="secondleft()"
          @right="right()"
        >
          <img :src="category.image" />
          <span>{{category.name}}</span>
        </li>
        <li
          v-for="(item,index) in erkeArr"
          v-items
          :key="index"
          @up="secondup(item,index)"
          @down="down(item,index)"
          @left="secondleft(item,index)"
          @right="lastright(item,index)"
        >
          <a href>
            <img :src="item.image" />
            <h4>{{item.course_name}}</h4>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import authUtils from "../utils/authUtils";
import service from "../services/commtend";
export default {
  data() {
    return {
      category: [],
      erkeArr: [
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        },
        {
          text: "治疗疲劳综合征之法—刺激百会穴和神门穴",
          img: require("../../static/images/img410_230.jpg")
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    let a = authUtils.getNavCurrent();
    let el = this.$service.getEleByPath(a.xpath);
    this.$service.move(el);
  },
  methods: {
    serviceBack() {
      this.$router.go(-1);
    },
    getData() {
      let params = { catid: this.$route.query.id };
      service.categoryallcourseList(params).then(ret => {
        this.erkeArr = ret.data.course_list;
        this.category = ret.data.category;
      });
    },
    getscrollIntoView(b) {
      this.$service.pointer.$el.scrollIntoView(b);
    },
    secondleft(e, index) {
      if (index == 0) {
        this.$service.move(this.$el.querySelectorAll(".item_disease")[0]);
      } else {
        this.$service.move("left");
      }
    },
    secondup(e, index) {
      console.log(index);
      if (index <= 2) {
        this.getscrollIntoView(false);
        let a = authUtils.getNavCurrent();
        let el = this.$service.getEleByPath(a.xpath);
        this.$service.move(el);
      } else {
        this.getscrollIntoView(false);
        this.$service.move("up");
      }
    },
    one_up() {
      this.getscrollIntoView(false);
      let a = authUtils.getNavCurrent();
      let el = this.$service.getEleByPath(a.xpath);
      this.$service.move(el);
    },
    up() {
      this.getscrollIntoView(false);
      this.$service.move("up");
    },
    down(item, index) {
      this.getscrollIntoView(true);
      this.$service.move("down");
    },
    left(e, index) {
      this.$service.move("left");
    },
    right(e, index) {
      // let arr = this.$service.pointer.$el.parentNode.children; //获取父节点所有的子节点数量
      // if (index == arr.length - 1) {
      //   return;
      // } else {
      this.$service.move("right");
      // }
    },
    lastright(e, index) {
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
  transform: scale(1.06);
  outline: 2px solid #ffffff;
}
</style>

