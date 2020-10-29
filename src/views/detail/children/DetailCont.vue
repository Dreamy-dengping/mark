<template>

    <div v-if="Object.keys(contentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="contentInfo.user.avatar" alt="">
        <span>{{contentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{contentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{timeFormat(this.contentInfo.created) }}</span>
          <span>{{contentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in contentInfo.images" :key="index">
        </div>
      </div>
    </div>

</template>

<script>
// import {formatDate} from "@/common/utils";

export default {
  name: "DetailCommentInfo",
  data(){
    return{
      created:this.contentInfo.created
    }
  },
  props: {
    contentInfo: {
      type: Object,
    }
  },
  created(){

  },
  methods:{
    //将事件戳转化
     timeFormat(timestamp) {
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
  //如果timestamp是10位数的需要 timestamp* 1000
  var time = new Date(timestamp*1000);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return year + '-' + this.add0(month) + '-' + this.add0(date) + ' ' + this.add0(hours) + ':' + this.add0(minutes) + ':' +this.add0(seconds);
},
 add0(m) {
  return m < 10 ? '0' + m : m;
},
  }

}
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
