<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="active-icon"></slot></div>
    <div class="item-text" :style="red"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",

  props:{
    link:{
      type:String,
      default:'/home'
    }
  },
data(){
    return{

  }
},
  methods:{
    itemClick(){
      //console.log("itemClick");
     // console.log(this.link)
      this.$router.replace(this.link)
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    red(){
      return this.isActive?{color:'red'}:{}
    }
  }

};
</script>

<style>
#tab-bar-item {
  flex: 1;
}
.item-icon ,.item-active-icon{
  display:inline-block;
}
.item-icon img,
 .item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>