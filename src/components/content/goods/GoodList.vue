<template>
<div class="good-list">
<good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" class="item"></good-list-item>
</div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  components:{
    GoodListItem
  },
  props:{
    goods:{
      type:Array,
     default(){
        return []
     }

    }
  },
name: "GoodList",

}
</script>

<style scoped>
.good-list{
  display: flex;
  flex-flow: wrap;
justify-content: space-around;
}
.good-list .item{
  box-sizing: border-box;
  flex: 50%;
  padding-left: 5px;
  padding-right: 5px;
}
</style>