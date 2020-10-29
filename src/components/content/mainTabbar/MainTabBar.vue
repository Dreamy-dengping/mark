<template>
  <TabBar>
    <TabBarItem link="/home">
      <template v-slot:icon>
         <img src="@/assets/img/tabbar/home.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
      <img  src="@/assets/img/tabbar/home_active.svg" alt=""/>
      </template>
      <template v-slot:text>
           <div>首页</div>
      </template>

    
    </TabBarItem>
   
    <TabBarItem link="/category">
      <template v-slot:icon>
         <img src="@/assets/img/tabbar/category.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
      <img  src="@/assets/img/tabbar/category_active.svg" alt=""/>
      </template>
      <template v-slot:text>
           <div>分类</div>
      </template>

    
    </TabBarItem>
   
    <TabBarItem link="/shop">
      <template v-slot:icon>
         <img src="@/assets/img/tabbar/cart.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
      <img  src="@/assets/img/tabbar/cart_active.svg" alt=""/>
      </template>
      <template v-slot:text>
           <div>购物车</div>
      </template>

    
    </TabBarItem>
   
    <TabBarItem link="/profile">
      <template v-slot:icon>
         <img src="@/assets/img/tabbar/profile.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
      <img  src="@/assets/img/tabbar/profile_active.svg" alt=""/>
      </template>
      <template v-slot:text>
           <div>我的</div>
      </template>

    
    </TabBarItem>
   
    </TabBar>
</template>

  <script>
    import TabBar from '@/components/common/tabbar/TabBar'
    import TabBarItem from '@/components/common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, 
        TabBarItem
      }
    }
  </script>

<style >

</style>
