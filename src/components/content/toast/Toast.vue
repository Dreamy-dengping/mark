<template>
<div class="toast" v-show="isShow">
  {{message}}
</div>
</template>

<script>
export default {
name: "Toast",
  props: {
    message: {
      type: String

    },
    isShow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>

</style>