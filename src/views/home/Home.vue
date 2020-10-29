<template>
  <div id="home">
<!--  顶部-->
    <NavBar class="home-nav">
    <template v-slot:middle>
      <div>购物街</div>
    </template>
    </NavBar>
    <!--  控制栏-->
    <TabConTrol :title="title" class="tab-control" @tabClick="tabClick" ref="TabConTrol1" v-show="isTabFixed">

    </TabConTrol>
<!--轮播图-->

<!--    scroll-->
    <scroll class="wrapper" ref="scroll" @backtopClick="backtopClick" :pull-up-load="true" @pullingUp="pullingUp">
      <HomeSwiper :banner="banner" @imgload="imgload">

      </HomeSwiper>
      <!--    推荐-->
      <recommend-view :recommends="recommends">

      </recommend-view>
      <FeatureView>

      </FeatureView>
      <!--  控制栏-->
      <TabConTrol :title="title" class="tab-control" @tabClick="tabClick" ref="TabConTrol">

      </TabConTrol>

      <!--商品-->
      <GoodList :goods="goods[currentType].list"></GoodList>

    </scroll>

    <!--  回到顶部-->
    <!--      组件是不能直接监听点击的，要加上native修饰符，如果在组件内部点击，要把事件传出来，太复杂，直接监听组件对象-->
    <back-top @click.native="BackClick" v-show="isShow"></back-top>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata,getHomeGoods} from '@/network/home';
import HomeSwiper from "./children/HomeSwiper";
import RecommendView from "./children/RecommendView";
import FeatureView from "./children/FeatureView";
import TabConTrol from "@/components/content/tabControl/TabConTrol";
import GoodList from "@/components/content/goods/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";
export default {
  name:'home',
components:{
  NavBar,
  HomeSwiper,
  RecommendView,
  FeatureView,
  TabConTrol,
  GoodList,
  Scroll,
  BackTop
},
  data(){
  return{
    title:["流行","新款","精选"],
    banner:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    isShow:false,
    tabOffsetTop:0,
    isTabFixed:false,
    offsetY:0
  }
  },
  mounted() {
  //所有组件都有一个$el属性，表示组件里面的元素
   // console.dir(this.$refs.TabConTrol)
    //这样拿到的offsettop值是不包含图片高度的，还没有缓冲出来
    //console.log(this.$refs.TabConTrol.$el.offsetTop)

  },
  created() {
  //1.请求多个数据
   this. getHomeMultidata()
//2.请求商品数据
    this.getHomeGoods('pop');
   this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
  //1.请求多个数据,多加一层，避免上面的代码太多
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        const result=res.data;
        console.log(result)
        this.banner=result.data.banner.list;
        this.recommends=result.data.recommend.list;
      })
    },
    //2.请求商品数据
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        //加载完毕之后重新刷新
        this.$refs.scroll.scroll.finishPullUp()
      })
    },


    //3.tabcontrol的监听事件
    tabClick(index){
      //console.log(index);
      switch (index){
        case 0:
          this.currentType='pop';
          break;
        case 1:
          this.currentType='new';
          break;
        case 2:
          this.currentType='sell';
          break;
      }
      this.$refs.TabConTrol.currdentIndex=index;
      this.$refs.TabConTrol1.currdentIndex=index;
    },
    //监听回到顶部的点击
    BackClick(){
      //console.log('BackClick')；
    //  console.log(this.$refs.scroll)
      //记得回到顶部的要传入参数，指定回到的位置，第三个参数还可以传入一个时间，增加用户体验,多久之后回到顶部
      this.$refs.scroll.scroll.scrollTo(0,0,700);
    },
//监听回到顶部的位置
    backtopClick(position){
   // console.log(position)
      if(-position.y>800){
        this.isShow=true
      }
      else{
        this.isShow=false
      }
  //决定tabcontrol是否吸顶（position）
    if (-position.y>this.tabOffsetTop){
      this.isTabFixed=true
    }
    else {
      this.isTabFixed=false
    }
    },
    //上拉加载更多
    pullingUp(){
      //console.log('上拉加载更多')
      this.getHomeGoods(this.currentType);
      //重新刷新，不然会造成上拉不懂的bug
      this.$refs.scroll.scroll.refresh()
    },
    imgload(){
      //所有组件都有一个$el属性，表示组件里面的元素
      // console.dir(this.$refs.TabConTrol)
      //这样拿到的offsettop值是不包含图片高度的，还没有缓冲出来
      //console.log(this.$refs.TabConTrol.$el.offsetTop),这里如果影响效率，可以使用节流
      this.tabOffsetTop=this.$refs.TabConTrol.$el.offsetTop;
      //console.log(this.$refs.TabConTrol.$el.offsetTop);
     // console.log(this.tabOffsetTop)
    }
  },

  // activated() {
  // this.$refs.scroll.scrollTo(0,this.offsetY)
  // },
  // deactivated() {
  // this.offsetY=this.$refs.scroll.scroll.y
  // }

}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  /*设置不要被内容撑开，为视口高度*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 99;*/
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 99;
}
.wrapper{
position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

</style>