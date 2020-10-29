<template>
<div class="car-list">
  <ul class="cat-item">
    <li v-for="(item,index) in $store.state.carList" :key="index">
      <div class="check">
        <check-button :isActive="item.isCheck" @click.native="isCheck(item)"></check-button>
      </div>
      <div class="left">
        <img :src="item.image" alt="">
      </div>
      <div class="right">
        <div class="title">
      {{item.title}}
        </div>
        <div class="item-desc">
          {{item.desc}}
        </div>
        <div class="item-price">{{item.price}}</div>
        <div class="item-count">×{{item.count}}</div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import checkButton from "../../../components/content/checkButton/checkButton";
export default {
name: "CarList",
  components:{
    checkButton
  },
  methods:{
    isCheck(item){
      item.isCheck=!item.isCheck;
      console.log(item);
    },

  }
}
</script>

<style scoped>
/*.car-list{*/
/*  height:100vh;*/
/*}*/
.cat-item{
  width: 100%;
}
.cat-item li{
  width: 100%;
  display: flex;
  border-bottom: 1px salmon solid;
  box-shadow: 0 0px 2px 0px salmon;
  padding-top: 5px;
  margin-top: 5px;
}
.cat-item li .left{
  flex: 1;
padding-right: 5px;
}
.cat-item li .right{
  flex: 3;
  padding-top: 10px;
}
.title{
  width: 200px;
  font-weight: bolder;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.item-desc{
  width: 200px;
  font-size: 13px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  line-height: 64px;
}

.left img{
  width: 80px;
  height: 130px;
border-radius: 5px;
}
.item-price{
  float: left;
  color: deeppink;
}
.item-count{
  float: right;
 padding-right: 20px;
}
.check{
  margin-top: 49px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>