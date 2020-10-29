<template>
<div class="tab-control">
  <div @click="spanClick(index)" v-for="(item,index) in title" :key="index"  class="tab-control-item">
    <span :class="{isActie:currdentIndex===index}">{{ item }}</span>
  </div>
</div>
</template>

<script>
export default {
name: "TabConTrol",
  data(){
  return{
    currdentIndex:0
  }
  },
  props:{
  title:{
    type:Array,
    default(){
      return []
    }
  }
  },
  computed:{

  },
  methods:{
    spanClick(index){
      //console.log('itemclick');
      this.currdentIndex=index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
}
.tab-control .tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.isActie{
  color: red;
  border-bottom: 3px solid red ;
  font-weight: 600;
}
</style>