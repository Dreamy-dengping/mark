<template>
<div class="tab-meu">
  <scroll class="content">
    <ul class="menu-list">
      <li v-for="(item, index) in categories" :key="index"
          @click="liClick(index)"
          :class="{isActive:index===currdentIndex}">{{item.title}}</li>
    </ul>

  </scroll>

</div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
name: "TabMue",
  components: {
  Scroll
  },
  data(){
  return{
    currdentIndex:0,
  }
  },
  props:{
    categories:{
      type:Array,
    }
  },
  methods:{
    liClick(index){
      console.log(index);
      this.currdentIndex=index;
      this.$emit('liClick',index);
    }
  }

}
</script>

<style scoped>
.tab-meu{
  height: 100vh;
  position: relative;
}
.content{
position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.menu-list li{
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #d5ffb9;

  color: #1c1b1b;
  font-size: 13px;
}
.menu-list .isActive{
color: #fff;
  font-weight: bold;
  font-size:14px;
  background-color: #f36666;
}
</style>