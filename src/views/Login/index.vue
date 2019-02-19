<template>
    <div class="box">
        <div class="content">
            <img class="logo" src="../../assets/images/login/logo.png" alt="">
            <inputView :placeText="placeUser"
                       ref="User"
                       :imgUrl="imgUser"
                       :type="typeUser"
                       :hasRight="rightUser" />
            <inputView :placeText="placePsw"
                       ref="Psw"
                       :imgUrl="imgPsw"
                       :type="typePsw"
                       @bindSend="propMsg"
                       :hasRight="rightPsw" />
            <buttonView @bindSend="login" />
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import inputView from '@/components/inputView';
import buttonView from '@/components/buttonView';
declare function require(string): string;

@Component({
  name: 'Login',
  components: {
    inputView,
    buttonView,
  }
})

export default class Login extends Vue {
  username: string = "";
  password: string = "";
  placeUser: string = "请输入用户名/手机号";
  placePsw: string = "请输入密码";
  imgUser = require('@/assets/images/login/phone.png');
  imgPsw = require('@/assets/images/login/password.png');
  rightUser: boolean = false;
  rightPsw: boolean = true;
  typeUser: string = 'text';
  typePsw: string = 'password';
  mounted() {

  }
  linkTo(): void {
    this.$router.push({ path: '/Register' })
  }
  login(): void {
    if(this.$refs.User.text === ''){
      alert('用户名不得为空')
    }else if(this.$refs.Psw.text === ''){
      alert('密码不得为空')
    }else{
      this.loginAction();
    }
  }
  async loginAction(): void {
    console.log('go---->')
  }
  propMsg(msg: string) {
    this.typePsw = msg
  }
}
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2E66E7;
    .content {
        width: 92%;
        height: 92%;
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .logo {
            width: 160px;
            height: 160px;
            margin-top: 100px;
            margin-bottom: 100px;
        }
    }
}
</style>
