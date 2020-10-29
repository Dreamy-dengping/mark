import { createStore } from 'vuex'

export default createStore({
  state: {
    carList:[],
  },
  mutations: {
    addCarts(state,payload){
      let oldProduct=null;
      for (let item of state.carList){
        if(item.iid===payload.iid){
          oldProduct=item;
        }
      }
      if(oldProduct){
        oldProduct.count+=1;
      }
      else {
        payload.count=1;
        //添加一个属性check,M默认选中
        payload.isCheck=true;
        //先回来到这，因为刚刚第一次点击加入购物车没有东西，执行这里，因此count就定义了
       state.carList.push(payload)
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
