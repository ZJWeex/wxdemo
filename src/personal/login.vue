<template>
    <div class='wrapper' @click="resignBlur">
        <div style="width: 580px;justify-content:flex-start">
            <div class="phone-div">
                <image class="phoneIcon" src="https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/loginIcon/loginPhoneIcon.png"/>
                <input type="tel" class="input-number" 
                        placeholder="输入手机号码"
                        max-length=11
                        maxlength=11
                        ref="phone"
                        return-key-type="done" 
                        @change="numberchange" @input="numberinput"/>
            </div>
            <div class="code-div">
                <div class="div-code">
                    <input type="number" class="input-code" 
                        placeholder="输入验证码"
                        ref="code" 
                        @change="codechange" @input="codeinput"/>
                </div>
                <text class="get-code" 
                     :style="{'background-color': countDowningEnable ? '#ea333d':'#999' }" 
                     @click="getVerCode">{{ countDown }}</text>
            </div>
        </div>
        <div class="prcol-info">
            <image class="selectIcon" resize="contain"
                    :src="selectAgree ? Agree : unAgree" 
                    @click="onSelectProtocol"/>
            <text class="prcol">我同意</text>
            <text class="prcol" style="color:red;" @click="onProtocol(1)">《淘菜猫服务协议》</text>
            <text class="prcol">和</text>
            <text class="prcol" style="color:red;" @click="onProtocol(2)">《淘菜猫隐私权政策》</text>
        </div>
        <div class="login"
            @click="onLoginClick" 
             :style="{'background-color': countDowningEnable&&codeText.length>=4 ? '#ea333d':'#999999' }">
            <text class="login-text">登录</text>
        </div>
        <text class="des-info">未注册的手机号，自动注册为淘菜猫用户</text>
    </div>
</template>

<script>

const modal = weex.requireModule('modal');

export default {
    components: { },
    data() {
        return {
            countDown:'发送验证码',
            countDowningEnable:false,
            phoneNumber:'',
            codeText:'',
            unAgree:'https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/loginIcon/unagreeicon.png',
            Agree:'https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/loginIcon/agreeicon.png',
            selectAgree:true,
        }
    },
    created() {

    },
    methods: {
        //输入手机号
      numberchange: function (event) {
             this.phoneNumber = event.value;
            console.log('phoneNumber:', this.phoneNumber);
      },
      numberinput: function (event) {
          this.phoneNumber = event.value;
          if(this.phoneNumber.length == 11){
                 this.countDowningEnable = true;
             }
          console.log('phoneNumber:', event.value);
      },
      //验证码输入
      codechange:function(event) {
          this.codeText = event.value;
          console.log('codeNumber:', event.value);
      },
      codeinput: function(event) {
          this.codeText = event.value;
          console.log('codeNumber:', event.value);
      },
      //输入失去焦点
      resignBlur: function(e) { 
        //   this.$refs['input'].blur();
      },
      //获取验证码
      getVerCode: function() {
          
          if(this.phoneNumber.length == 0){
              modal.toast({message:'请输入手机号',duration: 1.0});
              return;
          }else if(this.phoneNumber.length != 11) {
              modal.toast({message:'请输入有效的手机号',duration: 1.0});
              return;
          }

          this.onCountDown();
      },
      //倒计时
      onCountDown:function() {
          const that = this;
          if(!that.countDowningEnable) return;
        
          var second = 59
          that.countDown =  second +'秒'
           that.countDowningEnable = false;

         var timer = setInterval(() => {
              second = second - 1;
              if(second <= 0){
                   clearInterval(timer);
                  that.countDown = '重获验证码'
                  that.countDowningEnable = true;
              }else{
                  that.countDown =  second +'秒'
              } 
            }, 1000);
      },
      //协议事件
      onProtocol: function(number) {
          //number：1-服务协议；2-隐私权政策
          if(number==1) {
              console.log('服务协议')
          }else if(number == 2) {
              console.log('隐私权政策')
          }
      },
      //选中协议事件
      onSelectProtocol: function() {
       this.selectAgree = !this.selectAgree;
      },
      //登录操作
      onLoginClick:function() {
          if(!countDowningEnable || codeText.length<4) return;
      },
    }
}
</script>

<style scoped>
.wrapper { 
    /* justify-content: center; */
    position: relative;;
    top: 200px;
    align-items: center;
}
.phone-div {
    flex-direction: row;
    align-items: center;
    border-bottom-color: #dddddd;
    border-bottom-width: 2px;
    margin-bottom: 40px;
}
.phoneIcon {
    width: 34px;
    height: 46px;
}
.input-number {
    margin-left: 20px;
    font-size: 30px;
    height: 80px;
    flex: 1;
    /* placeholder-color:#999; */
    color: #333;
    /* background-color: orange; */
}
.code-div {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

}
.div-code {
    border-bottom-color: #dddddd;
    border-bottom-width: 2px;
    margin-right: 10px;
    height: 80px;
    width: 200px;
}
.input-code {
    font-size: 30px;
    color: #333;
    flex: 1;
}

.get-code {
    color: white;
    font-size: 26px;
    font-weight: bold;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #ea333d;
    border-radius: 10px;
}

.prcol-info {
    flex-direction: row;
    align-items: center;
    margin-bottom: 60px;
    margin-top: 20px;
}
.selectIcon {
    height: 40px;
    width: 80px;
}
.prcol {
    font-size: 24px;
    color:#666666;
}
.login {
    justify-content: center;
    align-items: center;
    width: 580px;
    height: 80px;
    border-radius: 10px;
    background-color: #ea333d;
}
.login-text {
    color: white;
    font-size: 36px;
}
.des-info {
    margin-top: 70px;
    font-size: 24px;
    color: #999;
}

</style>
