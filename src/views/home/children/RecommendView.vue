<template>
<div class="recommend">
<div class="recommend-item" v-for="(item,index) in recommends" :key="index">
  <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>

</div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
text-align: center;
}
.recommend-item img{
  width:65px;
  margin-bottom: 10px;
}
</style>