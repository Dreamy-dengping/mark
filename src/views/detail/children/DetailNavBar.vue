<template>
<div class="nav-bar">
  <nav-bar>
    <template v-slot:left>
      <img src="@/assets/img/common/back.svg" alt="" class="imgss" @click="imgClick">
    </template>
    <template v-slot:middle>
      <div class="middles">
        <div class="nav-item" v-for="(item,index) in title" :key="index"
             :class="{isactive:currdentIndex===index}"
             @click="itemClick(index)">{{item}}</div>
      </div>

    </template>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
  return{
    title:["商品","参数","评论","推荐"],
    isActie:true,
    currdentIndex:0
  }
  },
  methods:{
    itemClick(index){
     // console.log(index)
      this.currdentIndex=index;
      this.$emit('itemClick',index);
    },
    //回到首页
    imgClick(){
      this.$router.push('/home')
    }

  }
}
</script>

<style >


.middles{
  display: flex;
}
.nav-item{
  color: #333333;
  font-size: 14px;
  flex: 1;
}
.isactive{
  color: red;
  border-bottom: 2px solid red;
}
.imgss{
  margin-top: 13px;
}
</style>