<template>
<div id="detail">

<!--  顶部导航-->
<DetailNavBar class="detal-nav" @itemClick="itemClick" ref="nav"></DetailNavBar>

  <scroll class="wrapper" ref="scroll" @backtopClick="backtopClick">
    <!--  详情轮播-->
<!--    <ul>-->
<!--      <li v-for="(item,index) in $store.state.carList" :key="index">{{item}}</li>-->
<!--    </ul>-->
    <detail-swiper :topImages="topImages"></detail-swiper>
    <!--  商品数据-->
    <detail-base-info :goods="goods"></detail-base-info>
<!--商店数据-->
<DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo" @imgload="imgload"  ref="param"></DetailGoodsInfo>
<!--    参数数据-->
    <DetailParamInfo :paramInfo="paramInfo" ></DetailParamInfo>
<!--    品论数据-->
<detail-cont :contentInfo="contentInfo" ref="content"></detail-cont>
    <!--推荐数据-->
    <DetailGoodList :goods="recommends" ref="recommend"></DetailGoodList>
  </scroll>

<!--添加一个回到顶部的组件-->
  <BackTop class="back-top" @click.native="backtopClicks" v-show="isShow" ></BackTop>
<!--  底部导航-->
  <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
  <Toast :message="message"  :is-show="isShows" class="toast"></Toast>
</div>
</template>

<script>
import DetailNavBar from "./children/DetailNavBar";
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail';
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailParamInfo from "./children/DetailParamInfo";
import BackTop from "@/components/content/backtop/BackTop";
import DetailCont from "@/views/detail/children/DetailCont";
import DetailGoodList from "./children/DetailGoodList";
import DetailBottomBar from "./children/DetailBottomBar";
import Toast from "../../components/content/toast/Toast";
export default {
name: "Detail",
  components: {
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    BackTop,
    DetailCont,
    DetailGoodList,
    DetailBottomBar,
    Toast
  },
  data(){
  return{
    isShow:false,
    iid:null,
    topImages:[],
    goods:{},
    shop:{},
    detailInfo:{},
    paramInfo:{},
    contentInfo:{},
    recommends:[],
    themeTops:[],
    currdentIndex:0,
    //product:{}
    message:'商品添加购物车成功',
    isShows:false
  }
  },
  created() {
    //console.log(this.$route.query.iid)
    //保存传入的iid数据
  this.iid=this.$route.query.iid
    //根据iid,请求对应的数据
    getDetail (this.iid).then(res=>{
    console.log(res)
      //分离数据
      //获取顶部轮播图的数据
      const data=res.data.result
     // console.log(data.itemInfo.topImages)
      this.topImages=data.itemInfo.topImages;
      //获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      //商店数据
      this.shop=new Shop(data.shopInfo);
      //详情穿着之内的
      this.detailInfo=data.detailInfo;
      //拿到 参数数据
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
      //拿到评论的数据
      if(data.rate.Crate!==0)
      this.contentInfo=data.rate.list[0];
      //调用this.$nextTick(),可以保证等页面数据传过去渲染完成后才会执行，在这里就是，直接拿offsettop可能为空，因为页面数据还没渲染完
  // this.$nextTick(()=>{
  //   //this.themeTops=[]
  //   //虽然这里面对影的dom元素确实已经渲染出来了，但是图片还是没有加载完，因此这里获取到的offsettop还是不准确,放到下面图片加载完毕的里面回调就队了
  //   this.themeTops.push(0);
  //   this.themeTops.push(this.$refs.param.$el.offsetTop);
  //   this.themeTops.push(this.$refs.content.$el.offsetTop);
  //   this.themeTops.push(this.$refs.recommend.$el.offsetTop);
  //   console.log(this.themeTops)
  // })
    })
    //拿到推荐的数据
    getRecommend().then(res=>{
      console.log(res)
      //console.log(res.data.data.list);
      this.recommends=res.data.data.list

    })


  },
  methods:{
  //图片加载完毕，刷新，避免下拉不动的bug
    imgload(){
      console.log('imgload');
      this.$refs.scroll.scroll.refresh();
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.content.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
     // console.log(this.themeTops)
    },
    //监听回到顶部的
    backtopClicks(position){
     // console.log('backtopClick');
    this.$refs.scroll.scroll.scrollTo(0,0,600);
    },
    backtopClick(position){
      //当上拉到1000的时候，让按钮显示出来

      if(-position.y>800){
        this.isShow=true
      }
      else{
        this.isShow=false
      }

      //1.获取y值
      const postionY=-position.y;
    //  console.log(postionY)
     // 2.和主题当中的offsettop值进行对比
     //  for (let i =0;i< this.themeTops.length;i++){
     //  if(((i<this.themeTops.length-1)&&(postionY>=this.themeTops[i])&&(postionY<this.themeTops[i+1]))||((i===this.themeTops.length-1)&&(postionY>=this.themeTops[i]))){
     //    this.currdentIndex=i;
     //    this.$refs.nav.currdentIndex=this.currdentIndex
     //    console.log(i)
     //  }
     //  }

    },
    //监听顶部导航的点击
    itemClick(index){
      console.log(index);
      //这里数据不能写死，应该是每个item的offsettop值
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTops[index],800);

    },
  //获取购物车需要展示的信息
    addToCart(){
     //console.log('addToCart')
      var product={}
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.oldPrice;
      product.iid=this.iid;
      //将商品添加到购物车
     // this.$store.state.carList.push(product);

      this.$store.commit('addCarts',product);
      console.log( this.$store.state.carList);
//显示添加成功
this.isShows=true;
setTimeout(()=>{
this.isShows=false
},1500)
    },

  },



}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 99;
  background-color: #faf8f8;
  height: 100vh;
}
.detal-nav{
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.wrapper{
 height: calc(100% - 44px);
}
.back-top{
  position: fixed;
  bottom: 60px;
  right: 7px;
}
.toast{
  position: fixed;
  left: 50%;
  padding: 5px 20px;
  color: #fff;
  top: 50%;
  font-size: 13px;
  border-radius: 8px;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.5);
}
</style>