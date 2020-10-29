<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="middle"><slot name="middle"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  line-height: 44px;
  height: 44px;
  /*background-color: red;*/
  display: flex;
  width: 100%;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.3);
}
.left, .right{
  width: 60px;
  height: 44px;
}
.middle{
  flex: 1;
  color: #fff;
}
</style>