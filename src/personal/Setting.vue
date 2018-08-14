<template>
  <div>
     <scroller class="scroller"> 
        <div class="row" v-for="(item, index) in rows" :key="index" @click="onclick(index)">
          <div class="content">
              <image class="iconImg" :src="item.icon" resize="contain"/>
              <text class="text">{{item.name}}</text>
          </div>
          <div v-if="item.type === 1">
              <div style="padding-right:20px">
                  <switch checked="true" @change="onchange"></switch>
              </div>    
          </div>
          <div v-else-if="item.type === 2">
             <text style="padding-right:20px">0.36M</text>    
          </div>
          <div v-else>
             <image class="arrowImg" :src='arrow' resize="contain"/>    
          </div>
        </div>
     </scroller>
     <text class="loginOut" @click="loginOut">退出登录</text>
  </div>
</template>

<script>
const modal = weex.requireModule("modal");

export default {
  // name: "设置",
  data() {
    return {
        arrow:'https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_return.png',
      rows: [
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_notice.png",
          name: "推送通知设置",
          type: 1
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_cache.png",
          name: "清除缓存",
          type: 2
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png",
          name: "关于我们",
          type: 0
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_xing.png",
          name: "欢迎评分",
           type: '0'
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/explain.png",
          name: "特别声明",
           type: '0'
        }
      ]
    };
  },
  created: function() {
      
  },
  methods: {
      //点击cell
    onclick: function(index) {
      console.log("点击" + index);
      switch(index){
          case 0:break;
          case 1:
             modal.confirm({
                 message: '确定清楚本地缓存 ?',
                 okTitle: '确定',
                 cancelTitle: '取消'
             },function(vaule){
                 if(vaule === '确定'){
                     console.log("清楚缓存");
                 }
             })
             break;
          case 2:
          case 3:
          case 4:
          let msg = this.rows[index].name;
          console.log(msg+'xxx')
            modal.toast({
                 message: msg
               })
            break;
          
      }
    },
    //退出
    loginOut: function() {
      modal.alert(
        {
          message: "退出登录",
          okTitle: "确定"
        },
        function(value) {}
      )
    },
    //switch切换
    onchange: function(e) {
        var message;
        if(e.checked){
            message = '通知开启'
        }else{
            message = '通知关闭'
        }
        modal.toast({
        message: message
      });
    }
  }
};
</script>

<style scoped>
.scroller {
  width: 750px;
  height: 600px;
}
.row {
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dddddd;
}
.content {
  height: 100px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}
.iconImg {
  width: 36px;
  height: 36px;
}
.text {
  margin-left: 20px;
  font-size: 32px;
  color: #333333;
}
.arrowImg {
  width: 20px;
  height: 30px;
  margin-right: 20px;
}
.loginOut {
  font-size: 50px;
  width: 550px;
  text-align: center;
  margin-top: 30px;
  margin-left: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #dddddd;
  background-color: rgb(226, 35, 35);
}
</style>
