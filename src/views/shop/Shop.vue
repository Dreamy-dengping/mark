<template>
<div class="cart">
<!--  //导航-->
<NavBar class="car">
  <template v-slot:middle>
    <div class="buy">购物车({{$store.state.carList.length}})</div>
  </template>
</NavBar>
<!--  商品列表-->
  <scroll class="wrapper">
    <CarList></CarList>
  </scroll>
<CartBottom></CartBottom>
</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CarList from "./children/CarList";
import Scroll from "@/components/common/scroll/Scroll";
import CartBottom from "./children/CartBottom";
export default {
name: "Shop",
  components:{
  NavBar,
    CarList,
    Scroll,
    CartBottom
  },
  computed:{

  }
}
</script>

<style scoped>
.cart{
  /*padding-top: 44px;*/
  height:100vh;
  position: relative;
}
.wrapper{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.car{
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.buy{
  color: #fdf8f8;
  font-weight: bold;
}

</style>