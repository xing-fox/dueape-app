<template>
  <div
    class="title"
    :class="{
      xtrue: isIosX,
      fixed: isFixed,
      normal: normal
    }"
    :style="{background: Opacity}">
    <i @click="returnBackFunc"></i>
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
        bridge.callHandler('dueWebCallNative',{
          actionType: 0,
          actionTarget: 'ReturnBack',
          data: {}
        })
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
  padding: 0.48rem 0 0 0;
  text-align: center;
  position: relative;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &.normal {
    color: #2d2d2d;
    i {
      background-image: url("../assets/icon/back_1.png");
    }
  }
  i {
    display: inline-block;
    width: 0.88rem;
    height: 0.88rem;
    background-image: url("../assets/icon/back.png");
    background-size: 45% 45%;
    background-position: center left;
    background-repeat: no-repeat;
    position: absolute;
    left: .24rem;
    bottom: 0;
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
