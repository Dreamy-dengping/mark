<template>

  <Swiper class="swiper-item">
    <swiper-item v-for="(item,index) in topImages" :key="index" >
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>

</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      }
    }

}
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
.swiper-item img{
  width: 100%;
}
</style>