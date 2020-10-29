<template>
<div class="tab-list-item" @click="itemClick">
  <a :href="subcategories.link">
    <img :src="subcategories.image" alt="" @load="imgload">
  </a>
  <div>{{subcategories.title}}</div>
</div>
</template>

<script>
export default {
name: "TabContentListItem",
  props:{
    subcategories:{
      type:Object
    }
  },
  methods:{
    imgload(){
      console.log('imgload');
      this.$emit('imgload','11');
    },
    itemClick(){

    }
  }
}
</script>

<style scoped>
.tab-list-item{
font-size: 12px;
}
.tab-list-item a img{
  width: 50px;
  height: 50px;
}
</style>