<template>
<div class="goods-list-item" @click="itemClick">
  <img :src="goodsItem.show.img" alt="">
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">☆{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {

name: "GoodListItem",
  props:{
  goodsItem: {
    type:Object,
    default(){
      return {}
    }
  }
  },
  methods:{
    itemClick(){
      console.log('itemClick');
      this.$router.push({
        path:'/detail',
  query:{
          iid:this.goodsItem.iid
  }
      })

    }

  },

}
</script>

<style scoped>
.goods-list-item{
  padding-bottom: 40px;
  position: relative;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
  height: 225px;

}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;

}
.goods-info .price{
  color: deeppink;
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}

</style>