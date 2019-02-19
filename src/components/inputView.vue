<template>
  <div class="view">
    <img class="left" :src="imgUrl" alt="" />
    <input class="input" :type="type" v-model="text" :placeholder="placeText" />
    <img v-if="hasRight"
         @click="changeState"
         class="right"
         :src="rightSrc" alt="">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
declare function require(string): string;

@Component
export default class inputView extends Vue {
  text: string = '';
  rightSrc: string = require('@/assets/images/login/show_password.png');
  msg: string = 'text'

  // send 处理给父组件传值的逻辑
  @Emit('bindSend') send(msg: string){};

  @Prop({ default: '' })
  private placeText: string;

  @Prop({ default: '' })
  private imgUrl: string;

  @Prop({ default: 'text' })
  private type: string;

  @Prop({ default: false })
  private hasRight: boolean;

  private created() {

  }

  changeState(): void {
    this.rightSrc = (this.rightSrc) === require('@/assets/images/login/show_password.png') ?
      require('@/assets/images/login/hide_password.png') :
      require('@/assets/images/login/show_password.png') ;
    this.msg = (this.rightSrc) === require('@/assets/images/login/show_password.png') ?
      'password' : 'text';
    this.send(this.msg)
  }
}
</script>

<style lang="scss" scoped>
.view {
  width: 560px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid #D6D6D6;
  margin-top: 30px;
  .left {
    width: 26px;
    height: 32px;
    margin-left: 26px;
  }
  .input {
    width: 398px;
    height: 40px;
    margin-left: 20px;
  }
  .right {
    width: 32px;
    height: 26px;
    margin-left: 20px;
  }
}
</style>