<template>
  <div class="wrap">
    <div class="tjbox_2 w1760">
      <ul class="clearfix">
        <li
          v-for="(item,index) in arr1"
          v-items
          :key="index"
          class="item_cultivation"
          @up="secondup(item,index)"
          @down="down(item,index)"
          @left="secondleft(item,index)"
          @right="secondright(item,index)"
          @click="goProadcast_course(item,index)"
        >
          <a href="#">
            <!-- <em class="viptips" v-if="item.vip!=''">{{item.vip}}</em> -->
            <img :src="item.image" />
            <h4>{{item.name}}</h4>
          </a>
        </li>
      </ul>
    </div>
    <div class="tjbox w1760">
      <ul class="clearfix">
        <li
          v-for="(item,index) in arr2"
          v-items
          :key="index"
          class="arr_items"
          @up="threeup(item,index)"
          @down="down(item,index)"
          @left="left(item,index)"
          @right="secondright(item,index)"
          @click="goProadcast_course(item,index)"
        >
          <a href="#">
            <img :src="item.image" />
            <h4>{{item.name}}</h4>
          </a>
        </li>
      </ul>
    </div>
    <div class="tjbox_3 w1760 clearfix" v-for="(value,num) in category_course_list" :key="num">
      <h2>{{value.category.name}}</h2>
      <ul class="clearfix l">
        <li
          v-for="(item,index) in value.course_list"
          :key="index"
          v-items
          class="arr3_item"
          @up="up(item,index)"
          @down="down(item,index)"
          @left="one_left(item,index,num)"
          @right="right(item,index,num)"
          @click="goProadcast_column(item,index)"
        >
          <a href="#">
            <img :src="item.image" />
            <h4>{{item.course_name}}</h4>
          </a>
        </li>
      </ul>
      <div class="morebox r" v-if="value.course_list.length>=3">
        <a
          href
          v-items
          @up="up(num)"
          @down="down()"
          @left="left()"
          @right="right()"
          @click="goMore(value.category)"
        >
          <img src="../../static/images/icon_more.png" />
          <span>更多</span>
        </a>
      </div>
    </div>
    <div class="keshicate w1760 clearfix" v-if="keshiNum!==0">
      <h2>按科室查疾病</h2>
      <ul class="clearfix l">
        <li
          v-for="(item,index) in keshi"
          v-items
          :key="index"
          @up="keshiup(item,index)"
          @down="down(item,index)"
          @left="left(item,index)"
          @right="lastright(item,index)"
          @click="goDiseaseList(item,index)"
        >
          <a href="#">
            <img :src="item.image" />
            <span>{{item.name}}</span>
          </a>
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
  name: "cultivation",
  components: {
    PublicHead
  },
  props: ["current"],
  data() {
    return {
      arr1: [],
      arr2: [],
      keshi: [
        //按科室查病
      ],
      keshiNum: "",
      category_course_list: []
    };
  },
  mounted() {},
  created() {
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
    this.getData();
  },
  methods: {
    getData() {
      let params = { catid: this.$route.query.id };
      service.categoryCourseList(params).then(ret => {
        this.category_course_list = ret.data.category_course_list;
        ret.data.course_list.forEach((item, index) => {
          if (index <= 1) {
            this.arr1.push({
              id: item.id,
              image: item.image,
              name: item.course_name
            });
          } else {
            this.arr2.push({
              id: item.id,
              image: item.image,
              name: item.course_name
            });
          }
        });
        this.keshi = ret.data.disease_cat_list;
        this.keshiNum = this.keshi.length;
        console.log(this.keshiNum);
      });
    },
    goMore(e) {
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        name: "more",
        query: { id: e.id }
      });
    },
    goProadcast_course(e, index) {
      console.log(e);
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        path: "/proadcast",
        query: { courseid: e.id}
      });
    },
    goProadcast_column(e, index) {
      console.log(e)
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        path: "/proadcast",
        query: { courseid: e.contentid}
      });
    },
    goDiseaseList(e, index) {
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        path: "/diseaseList",
        query: { id: e.id, type: "keshi" }
      });
    },
    getscrollIntoView(b) {
      this.$service.pointer.$el.scrollIntoView(b);
    },
    keshiup(e, index) {
      if (
        this.arr1.length == 0 &&
        this.arr2.length == 0 &&
        this.category_course_list == 0
      ) {
        this.getscrollIntoView(false);
        let a = authUtils.getNavCurrent();
        let el = this.$service.getEleByPath(a.xpath);
        this.$service.move(el);
      } else {
        this.$service.move("up");
      }
    },
    threeup(e, index) {
      if (index == 1) {
        this.$service.move(this.$el.querySelectorAll(".item_cultivation")[0]);
      } else if (index == 3) {
        this.$service.move(this.$el.querySelectorAll(".item_cultivation")[1]);
      } else {
        this.$service.move("up");
      }
      this.getscrollIntoView(false);
    },
    secondleft(e, index) {
      if (index == 1) {
        this.$service.move(this.$el.querySelectorAll(".item_cultivation")[0]);
      } else {
        this.$service.move("left");
      }
    },
    one_left(e, index, num) {
      if (index == 1 && num == 0) {
        console.log(123);
        this.$service.move(this.$el.querySelectorAll(".arr3_item")[0]);
      } else {
        this.$service.move("left");
      }
    },
    secondup(e, index) {
      // console.log(this.current)
      this.getscrollIntoView(false);
      let a = authUtils.getNavCurrent();
      let el = this.$service.getEleByPath(a.xpath);
      this.$service.move(el);
    },
    up(num) {
      let arrlength = this.arr2.length;
      if (num == 0) {
        this.getscrollIntoView(false);
        this.$service.move(
          this.$el.querySelectorAll(".arr_items")[arrlength - 1]
        );
      } else {
        this.getscrollIntoView(false);
        this.$service.move("up");
      }
    },
    down(item, index) {
      this.$service.move("down");

      this.getscrollIntoView(true);
    },
    left(e, index) {
      this.$service.move("left");
    },
    right(e, index, num) {
      if (
        this.category_course_list[num].course_list.length - 1 == index &&
        index !== 2
      ) {
        return;
      } else {
        this.$service.move("right");
      }
    },
    secondright(e, index) {
      let arr = this.$service.pointer.$el.parentNode.children; //获取父节点所有的子节点数量
      if (index == arr.length - 1) {
        return;
      } else {
        this.$service.move("right");
      }
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


