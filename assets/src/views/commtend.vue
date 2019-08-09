<template>
  <div class="wrap">
    <div id="zSlider" class="clearfix">
      <!-- <div id="picshow">
        <div id="picshow_img">
          <ul>
            <li v-items>
              <a href="#">
                <img src="../../static/images/a1.png" />
                <h3>引起急性胃肠炎的原因有哪些11</h3>
              </a>
            </li>
            <li v-items>
              <a href="#">
                <img src="../../static/images/a2.png" />
                <h3>不只是活着上集——颤抖的兄弟</h3>
              </a>
            </li>
            <li v-items>
              <a href="#">
                <img src="../../static/images/a3.png" />
                <h3>调节血压的好帮手——按揉敲打曲池穴</h3>
              </a>
            </li>
            <li v-items>
              <a href="#">
                <img src="../../static/images/a4.png" />
                <h3>药物流产的危害有哪些</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>-->
      <!-- <div id="select_btn">
        <ul>
          <li class="current" v-items>
            <span class="select_btn_item">引起急性胃肠炎的原因有哪些</span>
          </li>
          <li v-items>
            <span class="select_btn_item">不只是活着上集——颤抖的兄弟</span>
          </li>
          <li v-items>
            <span href class="select_btn_item">调节血压的好帮手——按揉敲打曲池穴</span>
          </li>
          <li v-items>
            <span href class="select_btn_item">药物流产的危害有哪些</span>
          </li>
        </ul>
      </div>-->
    </div>
    <div class="tjbox w1760">
      <ul class="clearfix">
        <li
          v-for="(item,index) in arr1"
          v-items
          :key="index"
          class="item_commtend"
          :ref="index"
          @up="secondup(item,index)"
          @down="down(item,index)"
          @left="secondleft(item,index)"
          @right="right(item,index)"
          @click="clickItem_one(item)"
        >
          <a href>
            <img :src="item.image"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="tjbox w1760" v-for="(value,num) in category_list" :key="num">
      <h2>{{value.category.name}}</h2>
      <ul class="clearfix">
        <li
          v-for="(item,index) in value.item"
          v-items
          :key="index"
          @up="up(item,index)"
          @down="down(item,index)"
          @left="left(item,index)"
          @right="right(item,index)"
          @click="clickItem_two(item)"
        >
          <a href>
            <img :src="item.image" />
            <h4>{{item.text}}</h4>
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
  name: "commtend",
  props: ["current"],
  components: {
    PublicHead
  },
  data() {
    return {
      downcurrent: "",
      category_list: [],
      arr1: [],
      data:[],
      childDiseas: [], //小儿推拿
      cup: [], //拔罐刮痧
      acupuncture: [], //针灸推拿
      great: [] //大家都在看
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    //  this.getscrollIntoView()
  },
  beforeRouteLeave(to, from, next) {
    // this.$service.clear();
    next();
  },
  methods: {
    //获取列表数据
    getData() {
      service.homepage().then(ret => {
        console.log(ret.data);
        this.arr1 = ret.data.index_head_list;
        this.category_list = ret.data.category_list;
      });
    },
    clickItem_one(item) {
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        path: "/proadcast",
        query:{courseid:item.ref_id}
      });
    },
    clickItem_two(item) {
      authUtils.setDownCurrent(this.$service.getPointerPosition());
      this.$router.push({
        path: "/proadcast",
        query:{courseid:item.ref_id}
      });
    },
    getscrollIntoView(b) {
      this.$service.pointer.$el.scrollIntoView(b);
    },
    secondleft(e, index) {
      if (index % 4 == 1) {
        this.$service.move(
          this.$el.querySelectorAll(".item_commtend")[index - 1]
        );
      } else {
        this.$service.move("left");
      }
      console.log(this.$service.pointer.$el);
    },
    secondup(e, index) {
      const num = this.arr1.length;
      if (index < 4) {
        let a = authUtils.getNavCurrent();
        let el = this.$service.getEleByPath(a.xpath);
        this.$service.move(el);
      } else {
        this.$service.move("up");
      }
      this.getscrollIntoView(false);
    },
    up() {
      this.getscrollIntoView(false);
      this.$service.move("up");
    },
    enddown(e, index) {},
    down(item, index) {
      this.getscrollIntoView(true);
      this.$service.move("down");
    },
    left(e, index) {
      this.$service.move("left");
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
  /* z-index: 9999; */
}
</style>


