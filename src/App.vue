<template>
<div>

  <router-view></router-view>
  <MainTabBar></MainTabBar>
</div>
</template>
<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
export default {
  components:{
    MainTabBar
  }

}
</script>
<style>
@import 'assets/css/base.css';

</style>
