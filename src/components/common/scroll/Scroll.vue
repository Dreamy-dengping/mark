<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>

</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props:{
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
name: "Scroll",
  data(){
  return {
    scroll:null,
  }
  },
    mounted() {
  //ref绑定在组件上面的，就是组件对象，普通元素上就这这个dom元素对象
      console.log(this.$refs.wrapper)
  this.scroll=new BScroll(this.$refs.wrapper,{
    click:true,
    probeType:3,
    pullUpLoad:this.pullUpLoad
  })
//监听滚动位置
      this.scroll.on('scroll',position=>{
        // console.log(position)
        this.$emit('backtopClick',position);
      })
//监听上拉事件
      this.scroll.on('pullingUp', ()=>{
       // console.log('上拉加载更多')
        //发出事件，让外面请求更多数据
        this.$emit('pullingUp')
      })
    }
}
</script>

<style scoped>

</style>