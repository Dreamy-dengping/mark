<template>
<div class="cart-bottom">
  <div class="utton" >
    <check-button class="check-button" :isActive="isActive"  @click.native="checkallclick"></check-button>
    <span class="flot">全选</span>
  </div>
<div class="total">
  合计：￥{{totalprice}}
</div>
  <div class="conp">
    去计算：({{checklenght}})
  </div>
</div>
</template>

<script>
import checkButton from "../../../components/content/checkButton/checkButton";
export default {
name: "CartBottom",
  components:{
    checkButton
  },
  computed:{
    totalprice(){
      return this.$store.state.carList.filter(item=>{
        return item.isCheck;
      }).reduce((pre,item)=>{
        //价格为字符串，先转化为整数
      return  parseFloat( Number(((item.price).substring(1)))*(item.count) + pre);
      },0).toFixed(2)
    },
    checklenght(){
return this.$store.state.carList.filter(item=>(item.isCheck)).length;
    },
    isActive(){
      return !(this.$store.state.carList.filter(item=>!item.isCheck).length);
    },

  },
  methods:{
    checkallclick(){

     console.log(11)
      if(this.isActive){
        for(let i of this.$store.state.carList){
          i.isCheck=false;
        }
      }else {
        for(let i of this.$store.state.carList){
          i.isCheck=true;
        }
      }

    }
  }
}
</script>

<style scoped>
.cart-bottom{
  height: 44px;
  /*background-color: red;*/
  background-color: #e8e5e5;
  position: relative;
  bottom: -474px;
  z-index: 99;
}
.check-button{
  height: 20px;
  width: 20px;
  float: left;
  padding-left: 5px;
}
.flot{
  float: left;
  padding-left: 5px;
}
.utton{
padding-top: 15px;
  box-sizing: border-box;
}
.conp{
  float: right;
  width: 70px;
  height: 40px;
  background-color: red;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
  text-align: center;
  transform: translate(0,-31px);
}
</style>