<template>
  
</template>
<script>
import PublicHead from "./component/PublicHead.vue";

export default {
  name:'baby',
  components: {
    PublicHead
  },
  data() {
    return {};
  },
  mounted(){
     let arr=[4,2,1,3,2]
      this.$emit('headCallBack', arr)
  }
};
</script>
<style scoped>
@import url("../../static/css/style1.css");
.mui-select{background: rgba(255, 255, 255, 0.4);
  background: #fff;
  /* background-color: none; */
  border-radius: 5px;}
</style>


