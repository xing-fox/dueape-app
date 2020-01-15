<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    width: 100%;
    line-height: 1;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 105vw;
      background-image: url('../assets/img/tutor.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .content {
      margin: .2rem 0 0 0;
      .header {
        margin: 0 .3rem;
        padding: .4rem .3rem .48rem;
        background: #fff;
        border: .01rem solid rgba(245, 234, 218, 1);
        border-radius: .1rem;
        box-sizing: border-box;
        .image {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          img {
            width: 1.12rem;
            height: 1.12rem;
            background-image: url('../assets/icon/header_tutor.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          div {
            color: #222;
            font-size: .3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.7rem;
            height: .66rem;
            margin: 0 0 0 .28rem;
            box-sizing: border-box;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .16rem;
              border: 1px solid rgba(215, 215, 215, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
        }
        .name {
          color: #222;
          font-size: .34rem;
          margin: .4rem 0 0 0;
          div.input {
            display: flex;
            align-items: center;
            width: 100%;
            height: .76rem;
            margin: .24rem 0 0 0;
            position: relative;
            &:before {
              content: '';
              width: 200%;
              height: 200%;
              border-radius: .12rem;
              border: 1px solid rgba(202, 202, 202, 1);
              transform: scale(.5, .5);
              transform-origin: 0 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1;
            }
            input {
              border: none;
              -webkit-appearance: none;
              font-size: .3rem;
              width: 100%;
              height: .76rem;
              box-sizing: border-box;
            }
          }
        }
      }
      .main {
        height: 1rem;
        margin: .3rem .3rem;
        padding: .6rem 0;
        background: #fff;
        border: .01rem solid rgba(245, 234, 218, 1);
        border-radius: .1rem;
        box-sizing: border-box;
        .select {
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            display: flex;
            align-items: center;
            &:first-child {
              margin: 0 1rem 0 0;
            }
            div {
              width: .3rem;
              height: .3rem;
              margin: 0 .1rem 0 0;
              border: 1px solid rgba(191,191,191,1);
              border-radius: .15rem;
              box-sizing: border-box;
              &.active {
                border-color: #cab482;
                position: relative;
                &:before {
                  content: '';
                  width: .15rem;
                  height: .15rem;
                  border-radius: 50%;
                  background: #cab482;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto auto;
                }
              }
            }
            span {
              font-size: .34rem;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="wrapper">
    <common-title
      Opacity="1"
      name="申请Tutor"
    ></common-title>
    <div class="content">
      <div class="header">
        <div class="image">
          <img src="">
          <div>更改头像</div>
        </div>
        <div class="name">
          <div>姓名</div>
          <div class="input">
            <input type="text" placeholder="请填写姓名">
          </div>
        </div>
      </div>
      <div class="main">
        <ul class="select">
          <li>
            <div class="active"></div>
            <span>在读</span>
          </li>
          <li>
            <div></div>
            <span>已工作</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from "@/components/common-title"
export default {
  name: 'applyTotur',
  data () {
    return {}
  },
  components: {
    CommonTitle
  },
  mounted () {}
}
</script>
