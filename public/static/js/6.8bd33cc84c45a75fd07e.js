webpackJsonp([6],{TQG7:function(t,e){},X0LJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Vygu"),r=i("KHcI"),o=i("pTuR"),c={name:"commtend",props:["current"],components:{PublicHead:n.a},data:function(){return{downcurrent:"",category_list:[],arr1:[],data:[],childDiseas:[],cup:[],acupuncture:[],great:[]}},created:function(){this.getData()},mounted:function(){},beforeRouteLeave:function(t,e,i){i()},methods:{getData:function(){var t=this;o.a.homepage().then(function(e){console.log(e.data),t.arr1=e.data.index_head_list,t.category_list=e.data.category_list})},clickItem_one:function(t){r.a.setDownCurrent(this.$service.getPointerPosition()),this.$router.push({path:"/proadcast",query:{courseid:t.ref_id}})},clickItem_two:function(t){r.a.setDownCurrent(this.$service.getPointerPosition()),this.$router.push({path:"/proadcast",query:{courseid:t.ref_id}})},getscrollIntoView:function(t){this.$service.pointer.$el.scrollIntoView(t)},secondleft:function(t,e){e%4==1?this.$service.move(this.$el.querySelectorAll(".item_commtend")[e-1]):this.$service.move("left"),console.log(this.$service.pointer.$el)},secondup:function(t,e){this.arr1.length;if(e<4){var i=r.a.getNavCurrent(),n=this.$service.getEleByPath(i.xpath);this.$service.move(n)}else this.$service.move("up");this.getscrollIntoView(!1)},up:function(){this.getscrollIntoView(!1),this.$service.move("up")},enddown:function(t,e){},down:function(t,e){this.getscrollIntoView(!0),this.$service.move("down")},left:function(t,e){this.$service.move("left")},right:function(t,e){e!=this.$service.pointer.$el.parentNode.children.length-1&&this.$service.move("right")}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"clearfix",attrs:{id:"zSlider"}}),t._v(" "),i("div",{staticClass:"tjbox w1760"},[i("ul",{staticClass:"clearfix"},t._l(t.arr1,function(e,n){return i("li",{directives:[{name:"items",rawName:"v-items"}],key:n,ref:n,refInFor:!0,staticClass:"item_commtend",on:{up:function(i){t.secondup(e,n)},down:function(i){t.down(e,n)},left:function(i){t.secondleft(e,n)},right:function(i){t.right(e,n)},click:function(i){t.clickItem_one(e)}}},[i("a",{attrs:{href:""}},[i("img",{attrs:{src:e.image}})])])}))]),t._v(" "),t._l(t.category_list,function(e,n){return i("div",{key:n,staticClass:"tjbox w1760"},[i("h2",[t._v(t._s(e.category.name))]),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(e.item,function(e,n){return i("li",{directives:[{name:"items",rawName:"v-items"}],key:n,on:{up:function(i){t.up(e,n)},down:function(i){t.down(e,n)},left:function(i){t.left(e,n)},right:function(i){t.right(e,n)},click:function(i){t.clickItem_two(e)}}},[i("a",{attrs:{href:""}},[i("img",{attrs:{src:e.image}}),t._v(" "),i("h4",[t._v(t._s(e.text))])])])}))])})],2)},staticRenderFns:[]};var a=i("VU/8")(c,s,!1,function(t){i("TQG7")},"data-v-57761344",null);e.default=a.exports}});
//# sourceMappingURL=6.8bd33cc84c45a75fd07e.js.map