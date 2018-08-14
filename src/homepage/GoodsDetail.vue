<template>
 <div @viewappear='viewappear' @viewdisappear='viewdisappear'>
   <!-- 以标签的形式显示导航 -->
   <!-- <div dataRole="navbar"></div> -->
    <list class="list">
      <cell v-for="(item, index) in dataList" :key="index" :index="index">
        <div v-if="item.type === 'banner'">
          <deitail-banner :goodsImgURLs='item.goodsImgs'></deitail-banner>
        </div>
        <div v-if="item.type === 'info'">
          <div class="info">
            <text class="shoppingName">{{item.goodsName}}</text>
            <text class="shoppingDes">{{item.goodsDescribe}}</text>
            <text class="price">¥{{item.storePrice}}</text>
            <div class="priceInfo">
              <text class="originalPrice deleline">¥{{item.goodsPrice}}</text>
              <text class="originalPrice"> 已售{{item.saleNum}}份</text>
            </div>
          </div>   
        </div>
        <div v-if="item.type === 'spec'">
          <spec-cells :selectId='item.selectGoodsId' :specs='item.goodsSpecs' @changeItem="onChangeItem"></spec-cells>
        </div>
        <div v-if="item.type === 'ruleTel'">
          <rule-tel :dataModel='item'></rule-tel>
        </div>
        <div v-if="item.type === 'singeImg'">
          <div v-for="(source, i) in item.gpImgURLs" :key="i">
            <image  class="singeImg" :style="{height:item.imgHeight}" :src="source" @load="onImageLoad(index,$event)"/>
          </div>
        </div>
      </cell>
    </list>
    <!-- 底部菜篮子 -->
    <BottomCart class="bottomCart"></BottomCart>
  </div>
</template>

<script>
import DeitailBanner from "@/components/DeitailBanner.vue";
import SpecCells from "@/components/SpecCells.vue";
import RuleTel from "@/components/RuleTel.vue";
import BottomCart from "@/components/BottomCart.vue";
import Define from '@/Define.js';
import Fetch from '@/Fetch.js'

var modal = weex.requireModule('modal');
var animation = weex.requireModule("animation");
const storage = weex.requireModule('storage')
var globalEvent = weex.requireModule("globalEvent");
var navigator = weex.requireModule('navigator')

export default {
  components: { DeitailBanner, SpecCells, RuleTel, BottomCart },
  name: "商品详情",
  data() {
    return {
      supGoodsId:  '',
      dataList: []
    };
  },
  beforeCreate: function () {
    navigator.setNavBarTitle({
      title:'商品详情'
      },event => {})
    
  },
  created: function() {
    var that = this;
   //key确定唯一性，防止误删
     storage.getItem(Define.kSuperior_goods_id, event => {
          console.log(Define.kSuperior_goods_id + ' ==='+ event.data)
          that.supGoodsId =  event.data === 'undefined' ? '676877695078371328' : event.data
          storage.removeItem(Define.kSuperior_goods_id,event => {})
           console.log(Define.kSuperior_goods_id+'='+ that.supGoodsId)
           that.loadData()   
        })
    
  },
  
  methods: {
    viewappear: function(e) {
      modal.toast({message:e.type})
    },
    viewdisappear: function(e) {
      modal.toast({message:e.type})
    },
    loadData: function() {
       var param = {supGoodsId: this.supGoodsId}
       var that =this
      Fetch.post('superiorGoodsDetail.json',param,function(jsonString){
        // console.log('请求成功' + jsonString)
        that.resultHandle(JSON.parse(jsonString));
        
      },function(err){
        modal.alert({
          message: err,
          okTitle:'确定'
        },function(vaule){})
      })
  
    },
    resultHandle: function(ret) {
      this.dataList = []
       var result = ret.goodsDetail;
       //banner
       if(result.goodsImgURLs){
         this.dataList.push({type: "banner",goodsImgs: result.goodsImgURLs});
       }
       //info
       this.dataList.push({type: "info", goodsName: result.supGoodsName, goodsDescribe: result.supGoodsDescribe,
        goodsPrice: result.supGoodsPrice, storePrice: result.supStorePrice, saleNum: result.supGoodsSaleNum});
       //spec
       /*
       result.productGoodsList = [{supGoodsAliasName:'腱子肉', supGoodsId:'676877695078371328',selfFlag:'true'},
                               {supGoodsAliasName:'纯真酸奶', supGoodsId:'764587003762225152',selfFlag:'false'}]
                               */
       this.dataList.push({ type: "spec", goodsSpecs:result.productGoodsList, selectGoodsId: result.supGoodsId});
       //ruleTel
       this.dataList.push({type: "ruleTel", policy:result.policy,shippingInstructions:result.shippingInstructions,
       policyInstructions:result.policyInstructions,scopeInstructions:result.scopeInstructions, servicePhone:result.servicePhone});
       //singeImg
       this.dataList.push({type: "singeImg", gpImgURLs:result.gpImgURLs, imgHeight: result.gpImgPhotos.height});
    },
    onImageLoad: function(index,event) {
      var that = this;
      console.log('width='+ event.size.naturalWidth +',height=' + event.size.naturalHeight)
      if (event.success){
         var imageEl = event.target
         if (WXEnvironment.platform === 'Web') {
           imageEl.style.width= event.size.naturalWidth+'px';
           imageEl.style.height= event.size.naturalHeight+'px';
         }else if(WXEnvironment.platform === '不执行'){
           animation.transition(imageEl,{
             styles:{
               width: event.size.naturalWidth+'px',
               height: event.size.naturalHeight+'px'
             },
             duration: 0,//此处需设置为0
             timingFunction: 'ease',
             delay: 0,
             needLayout:true,
           }, function(e){
             console.log('fail'+e.message)
           })
           
         }
         
      }
    },
    onChangeItem: function(goodsId) {
      console.log('goodsId'+ goodsId)
      this.supGoodsId = goodsId;
      this.loadData();
    },
    
  }
};
</script>

<style scoped>

.list {
  position:fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 100px;
  /* background-color: #efefef; */
}
.info {
  justify-content: center;
  align-items: center;
}
.shoppingName {
  font-size: 36px;
  margin: 10px;
}
.shoppingDes {
  font-size: 28px;
  color: #999999;
  margin: 5px;
}
.price {
  font-size: 40px;
  color: red;
  margin: 5px;
}
.priceInfo {
  flex-direction: row;
  align-items: center;
}
.originalPrice {
  font-size: 24px;
  color: #999999;
  margin: 5px;
}
.deleline {
  text-decoration:line-through;
}
.base64{
   display: inline-block;
   color: #999; 
   font-size: 24px; 
   background-image: url(data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==); 
   background-repeat: repeat-x; 
   background-position: left center; 
   height: 32px; 
   line-height: 32px;
  }

.spec {
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 40px;
}
.singeImg {
  width: 750;
  height: 600;
}
.bottomCart {
    bottom: 0px;
    height: 100px;
    position: fixed;
    left: 0px;
    right: 0px;
  }
</style>
