<template>
    <button class="view" @click="click">登录</button>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class buttonView extends Vue {
  // send 处理给父组件传值的逻辑
  @Emit('bindSend') send(){};

  click(): void {
    this.send()
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
    justify-content: center;
    flex-direction: row;
    border: 1px solid #D6D6D6;
    outline: 0;
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    background: linear-gradient(to right, #4499FF , #2E66E7);
      position: absolute;
      bottom: 100px;
  }
</style>
