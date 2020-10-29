<template>
<div class="check-button" :class="{isCheck:isActive}">
  <img src="@/assets/img/cart/tick.svg" alt="">
</div>
</template>

<script>
export default {
name: "checkButton",
  props:{
  isActive:{
    type:Boolean,
    default:false
  }
  },
   methods:{

   }
}
</script>

<style scoped>
.check-button{
  /*background-color: red;*/

  border-radius: 50%;
  border: 1px solid #aaa;
}
.isCheck{
  border-color: red;
  background-color: red;
}
</style>