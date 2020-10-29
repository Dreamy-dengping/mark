<template>
  <div class="good-list">
    <DetailGoodsListItem v-for="(item,index) in goods"
                         :key="index"
                         :goodsItem="item" class="item"

    ></DetailGoodsListItem>
  </div>
</template>

<script>
import DetailGoodsListItem from "./DetailGoodsListItem";
export default {
  components:{
    DetailGoodsListItem,
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