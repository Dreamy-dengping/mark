<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgload(){
      //console.log(111);
      //图片加载完毕，发射时间，告诉外面已经图片加载完毕了
      this.$emit('imgload')
    }
  }
}
</script>

<style scoped>

.slide img{
  height: 180px;
  width: 100%;
}
</style>