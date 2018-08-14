<!-- 底部加入购物车组件 -->
<template>
    <div class="inCart">
        <div style="justify-content: center;margin-left: 20px;">
            <text class="infoLabel">{{ infoLabel }}</text>
        </div>
        <div class="right-content">
            <div v-if="goodsCount<=0">
              <text class="textadd" @click="addToCart">加入购物车</text>
            </div>
            <div v-else>
                <div class="addreduce">
                    <image class="addimg" @click="addToCart" src='https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/goodsIcon/cart_add.png'/>
                    <text class="goodsCount">{{goodsCount}}</text>
                    <image class="reduceimg" @click="onReduceClick" src='https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/goodsIcon/cart_reduce.png'/>
                </div>
            </div>
            <text :class="[goodsCount<=0 ? 'settlementunable':'settlementselect']" @click="finishClick">结算</text>
        </div>
    </div>
</template>

<script>
var modal = weex.requireModule("modal");

export default {
  data() {
    return {
      infoLabel: "购物车是空的",
      goodsCount: 0
    };
  },
  methods: {
    addToCart: function(e) {
     this.goodsCount++;
      this.infoLabel = "商品数量："+ this.goodsCount;
      
    },
    onReduceClick:function(e) {
        this.goodsCount--;
        if(this.goodsCount<=0){
           this.infoLabel = "购物车是空的"
        }else{
          this.infoLabel = "商品数量："+ this.goodsCount;
        }
    },
    finishClick: function(e) {
      modal.toast({
        message: "结算",
        duration: 0.5
      });
    }
  }
};
</script>

<style scoped>
.inCart {
  flex-direction: row;
  justify-content: space-between;
  background-color: #41b883;
}
.right-content {
  flex-direction: row;
  align-items: center;
}
.settlementunable {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: white;
  background-color: #cccccc;
}
.settlementselect {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: white;
  background-color: #ff0033;
}
.textadd {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
  background-color: orange;
}
.infoLabel {
  color: white;
  font-size: 26px;
}
.addreduce {
  flex-direction: row;
  align-items: center;
}
.addimg {
  width: 44px;
  height: 44px;
  margin-left: 10px;
  margin-right: 10px;
}
.reduceimg {
  width: 44px;
  height: 44px;
  margin-left: 10px;
  margin-right: 10px;
}
.goodsCount {
  font-size: 30px;
  color: #cccccc;
  padding: 20px;
}
</style>
