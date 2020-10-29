<template>
  <div class="tab-content-category">
<TabContentListItem v-for="(item,index) in subcategories"
                    :key="index" :subcategories="item" @imgload="imgload" class="item"></TabContentListItem>
  </div>
</template>

<script>

import TabContentListItem from "./TabContentListItem";
  export default {
    name: "TabContentCategory",
components:{
  TabContentListItem,
},
    props:{
      subcategories:{
        type:Object
      }
    },
    methods:{
      imgload(){
        this.$emit('imgload')
      }
    }
  }
</script>

<style scoped>
.tab-content-category{
  display: flex;
  flex-wrap: wrap;
 justify-content: space-around;
}
.item{
  flex: 33%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 10px;
}
</style>
