<template>
  <div class="ewm">
    <div class="ewm-content animated fadeInUp">
      <div class="ewm-main">
        <img src="../assets/icon/header.png" class="main-header">
        <div class="main-title">班主任二维码</div>
        <div class="main-add">请扫描下方二维码</div>
        <img src="" class="main-ewm">
      </div>
      <div class="ewm-cancel bor-t" @click="cancelFunc()">
        <span>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ewm',
  methods: {
    cancelFunc () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
  .ewm {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .7);
    .ewm-content {
      width: 100%;
      position: absolute;
      bottom: 0;
      border-radius: .2rem .2rem 0 0;
      overflow: hidden;
      background: #fff;
      .ewm-main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 5.68rem;
        line-height: 1;
        padding: .5rem 0 0 0;
        box-sizing: border-box;
        background-image: url('../assets/img/bg_ewm.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .main-header {
          width: .72rem;
          height: .72rem;
        }
        .main-title {
          color: #000;
          font-size: .26rem;
          margin: .17rem 0 0 0;
        }
        .main-add {
          color: #999;
          font-size: .24rem;
          margin: .2rem 0 .35rem 0;
        }
        .main-ewm {
          width: 2.8rem;
          height: 2.8rem;
          background: #000;
        }
      }
      .ewm-cancel {
        color: #656565;
        font-size: .3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 1.1rem;
        position: relative;
      }
    }
  }
</style>
