<template>
  <div
    class="title"
    :class="{
      xtrue: isIosX,
      fixed: isFixed,
      normal: normal
    }"
    :style="{'background-color': Opacity}">
    <i class="return" @click="returnBackFunc"></i>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    Opacity: {
      type: String
    },
    isIosX: {
      type: Boolean
    },
    name: {
      type: String
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    normal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    returnBackFunc () {
      this.$JsBridge.GetIosMethods(bridge => {
        bridge.callHandler('ReturnBack', {}, response => {})
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: #fff;
  font-size: 0.34rem;
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0.4rem 0 0 0;
  text-align: center;
  position: relative;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  &.normal {
    color: #2d2d2d;
    i {
      background-image: url("../assets/icon/back_1.png");
    }
  }
  i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background-image: url("../assets/icon/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0.4rem;
    left: 0.24rem;
    bottom: 0;
    margin: auto 0;
  }
  &.xtrue {
    padding: 0.88rem 0 0 0 !important;
    i {
      top: 0.88rem;
    }
  }
  span {
    font-weight: bold;
  }
}
</style>
