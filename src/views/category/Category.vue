<template>
  <div class="category">
<!--    //导航部分-->
    <nav-bar class="nav">
      <template v-slot:middle>
        <div class="cate-item">商品分类</div>
      </template>
    </nav-bar>
<!--  分类目录  -->
    <div class="content">
      <TabMue :categories="categories" class="left" @liClick="liClick"></TabMue>
    </div>

      <div class="content-list right">
        <Scroll class="scrol" ref="scroll">
        <div>
    <TabContentCategory  :subcategories="subcategories" @imgload="imgload"></TabContentCategory>
        </div>
        </Scroll>

      </div>

  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabMue from "./childeren/TabMue";
import {getCategory,getSubcategory} from '@/network/category';
import Scroll from "../../components/common/scroll/Scroll";
import TabContentCategory from './childeren/TabContentCategory'

export default {
  name: "category",
  components:{
    NavBar,
    TabMue,
    Scroll,
    TabContentCategory
  },
  data(){
    return {
      categories:[],
      currentIndex: 0,
      subcategories:[],
      maitKey:"3627"
    }
  },

  methods:{

    imgload(){
     // console.log('imgload')
      this.$refs.scroll.scroll.refresh()

    },
    liClick(index){
     // console.log(typeof index);
      console.log('liClick',index);
      switch (index){
        case 0:
          this.maitKey="3627";
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 1:
          this.maitKey="582";
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 2:
          this.maitKey="596"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 3:
          this.maitKey= "598"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 4:
          this.maitKey="599"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 5:
          this.maitKey="600"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 6:
          this.maitKey= "5253"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 7:
          this.maitKey= "609"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 8:
          this.maitKey="594"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 9:
          this.maitKey="597"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 10:
          this.maitKey="830"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 11:
          this.maitKey="602"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 12:
          this.maitKey="606"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 13:
          this.maitKey="603"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })
          break;
        case 14:
          this.maitKey="605"
          // 请求第一个分类的子数据
          getSubcategory(this.maitKey).then(res => {
            console.log(res);
            this.subcategories=res.data.data.list;
            console.log(res.data.data.list);
          })

      }
    }
  },
  created() {
    //请求分类目录的数据
    getCategory().then(res=>{
      console.log(res);
      //获取分类数据
      this.categories=res.data.data.category.list;
    })
    // 请求第一个分类的子数据
    getSubcategory(this.maitKey).then(res => {
      console.log(res);
      this.subcategories=res.data.data.list;
      console.log(res.data.data.list);
    })
  },





}
</script>

<style scoped>
.category{
  width: 100%;
  height: 100vh;
  position: relative;
}
.cate-item{
 color: deeppink;
  font-weight: bold;
}
.nav{
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.content{
  width: 100%;

}
.left{
  width: 25%;
float: left;
}
.right{
  background-color: red;
  width: 75%;
  float: right;
}
.scrol{
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>